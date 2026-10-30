"""Manual JAV matching uses a reviewed candidate and protects concurrent edits."""
import sqlite3
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from peach import jav_manual_match
from peach.field_owners import write_owned_fields
from peach.migrations import upgrade
from peach.repository import LedgerDatabase


class Config:
    def __init__(self, root):
        self.root = root

    def directory(self, name):
        path = self.root / name
        path.mkdir(parents=True, exist_ok=True)
        return path


class ManualJavMatchTests(unittest.TestCase):
    def setUp(self):
        temp = tempfile.TemporaryDirectory()
        self.addCleanup(temp.cleanup)
        root = Path(temp.name)
        path = root / 'ledger.db'
        sqlite3.connect(path).close()
        upgrade(path, Path(__file__).resolve().parents[1] / 'migrations')
        self.db = LedgerDatabase(path)
        self.config = Config(root)
        with self.db.write_transaction() as connection:
            connection.execute("INSERT INTO asset(id,location,path,name,medium) VALUES(1,'local','R:\\sample.mp4','sample.mp4','video')")
            write_owned_fields(connection, [1], {'catalog_title': 'Old title'}, 'user:manual')
        self.movie = {'id': 'abc123', 'title': 'New title', 'release_date': '2024-01-02',
                      'maker_name': 'Example Studio', 'actors': [{'name': 'Example Actor'}]}

    def test_search_and_explicit_apply_replace_metadata(self):
        with patch.object(jav_manual_match.PUBLIC_API, 'movie', return_value=self.movie):
            preview = jav_manual_match.search(self.config, self.db, 1, 'ROE-064')
            result = jav_manual_match.apply(self.config, self.db, 1, 'abc123', preview['revision'])
        with self.db.read_connection() as connection:
            row = connection.execute('SELECT code,catalog_title,studio,release_date FROM asset WHERE id=1').fetchone()
            performers = connection.execute("SELECT e.canonical_name FROM entity e JOIN asset_entity a ON e.id=a.entity_id WHERE a.asset_id=1 AND a.role='performer'").fetchall()
        self.assertEqual(tuple(row), ('ROE-064', 'New title', 'Example Studio', '2024-01-02'))
        self.assertEqual([row[0] for row in performers], ['Example Actor'])
        self.assertTrue(result['ok'])

    def test_changed_item_rejects_the_saved_candidate(self):
        with patch.object(jav_manual_match.PUBLIC_API, 'movie', return_value=self.movie):
            preview = jav_manual_match.search(self.config, self.db, 1, 'ROE-064')
            with self.db.write_transaction() as connection:
                write_owned_fields(connection, [1], {'studio': 'Edited'}, 'user:manual')
            with self.assertRaisesRegex(ValueError, 'changed'):
                jav_manual_match.apply(self.config, self.db, 1, 'abc123', preview['revision'])

    def test_unlisted_candidate_is_rejected(self):
        with patch.object(jav_manual_match.PUBLIC_API, 'movie', return_value=self.movie):
            preview = jav_manual_match.search(self.config, self.db, 1, 'ROE-064')
        with self.assertRaisesRegex(ValueError, 'no longer available'):
            jav_manual_match.apply(self.config, self.db, 1, 'other', preview['revision'])
