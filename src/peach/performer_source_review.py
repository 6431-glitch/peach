"""Preview and explicitly apply external performer profile candidates."""
from __future__ import annotations

import json
import secrets
from urllib.parse import urlsplit
import httpx

from . import adultfilmdatabase, avatar_picker, boobpedia, iafd_profiles
from .fsutil import atomic_write_text
from .http import HttpRequest, HttpxTransport, resolves_publicly
from .performer_profiles import read_profile, write_profile
from .previews import entity_image_key
from .user_agent import USER_AGENT

SOURCES = {'boobpedia': boobpedia, 'adultfilmdatabase': adultfilmdatabase, 'iafd': iafd_profiles}


def _path(config, entity_id):
    return config.directory('state') / 'performer-source-review' / f'{entity_id}.json'


def preview(config, database, entity_id, source, *, transport=None):
    if source not in SOURCES:
        raise ValueError('Choose an available performer source.')
    with database.read_connection() as connection:
        row = connection.execute("SELECT canonical_name FROM entity WHERE id=? AND kind='performer'", (entity_id,)).fetchone()
        if not row:
            raise ValueError('Choose a performer from your library.')
        name = row[0]
        aliases = [item[0] for item in connection.execute('SELECT alias FROM entity_alias WHERE entity_id=?', (entity_id,))]
        existing = read_profile(connection, entity_id)
    own = transport is None
    http = transport or HttpxTransport()
    try:
        if source == 'iafd':
            candidate = iafd_profiles.profile(config, name, aliases)
        elif source == 'boobpedia':
            candidate = boobpedia.profile(http, name, aliases)
        else:
            matches = adultfilmdatabase.search(http, name)
            if len(matches) != 1:
                raise ValueError('No unique performer found; verify the source manually.')
            candidate = adultfilmdatabase.profile(http, name, matches[0]['profile_url'])
    finally:
        if own:
            http.close()
    record = {'token': secrets.token_urlsafe(24), 'entity_id': entity_id, 'name': name,
              'source': source, 'candidate': candidate, 'existing_profile': existing}
    path = _path(config, entity_id)
    path.parent.mkdir(parents=True, exist_ok=True)
    atomic_write_text(path, json.dumps(record, ensure_ascii=False))
    return {key: record[key] for key in ('token', 'name', 'source', 'candidate')}


def apply(config, database, entity_id, token, *, transport=None):
    path = _path(config, entity_id)
    try:
        record = json.loads(path.read_text(encoding='utf-8'))
        if not isinstance(token, str) or not secrets.compare_digest(record['token'], token):
            raise ValueError
    except (ValueError, OSError, KeyError, TypeError) as exc:
        raise ValueError('This candidate is no longer available. Search again.') from exc
    candidate, source = record['candidate'], record['source']
    with database.write_transaction() as connection:
        row = connection.execute("SELECT canonical_name FROM entity WHERE id=? AND kind='performer'", (entity_id,)).fetchone()
        if not row or row[0] != record['name'] or read_profile(connection, entity_id) != record['existing_profile']:
            raise ValueError('The performer changed. Search again.')
        written = False
        if record['existing_profile'] is None and candidate['profile'].get('raw'):
            written = write_profile(connection, entity_id, candidate['profile'],
                                    source='review:' + source, source_url=candidate['profile_url'])
    image_error = ''
    image = candidate.get('portrait_url') or ''
    target = config.directory('generated') / 'avatars' / (entity_image_key('performer', entity_id) + '.img')
    if image and not target.exists() and source == 'iafd':
        # IAFD pages use the VPN-backed solver; never silently fetch its image directly.
        image_error = 'IAFD portrait requires a VPN-backed image connection; the existing portrait was preserved.'
    elif image and not target.exists():
        own = transport is None
        http = transport or HttpxTransport()
        try:
            host = urlsplit(image).hostname or ''
            if not resolves_publicly(host):
                raise ValueError('Image host is unavailable.')
            response = http(HttpRequest('GET', image, {'User-Agent': USER_AGENT}), 20, 16 * 1024 * 1024)
            if response.status != 200 or urlsplit(response.url or image).hostname != host:
                raise ValueError('The source image could not be downloaded.')
            avatar_picker.install(config.directory('generated') / 'provider-cache' / 'performer-avatars',
                target.parent, 'performer', entity_id, avatar_picker.prepare_image(response.body),
                {'provider': source, 'source_kind': 'external_media_library', 'matched_name': record['name'],
                 'name_source': source + '-profile', 'external_id': candidate['profile_url'], 'upstream_url': image})
        except (ValueError, OSError, httpx.HTTPError, avatar_picker.PickerError) as exc:
            image_error = str(exc)
        finally:
            if own:
                http.close()
    path.unlink(missing_ok=True)
    return {'ok': True, 'profile_written': written, 'existing_profile_preserved': not written,
            'image_error': image_error}
