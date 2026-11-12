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

    def test_creator_format_has_its_own_draw(self):
        randomizer.set_format(self.db, 1, 'creator')
        self.assertEqual(randomizer.get_format(self.db, 1), 'creator')
        self.assertEqual(randomizer.draw(self.db, 'creator')['id'], 1)
        self.assertIsNone(randomizer.draw(self.db, 'clip'))

    def test_empty_and_invalid_modes(self):
        self.assertIsNone(randomizer.draw(self.db, 'film'))
        with self.assertRaises(ValueError):
            randomizer.draw(self.db, 'invalid')

    def test_upgrade_preserves_existing_format_and_revision_triggers(self):
        migration = (Path(__file__).resolve().parents[1] / 'migrations' / '0056_creator_video_format.sql').read_text()
        connection = sqlite3.connect(':memory:')
        self.addCleanup(connection.close)
        connection.executescript("""
            CREATE TABLE asset(id INTEGER PRIMARY KEY);
            CREATE TABLE ledger_revision(tbl TEXT PRIMARY KEY, n INTEGER NOT NULL DEFAULT 0);
            INSERT INTO ledger_revision VALUES('asset_format', 0);
            INSERT INTO asset VALUES(1);
        """)
        original = (Path(__file__).resolve().parents[1] / 'migrations' / '0051_asset_format.sql').read_text()
        connection.execute("DELETE FROM ledger_revision WHERE tbl='asset_format'")
        connection.executescript(original)
        connection.execute("INSERT INTO asset_format VALUES(1, 'film', 'user:manual', '2026-01-01')")
        connection.executescript(migration)
        self.assertEqual(connection.execute('SELECT * FROM asset_format').fetchone(), (1, 'film', 'user:manual', '2026-01-01'))
        before = connection.execute("SELECT n FROM ledger_revision WHERE tbl='asset_format'").fetchone()[0]
        connection.execute("UPDATE asset_format SET format='creator' WHERE asset_id=1")
        self.assertEqual(connection.execute("SELECT n FROM ledger_revision WHERE tbl='asset_format'").fetchone()[0], before + 1)
