"""Performer matches require explicit review and preserve existing profiles."""
import sqlite3
import tempfile
import unittest
import io
from pathlib import Path
from unittest.mock import Mock, patch
from PIL import Image

from peach import performer_source_review
from peach.migrations import upgrade
from peach.repository import LedgerDatabase
from peach.http import HttpResponse


class Config:
    def __init__(self, root): self.root = root
    def directory(self, name):
        path = self.root / name
        path.mkdir(parents=True, exist_ok=True)
        return path


class PerformerSourceReviewTests(unittest.TestCase):
    def setUp(self):
        temp = tempfile.TemporaryDirectory()
        self.addCleanup(temp.cleanup)
        self.config = Config(Path(temp.name))
        path = Path(temp.name) / 'ledger.db'
        sqlite3.connect(path).close()
        upgrade(path, Path(__file__).resolve().parents[1] / 'migrations')
        self.db = LedgerDatabase(path)
        with self.db.write_transaction() as connection:
            connection.execute("INSERT INTO entity(id,kind,canonical_name,normalized_name,created_at,updated_at) VALUES(1,'performer','Sample Person','sample person','2020-01-01','2020-01-01')")
        self.candidate = {'matched_name': 'Sample Person', 'aliases': [], 'links': [], 'portrait_url': '',
                          'profile_url': 'https://www.boobpedia.com/boobs/Sample_Person',
                          'profile': {'raw': {'Born': '2000-01-01'}, 'birth_date': '2000-01-01', 'tags': []}}

    def test_preview_then_apply(self):
        with patch.object(performer_source_review.boobpedia, 'profile', return_value=self.candidate):
            candidate = performer_source_review.preview(self.config, self.db, 1, 'boobpedia', transport=Mock())
        result = performer_source_review.apply(self.config, self.db, 1, candidate['token'], transport=Mock())
        self.assertTrue(result['profile_written'])
        with self.db.read_connection() as connection:
            self.assertEqual(connection.execute('SELECT birth_date,source FROM performer_profile WHERE entity_id=1').fetchone()[:],
                             ('2000-01-01', 'review:boobpedia'))

    def test_adult_empire_preview_and_apply_uses_selected_source(self):
        provider = performer_source_review.adult_empire_performers
        self.candidate['profile_url'] = 'https://www.adultempire.com/123/sample-person-pornstars.html'
        with patch.object(provider, 'search', return_value=[{'profile_url': self.candidate['profile_url']}]), \
             patch.object(provider, 'profile', return_value=self.candidate):
            candidate = performer_source_review.preview(self.config, self.db, 1, 'adultempire', transport=Mock())
        result = performer_source_review.apply(self.config, self.db, 1, candidate['token'], transport=Mock())
        self.assertTrue(result['profile_written'])
        with self.db.read_connection() as connection:
            self.assertEqual(connection.execute('SELECT source FROM performer_profile WHERE entity_id=1').fetchone()[0],
                             'review:adultempire')

    def test_rejects_different_token(self):
        with patch.object(performer_source_review.boobpedia, 'profile', return_value=self.candidate):
            performer_source_review.preview(self.config, self.db, 1, 'boobpedia', transport=Mock())
        with self.assertRaisesRegex(ValueError, 'no longer available'):
            performer_source_review.apply(self.config, self.db, 1, 'wrong', transport=Mock())

    def test_user_selected_portrait_installs_in_isolated_data(self):
        self.candidate['portrait_url'] = 'https://www.boobpedia.com/wiki/images/a/a1/sample.jpg'
        with patch.object(performer_source_review.boobpedia, 'profile', return_value=self.candidate):
            candidate = performer_source_review.preview(self.config, self.db, 1, 'boobpedia', transport=Mock())
        data = io.BytesIO()
        Image.new('RGB', (80, 80), 'red').save(data, format='JPEG')
        http = Mock(return_value=HttpResponse(200, {}, data.getvalue(), self.candidate['portrait_url']))
        with patch.object(performer_source_review, 'resolves_publicly', return_value=True):
            result = performer_source_review.apply(self.config, self.db, 1, candidate['token'], transport=http)
        self.assertEqual(result['image_error'], '')
        self.assertTrue((self.config.directory('generated') / 'avatars' / 'performer-1.img').exists())

    def test_iafd_portrait_is_not_fetched_outside_vpn(self):
        self.candidate['portrait_url'] = 'https://www.iafd.com/headshot.jpg'
        with patch.object(performer_source_review.iafd_profiles, 'profile', return_value=self.candidate):
            candidate = performer_source_review.preview(self.config, self.db, 1, 'iafd', transport=Mock())
        http = Mock()
        result = performer_source_review.apply(self.config, self.db, 1, candidate['token'], transport=http)
        http.assert_not_called()
        self.assertIn('VPN-backed', result['image_error'])
