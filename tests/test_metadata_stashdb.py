"""StashDB 候选只进入隔离复核队列，明确采用时保护人工字段与版本。"""
from __future__ import annotations

import json
import io
import sqlite3
import tempfile
import unittest
from unittest.mock import patch
from pathlib import Path
from PIL import Image

from peach import stashdb_matching, stashdb_preview
from peach.field_owners import write_owned_fields
from peach.migrations import upgrade
from peach.repository import LedgerDatabase

MIGRATIONS = Path(__file__).resolve().parents[1] / 'migrations'


class Config:
    def __init__(self, root):
        self.root = root

    def directory(self, name):
        path = self.root / name
        path.mkdir(parents=True, exist_ok=True)
        return path


class StashDBCandidateTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.root = Path(self.tmp.name).resolve()
        path = self.root / 'ledger.db'
        sqlite3.connect(path).close()
        upgrade(path, MIGRATIONS)
        self.db = LedgerDatabase(path)
        self.config = Config(self.root)
        with self.db.write_transaction() as connection:
            connection.execute("INSERT INTO asset(id,location,path,name,medium) VALUES(1,'local','R:\\media\\sample.mp4','sample.mp4','video')")
            write_owned_fields(connection, [1], {'catalog_title': 'Manual title'}, 'user:manual')

    def save_candidate(self):
        with self.db.read_connection() as connection:
            revision = connection.execute('SELECT mutation_revision FROM asset WHERE id=1').fetchone()[0]
        root = self.config.directory('state') / 'stashdb-review'
        root.mkdir()
        record = {'id': 1, 'label': 'sample.mp4', 'preview': {'revision': revision, 'candidates': [
            {'id': 'scene-1', 'title': 'Remote title', 'date': '2024-01-02', 'studio': 'Example Studio'}]}}
        (root / '1.json').write_text(json.dumps(record), encoding='utf-8')
        return revision

    def test_manual_search_combines_fields_and_filters_partial_date(self):
        class Client:
            incomplete = False
            def studios(self, name):
                return [{'id': 'studio', 'name': 'Example Studio'}]
            def performers(self, name):
                return [{'id': 'actor', 'name': 'Example Actor', 'aliases': []}]
            def scenes(self, filters):
                self.filters = filters
                return ([{'id': 'one', 'title': 'Example', 'release_date': '2021-05-19',
                          'studio': {'name': 'Example Studio'}, 'performers': []},
                         {'id': 'two', 'title': 'Example', 'release_date': '2021-06-01',
                          'studio': {'name': 'Example Studio'}, 'performers': []}], False)
        client = Client()
        result = stashdb_preview.preview_scene(self.config, self.db, 1, client=client,
            search_fields={'title': 'Example', 'actor': 'Example Actor', 'studio': 'Example Studio', 'date': '2021/05'})
        self.assertEqual([row['id'] for row in result['candidates']], ['one'])
        self.assertEqual(client.filters['title'], 'Example')
        self.assertEqual(client.filters['studios']['value'], ['studio'])
        self.assertEqual(client.filters['performers']['value'], ['actor'])
        self.assertNotIn('date', client.filters)

    def test_manual_date_validation(self):
        self.assertEqual(stashdb_matching.manual_date('2020/02/29'), '2020-02-29')
        self.assertEqual(stashdb_matching.manual_date('2021/05'), '2021-05')
        self.assertEqual(stashdb_matching.manual_date('2021'), '2021')
        with self.assertRaises(ValueError):
            stashdb_matching.manual_date('2021/02/29')

    def test_explicit_selection_replaces_manual_title(self):
        revision = self.save_candidate()
        client = unittest.mock.Mock()
        client.scene.return_value = {'id': 'scene-1', 'performers': [], 'images': []}
        result = stashdb_preview.apply_candidate(self.config, self.db, 1, 'scene-1', revision, client=client)
        with self.db.read_connection() as connection:
            row = connection.execute('SELECT catalog_title,release_date,studio FROM asset WHERE id=1').fetchone()
        self.assertEqual(tuple(row), ('Remote title', '2024-01-02', 'Example Studio'))
        self.assertEqual(set(result['updated_fields']), {'catalog_title', 'release_date', 'studio'})
        self.assertEqual(stashdb_preview.review_queue(self.config), [])

    def test_changed_asset_rejects_stale_selection_and_retains_candidate(self):
        revision = self.save_candidate()
        client = unittest.mock.Mock()
        client.scene.return_value = {'id': 'scene-1', 'performers': [], 'images': []}
        with self.db.write_transaction() as connection:
            write_owned_fields(connection, [1], {'studio': 'Manual studio'}, 'user:manual')
        with self.assertRaisesRegex(ValueError, 'changed'):
            stashdb_preview.apply_candidate(self.config, self.db, 1, 'scene-1', revision, client=client)
        self.assertEqual(len(stashdb_preview.review_queue(self.config)), 1)

    def test_unlisted_candidate_is_rejected(self):
        revision = self.save_candidate()
        with self.assertRaisesRegex(ValueError, 'no longer available'):
            stashdb_preview.apply_candidate(self.config, self.db, 1, 'other', revision)
        self.assertEqual(len(stashdb_preview.review_queue(self.config)), 1)

    def test_scan_queues_ambiguous_candidate_without_changing_metadata(self):
        (self.config.directory('secrets') / 'stashdb.json').write_text(
            json.dumps({'api_key': 'test-key', 'enabled': True}), encoding='utf-8')

        class FakeClient:
            incomplete = False

            def studios(self, name):
                return []

            def performers(self, name):
                return []

            def scenes(self, filters):
                return ([{'id': 'scene-1', 'title': 'Manual title', 'studio': {'name': 'Studio'},
                          'release_date': '2024-01-02', 'performers': [], 'duration': 0}], False)

            def close(self):
                pass

            def scene(self, identity):
                return {'id': identity, 'performers': [{'performer': {'id': 'p1', 'name': 'Example Performer', 'images': []}}], 'images': []}

        progress = []
        issues = []
        with patch.object(stashdb_preview.stashdb_client, 'Client', return_value=FakeClient()):
            result = stashdb_preview.scan_assets(self.config, self.db, [{'id': 1, 'name': 'sample.mp4'}],
                progress=lambda **value: progress.append(value), issue=lambda *args, **kw: issues.append(args), active=lambda: True)
        with self.db.read_connection() as connection:
            row = connection.execute('SELECT catalog_title,release_date FROM asset WHERE id=1').fetchone()
        self.assertEqual(tuple(row), ('Manual title', None))
        self.assertEqual(result['stashdb_applied'], 0)
        self.assertEqual(len(stashdb_preview.review_queue(self.config)), 1)
        self.assertEqual(len(progress), 1)
        self.assertEqual(issues, [])

    def test_certain_match_rejects_conflicts_ambiguity_and_truncation(self):
        evidence = {'filename': 'Example Studio - 2024.01.02 Example Title 1080p.mp4'}
        exact = {'id': 'one', 'title': 'Example Title', 'studio': 'Example Studio', 'date': '2024-01-02'}
        result = {'hints': evidence, 'candidates': [exact], 'truncated': False}
        self.assertEqual(stashdb_matching.certain_filename_match(result), exact)
        self.assertIsNone(stashdb_matching.certain_filename_match({**result, 'truncated': True}))
        self.assertIsNone(stashdb_matching.certain_filename_match({**result, 'candidates': [exact, {**exact, 'id': 'two'}]}))
        self.assertIsNone(stashdb_matching.certain_filename_match({**result, 'candidates': [{**exact, 'date': '2024-01-03'}]}))

    def test_manual_match_replaces_cast_studio_and_cover(self):
        from peach.entities import upsert_asset_entity
        with self.db.write_transaction() as connection:
            upsert_asset_entity(connection, kind='performer', name='Old Performer', asset_id=1,
                                role='performer', source='auto:stashdb', update_entity_metadata=False)
            upsert_asset_entity(connection, kind='studio', name='Old Studio', asset_id=1,
                                role='studio', source='auto:stashdb', update_entity_metadata=False)
        revision = self.save_candidate()
        cover = self.config.directory('generated') / 'covers' / 'ASSET-ID-1.jpg'
        cover.parent.mkdir()
        cover.write_bytes(b'old cover')
        buffer = io.BytesIO()
        Image.new('RGB', (320, 240), (100, 150, 200)).save(buffer, format='JPEG')
        client = unittest.mock.Mock()
        client.image.return_value = buffer.getvalue()
        client.scene.return_value = {'id': 'scene-1', 'title': 'Remote title', 'studio': {'id': 's1'},
            'performers': [{'performer': {'id': 'p1', 'name': 'New Performer', 'images': []}}],
            'images': [{'url': 'https://example.com/cover.jpg'}]}
        with patch('peach.cover_artwork._sidecars', return_value={}):
            result = stashdb_preview.apply_candidate(self.config, self.db, 1, 'scene-1', revision, client=client)
        self.assertEqual(result['image_errors'], [])
        self.assertEqual(cover.read_bytes(), buffer.getvalue())
        with self.db.read_connection() as connection:
            rows = connection.execute("SELECT ae.role,e.canonical_name FROM asset_entity ae JOIN entity e ON e.id=ae.entity_id WHERE ae.asset_id=1 ORDER BY ae.role").fetchall()
        self.assertEqual([tuple(row) for row in rows], [('performer', 'New Performer'), ('studio', 'Example Studio')])

    def test_scan_applies_unique_exact_match_without_overwriting_manual_title(self):
        (self.config.directory('secrets') / 'stashdb.json').write_text(
            json.dumps({'api_key': 'test-key', 'enabled': True}), encoding='utf-8')
        with self.db.read_connection() as connection:
            revision = connection.execute('SELECT mutation_revision FROM asset WHERE id=1').fetchone()[0]
        candidate = {'id': 'scene-1', 'title': 'Example Title', 'studio': 'Example Studio', 'date': '2024-01-02'}
        preview = {'hints': {'filename': 'Example Studio - 2024.01.02 Example Title 1080p.mp4'},
                   'candidates': [candidate], 'truncated': False, 'revision': revision}
        client = unittest.mock.Mock()
        client.scene.return_value = {'id': 'scene-1', 'performers': [], 'images': [], 'studio': {'id': 's1'}}
        with patch.object(stashdb_preview.stashdb_client, 'Client', return_value=client), \
             patch.object(stashdb_preview, 'preview_scene', return_value=preview):
            result = stashdb_preview.scan_assets(self.config, self.db, [{'id': 1, 'name': 'sample.mp4'}],
                progress=lambda **value: None, issue=lambda *args, **kwargs: self.fail('unexpected issue'), active=lambda: True)
        self.assertEqual(result['stashdb_applied'], 1)
        with self.db.read_connection() as connection:
            self.assertEqual(tuple(connection.execute('SELECT catalog_title,release_date,studio FROM asset WHERE id=1').fetchone()),
                             ('Manual title', '2024-01-02', 'Example Studio'))

    def test_performer_image_is_installed(self):
        from peach.previews import entity_image_key
        revision = self.save_candidate()
        buffer = io.BytesIO()
        Image.new('RGB', (320, 320), (100, 150, 200)).save(buffer, format='JPEG')
        client = unittest.mock.Mock()
        client.image.return_value = buffer.getvalue()
        client.scene.return_value = {'id': 'scene-1', 'studio': {'id': 's1'}, 'images': [],
            'performers': [{'performer': {'id': 'p1', 'name': 'New Performer',
                                          'images': [{'url': 'https://example.com/portrait.jpg'}]}}]}
        result = stashdb_preview.apply_candidate(self.config, self.db, 1, 'scene-1', revision, client=client)
        self.assertEqual(result['image_errors'], [])
        with self.db.read_connection() as connection:
            entity_id = connection.execute("SELECT entity_id FROM asset_entity WHERE asset_id=1 AND role='performer'").fetchone()[0]
        avatar = self.config.directory('generated') / 'avatars' / f'{entity_image_key("performer", entity_id)}.img'
        self.assertTrue(avatar.is_file())
        self.assertEqual(avatar.read_bytes(), buffer.getvalue())

    def test_rate_limit_marks_every_unsearched_item_retryable(self):
        (self.config.directory('secrets') / 'stashdb.json').write_text(
            json.dumps({'api_key': 'test-key', 'enabled': True}), encoding='utf-8')
        client = unittest.mock.Mock()
        rows = [{'id': 1, 'name': 'one.mp4'}, {'id': 2, 'name': 'two.mp4'}]
        issues = []
        with patch.object(stashdb_preview.stashdb_client, 'Client', return_value=client), \
             patch.object(stashdb_preview, 'preview_scene', side_effect=stashdb_preview.stashdb_client.RateLimited('cooldown')):
            result = stashdb_preview.scan_assets(self.config, self.db, rows,
                progress=lambda **value: None, issue=lambda row, message, **opts: issues.append((row['id'], opts)),
                active=lambda: True)
        self.assertEqual(result['stashdb_skipped'], 2)
        self.assertEqual([entry[0] for entry in issues], [1, 2])
        self.assertTrue(all(entry[1]['retryable'] and entry[1]['paused'] for entry in issues))
        client.close.assert_called_once()
