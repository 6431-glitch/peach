"""IAFD requires a unique exact identity and a configured solver."""
import json
import tempfile
import unittest
from pathlib import Path

from peach import iafd_profiles


class Config:
    def __init__(self, root): self.root = root
    def directory(self, name):
        path = self.root / name
        path.mkdir(parents=True, exist_ok=True)
        return path


class IafdProfileTests(unittest.TestCase):
    def setUp(self):
        temp = tempfile.TemporaryDirectory()
        self.addCleanup(temp.cleanup)
        self.config = Config(Path(temp.name))
        (self.config.directory('secrets') / 'iafd-solver.json').write_text(json.dumps({'endpoint': 'http://solver:8191/v1'}))

    def test_exact_search_and_profile(self):
        pages = iter(['<table id="tblFem"><tr><td><a><img></a></td><td><a href="/person.rme/id=1">Sample Person</a></td></tr></table>',
                      '<h1>Sample Person</h1><div><p class="bioheading">Height</p><p class="biodata">170 cm</p></div>'])
        result = iafd_profiles.profile(self.config, 'Sample Person', fetch=lambda *_: next(pages))
        self.assertEqual(result['profile']['height_cm'], 170)
        self.assertEqual(result['profile_url'], 'https://www.iafd.com/person.rme/id=1')

    def test_ambiguous_matches_are_not_selected(self):
        row = '<tr><td><a><img></a></td><td><a href="/person.rme/id={}">Sample Person</a></td></tr>'
        html = '<table id="tblFem">' + row.format(1) + row.format(2) + '</table>'
        with self.assertRaisesRegex(ValueError, 'No unique'):
            iafd_profiles.profile(self.config, 'Sample Person', fetch=lambda *_: html)
