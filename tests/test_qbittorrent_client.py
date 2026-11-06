"""qBittorrent credentials and magnet submission use an authenticated local client."""
import tempfile
import unittest
from pathlib import Path

import httpx

from peach.follow_secrets import CredentialStore
from peach import qbittorrent_client as qbit


class QbittorrentClientTests(unittest.TestCase):
    def test_submit_requires_existing_allowed_category_and_sends_it(self):
        from urllib.parse import parse_qs
        calls = []
        def handler(request):
            calls.append(request)
            if request.url.path.endswith('/auth/login'):
                return httpx.Response(200, text='Ok.')
            if request.url.path.endswith('/app/version'):
                return httpx.Response(200, text='v5')
            if request.url.path.endswith('/torrents/categories'):
                return httpx.Response(200, json={'XXX': {}, 'XXX 2': {}})
            return httpx.Response(200, text='Ok.')
        with tempfile.TemporaryDirectory() as folder:
            store = CredentialStore(Path(folder))
            store.save(qbit.CREDENTIAL, {'url': 'http://example.test', 'username': 'test', 'password': 'secret'})
            magnet = 'magnet:?xt=urn:btih:' + 'a' * 40
            transport = httpx.MockTransport(handler)
            self.assertTrue(qbit.submit(store, magnet, transport, category='XXX 2')['ok'])
            self.assertEqual(parse_qs(calls[-1].content.decode())['category'], ['XXX 2'])
            before = len([r for r in calls if r.url.path.endswith('/torrents/add')])
            with self.assertRaises(ValueError):
                qbit.submit(store, magnet, transport, category='other')
            self.assertEqual(len([r for r in calls if r.url.path.endswith('/torrents/add')]), before)

    def test_no_content_login_requires_a_successful_authenticated_request(self):
        with tempfile.TemporaryDirectory() as folder:
            store = CredentialStore(Path(folder))
            body = {'url': 'http://example.test', 'username': 'test', 'password': 'secret'}
            def handler(request):
                return httpx.Response(204) if request.url.path.endswith('/auth/login') else httpx.Response(200, text='v5')
            self.assertTrue(qbit.check(store, body, httpx.MockTransport(handler))['ok'])
            def denied(request):
                return httpx.Response(204) if request.url.path.endswith('/auth/login') else httpx.Response(403)
            with self.assertRaisesRegex(ValueError, 'did not accept'):
                qbit.check(store, body, httpx.MockTransport(denied))

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
