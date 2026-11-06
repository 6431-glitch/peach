"""Discover searches only the indexers selected by the user."""
import unittest
from contextlib import contextmanager
from types import SimpleNamespace
from unittest.mock import patch

from fastapi import HTTPException
from peach.routes_api import discover_search


class DiscoverySearchTests(unittest.TestCase):
    def test_search_uses_only_selected_enabled_indexers(self):
        rows = [dict(key='one', enabled=True), dict(key='two', enabled=True), dict(key='off', enabled=False)]
        @contextmanager
        def connection():
            yield SimpleNamespace(execute=lambda _: [('blocked-hash',)])
        state = SimpleNamespace(downloads=SimpleNamespace(credentials=None),
                                web_contract=SimpleNamespace(database=SimpleNamespace(read_connection=connection)))
        request = SimpleNamespace(app=SimpleNamespace(state=state))
        with patch('peach.resource_search.Indexers.load', return_value=rows), \
             patch('peach.web_resource_search._SEARCH.run', return_value={'items': []}) as search:
            discover_search(request, 'Example film', 'two', None)
            self.assertEqual(search.call_args.args[0], [rows[1]])
            self.assertEqual(search.call_args.args[3], ['blocked-hash'])
            self.assertTrue(search.call_args.kwargs['title_search'])
            for selected in ('', 'off', 'unknown'):
                with self.assertRaises(HTTPException):
                    discover_search(request, 'Example film', selected, None)
