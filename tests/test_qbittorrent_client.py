"""qBittorrent credentials and magnet submission use an authenticated local client."""
import tempfile
import unittest
from pathlib import Path

import httpx

from peach.follow_secrets import CredentialStore
from peach import qbittorrent_client as qbit


class QbittorrentClientTests(unittest.TestCase):
    def test_configuration_and_explicit_submission(self):
        calls = []
        def handler(request):
            calls.append((request.method, request.url.path))
            if request.url.path.endswith('/auth/login'):
                return httpx.Response(200, text='Ok.', headers={'set-cookie': 'SID=secret; Path=/'})
            if request.url.path.endswith('/app/version'):
                return httpx.Response(200, text='v5')
            if request.url.path.endswith('/torrents/add'):
                self.assertIn('SID=secret', request.headers.get('cookie', ''))
                return httpx.Response(200, text='Ok.')
            return httpx.Response(404)
        with tempfile.TemporaryDirectory() as folder:
            store = CredentialStore(Path(folder))
            self.assertTrue(qbit.check(store, {'url': 'http://example.test:8080', 'username': 'test', 'password': 'secret'}, httpx.MockTransport(handler))['ok'])
            self.assertIsNone(store.load(qbit.CREDENTIAL))
            result = qbit.configure(store, {'url': 'http://example.test:8080', 'username': 'test', 'password': 'secret'}, httpx.MockTransport(handler))
            self.assertEqual(result, {'url': 'http://example.test:8080', 'username': 'test', 'password_set': True})
            self.assertFalse(any(path.endswith('/torrents/add') for _, path in calls))
            self.assertTrue(qbit.submit(store, 'magnet:?xt=urn:btih:' + 'a' * 40, httpx.MockTransport(handler))['ok'])
            with self.assertRaises(ValueError):
                qbit.configure(store, {'url': 'http://other.test', 'username': 'test', 'password': ''}, httpx.MockTransport(handler))

    def test_failed_login_does_not_save_credentials(self):
        with tempfile.TemporaryDirectory() as folder:
            store = CredentialStore(Path(folder))
            with self.assertRaises(ValueError):
                qbit.configure(store, {'url': 'http://example.test', 'username': 'test', 'password': 'wrong'},
                               httpx.MockTransport(lambda _: httpx.Response(200, text='Fails.')))
            self.assertIsNone(store.load(qbit.CREDENTIAL))
