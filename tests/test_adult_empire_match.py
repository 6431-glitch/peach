"""Manual Adult Empire matching is revision checked and protects identity."""
import sqlite3
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from peach import adult_empire_match as match
from peach.entities import upsert_asset_entity
from peach.field_owners import write_owned_fields
from peach.migrations import upgrade
from peach.repository import LedgerDatabase


class Config:
    def __init__(self, root): self.root = root
    def directory(self, name):
        path = self.root / name
        path.mkdir(parents=True, exist_ok=True)
        return path


class AdultEmpireMatchTests(unittest.TestCase):
    def setUp(self):
        temp = tempfile.TemporaryDirectory()
        self.addCleanup(temp.cleanup)
        self.config = Config(Path(temp.name))
        path = Path(temp.name) / 'ledger.db'
        sqlite3.connect(path).close()
        upgrade(path, Path(__file__).resolve().parents[1] / 'migrations')
        self.db = LedgerDatabase(path)
        with self.db.write_transaction() as connection:
            connection.execute("INSERT INTO asset(id,location,path,name,medium) VALUES(1,'local','R:\\media\\sample.mp4','sample.mp4','video')")
            write_owned_fields(connection, [1], {'catalog_title': 'Old title'}, 'user:manual')
        self.candidate = {'id': '/123/example-porn-movies.html', 'title': 'Example', 'url': 'https://www.adultempire.com/123/example-porn-movies.html'}
        self.movie = {'id': self.candidate['id'], 'title': 'Example', 'date': '2021-02-24', 'studio': 'Studio', 'performers': [], 'cover': ''}

    def prepare(self):
        with patch.object(match, '_service', side_effect=[{'candidates': [self.candidate], 'next_page': None}, self.movie]):
            result = match.search(self.config, self.db, 1, 'Example', 'dvd', 1)
            match.detail(self.config, self.db, 1, self.candidate['id'], result['revision'])
        return result['revision']

    def test_manual_apply_updates_the_selected_video(self):
        revision = self.prepare()
        result = match.apply(self.config, self.db, 1, self.candidate['id'], revision)
        self.assertTrue(result['ok'])
        with self.db.read_connection() as connection:
            row = connection.execute('SELECT catalog_title,release_date,studio FROM asset WHERE id=1').fetchone()
        self.assertEqual(tuple(row), ('Example', '2021-02-24', 'Studio'))

    def test_on_demand_category_is_sent_to_lookup_service(self):
        with patch.object(match, '_service', return_value={'candidates': [self.candidate], 'next_page': None}) as lookup:
            match.search(self.config, self.db, 1, 'Example', 'vod', 1)
        self.assertEqual(lookup.call_args.args[1]['category'], 'vod')

    def test_stale_revision_cannot_overwrite_changes(self):
        revision = self.prepare()
        with self.db.write_transaction() as connection:
            write_owned_fields(connection, [1], {'studio': 'New studio'}, 'user:manual')
        with self.assertRaisesRegex(ValueError, 'changed'):
            match.apply(self.config, self.db, 1, self.candidate['id'], revision)

    def test_unverified_stash_identity_preserves_existing_cast(self):
        with self.db.write_transaction() as connection:
            upsert_asset_entity(connection, kind='performer', name='Sample Actor', asset_id=1, role='performer',
                source='review:stashdb', external_provider='stashdb', external_id='stash-id')
        self.movie['performers'] = [{'id': '999', 'name': 'Sample Actor', 'image': ''}]
        revision = self.prepare()
        result = match.apply(self.config, self.db, 1, self.candidate['id'], revision)
        self.assertTrue(result['image_errors'])
        with self.db.read_connection() as connection:
            rows = connection.execute("SELECT source FROM asset_entity WHERE asset_id=1 AND role='performer'").fetchall()
        self.assertEqual([row[0] for row in rows], ['review:stashdb'])

    def test_user_confirmed_same_name_link_keeps_existing_stash_identity(self):
        with self.db.write_transaction() as connection:
            existing = upsert_asset_entity(connection, kind='performer', name='Sample Actor', asset_id=1, role='performer',
                source='review:stashdb', external_provider='stashdb', external_id='stash-id')
        self.movie['performers'] = [{'id': '999', 'name': 'Sample Actor', 'image': ''}]
        revision = self.prepare()
        result = match.apply(self.config, self.db, 1, self.candidate['id'], revision, confirm_identity_links=True)
        self.assertEqual(result['image_errors'], [])
        with self.db.read_connection() as connection:
            row = connection.execute("SELECT entity_id FROM entity_external_ref WHERE provider='adultempire' AND external_id='999'").fetchone()
        self.assertEqual(row[0], existing)
