"""Opt-in qBittorrent Web API connection using Peach's local credential store."""
from __future__ import annotations

import httpx

from .downloads import parse_magnet
from .resource_search import endpoint

CREDENTIAL = 'qbittorrent'


def public(credentials):
    saved = credentials.load(CREDENTIAL)
    values = saved.values if saved else {}
    return {'url': values.get('url', ''), 'username': values.get('username', ''),
            'password_set': bool(values.get('password'))}


def _login(values, transport=None):
    url = endpoint(values.get('url', '')).rstrip('/')
    username, password = values.get('username', ''), values.get('password', '')
    if not username or not password:
        raise ValueError('Enter your qBittorrent username and password.')
    client = httpx.Client(timeout=10, follow_redirects=False, trust_env=False, transport=transport,
                          headers={'Origin': url, 'Referer': url + '/'})
    try:
        response = client.post(url + '/api/v2/auth/login', data={'username': username, 'password': password})
        if response.status_code == 403:
            raise ValueError('qBittorrent denied access; the address may be blocked or temporarily banned after failed logins.')
        if not ((response.status_code == 200 and response.text.strip() == 'Ok.') or response.status_code == 204):
            raise ValueError('qBittorrent login failed. Check the Web UI address and credentials.')
        response = client.get(url + '/api/v2/app/version')
        if response.status_code != 200:
            raise ValueError('qBittorrent did not accept the authenticated session.')
        return client, url
    except Exception:
        client.close()
        raise


def _values(credentials, body):
    previous = credentials.load(CREDENTIAL)
    values = dict(previous.values) if previous else {}
    url = endpoint(body.get('url', '')).rstrip('/')
    username = str(body.get('username', '')).strip()
    if (url != values.get('url') or username != values.get('username')) and not body.get('password'):
        raise ValueError('Enter the password when changing the address or username.')
    values.update(url=url, username=username)
    if body.get('password'):
        values['password'] = str(body['password'])
    return values


def check(credentials, body, transport=None):
    values = _values(credentials, body)
    client, _ = _login(values, transport)
    client.close()
    return {'ok': True}


def configure(credentials, body, transport=None):
    values = _values(credentials, body)
    client, _ = _login(values, transport)
    client.close()
    credentials.save(CREDENTIAL, values)
    return public(credentials)


def submit(credentials, raw_magnet, transport=None, category=None):
    magnet = parse_magnet(raw_magnet)
    saved = credentials.load(CREDENTIAL)
    if not saved:
        raise ValueError('Configure qBittorrent in Download settings first.')
    client, url = _login(saved.values, transport)
    try:
        data = {'urls': magnet.uri}
        if category is not None:
            if category not in ('XXX', 'XXX 2'):
                raise ValueError('Choose XXX or XXX 2.')
            response = client.get(url + '/api/v2/torrents/categories')
            if response.status_code != 200 or category not in response.json():
                raise ValueError('The selected category does not exist in qBittorrent.')
            data['category'] = category
        response = client.post(url + '/api/v2/torrents/add', data=data)
        if response.status_code != 200 or response.text.strip() != 'Ok.':
            raise ValueError('qBittorrent did not accept the torrent.')
    finally:
        client.close()
    return {'ok': True}
