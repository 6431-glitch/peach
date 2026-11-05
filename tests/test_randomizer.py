"""Random draws use reviewed formats and preserve manual choices."""
import sqlite3
import tempfile
import unittest
from pathlib import Path

from peach import randomizer
from peach.migrations import upgrade
from peach.repository import LedgerDatabase


class RandomizerTests(unittest.TestCase):
    def setUp(self):
        temp = tempfile.TemporaryDirectory()
        self.addCleanup(temp.cleanup)
        path = Path(temp.name) / 'ledger.db'
        sqlite3.connect(path).close()
        upgrade(path, Path(__file__).resolve().parents[1] / 'migrations')
        self.db = LedgerDatabase(path)
        with self.db.write_transaction() as connection:
            connection.executemany("INSERT INTO asset(id,location,path,name,medium,disposal) VALUES(?, 'local', ?, ?, 'video', ?)", [
                (1, 'A', 'Film', None), (2, 'B', 'Scene', None), (3, 'C', 'Trash', 'trash'), (4, 'D', 'Unknown', None)])

    def test_draw_uses_classification_and_excludes_trashed_items(self):
        randomizer.set_format(self.db, 1, 'film')
        randomizer.set_format(self.db, 2, 'clip')
        with self.db.write_transaction() as connection:
            connection.execute("INSERT INTO asset_format(asset_id,format,source) VALUES(3,'film','user:manual')")
        self.assertEqual(randomizer.draw(self.db, 'film')['id'], 1)
        self.assertEqual(randomizer.draw(self.db, 'clip')['id'], 2)
        self.assertEqual(randomizer.get_format(self.db, 4), 'unknown')

    def test_source_does_not_override_manual_category(self):
        randomizer.set_format(self.db, 1, 'film')
        with self.db.write_transaction() as connection:
            randomizer.set_format_from_source(connection, 1, 'clip', 'review:stashdb')
        self.assertEqual(randomizer.get_format(self.db, 1), 'film')

    def test_empty_and_invalid_modes(self):
        self.assertIsNone(randomizer.draw(self.db, 'film'))
        with self.assertRaises(ValueError):
            randomizer.draw(self.db, 'invalid')
