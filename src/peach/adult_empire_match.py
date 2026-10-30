"""Revision-checked manual movie matching through the private lookup service."""
from __future__ import annotations

import json
import os
import re
from pathlib import Path
from urllib.parse import urlsplit

import httpx

from .fsutil import atomic_write_text


def _record(config, asset_id):
    return config.directory('state') / 'adult-empire-review' / f'{asset_id}.json'


def _service(path, params):
    urls = [url.strip().rstrip('/') for url in os.environ.get('PEACH_EMPIRE_URLS', os.environ.get('PEACH_EMPIRE_URL', '')).split(',') if url.strip()]
    token_file = os.environ.get('PEACH_EMPIRE_TOKEN_FILE', '')
    certificate = os.environ.get('PEACH_EMPIRE_CA_FILE', '')
    if not urls or not token_file or not certificate:
        raise ValueError('Adult Empire lookup service is not configured.')
    try:
        token = Path(token_file).read_text(encoding='utf-8').strip()
        if len(token) < 32:
            raise ValueError('Adult Empire service credential is invalid.')
        if any(urlsplit(url).scheme != 'https' for url in urls):
            raise ValueError('Adult Empire lookup service requires HTTPS.')
        with httpx.Client(timeout=httpx.Timeout(30, connect=10), trust_env=False, verify=certificate) as client:
            response = None
            for url in urls:
                try:
                    response = client.get(url + path, params=params, headers={'Authorization': 'Bearer ' + token})
                    break
                except (httpx.ConnectError, httpx.ConnectTimeout):
                    continue
            if response is None:
                raise ValueError('All Adult Empire lookup replicas are unavailable.')
            response.raise_for_status()
            result = response.json()
    except (OSError, httpx.HTTPError, ValueError) as exc:
        raise ValueError('Adult Empire lookup service is unavailable.') from exc
    if not isinstance(result, dict):
        raise ValueError('Adult Empire returned an invalid response.')
    return result


def search(config, database, asset_id, query, category, page):
    if not isinstance(query, str) or not 2 <= len(query.strip()) <= 200 or category not in ('dvd', 'clips', 'bluray', 'vod') or type(page) is not int or not 1 <= page <= 100:
        raise ValueError('Enter a valid title and category.')
    with database.read_connection() as connection:
        row = connection.execute("SELECT mutation_revision FROM asset WHERE id=? AND medium='video' AND COALESCE(disposal,'') NOT IN ('trash','vanished')", (asset_id,)).fetchone()
        if row is None:
            raise ValueError('Choose a video from your library.')
    response = _service('/search', {'q': query.strip(), 'category': category, 'page': page})
    candidates = response.get('candidates')
    if not isinstance(candidates, list):
        raise ValueError('Adult Empire returned invalid search results.')
    path = _record(config, asset_id)
    existing = []
    if page > 1:
        try:
            record = json.loads(path.read_text(encoding='utf-8'))
            if record['query'] != query.strip() or record['category'] != category or record['revision'] != row['mutation_revision']:
                raise ValueError
            existing = record['candidates']
        except (OSError, ValueError, KeyError, TypeError) as exc:
            raise ValueError('Search again before loading more results.') from exc
    candidates = existing + [item for item in candidates if isinstance(item, dict) and isinstance(item.get('id'), str)]
    record = {'query': query.strip(), 'category': category, 'revision': row['mutation_revision'], 'candidates': candidates}
    path.parent.mkdir(parents=True, exist_ok=True)
    atomic_write_text(path, json.dumps(record, ensure_ascii=False))
    return {'candidates': candidates, 'revision': row['mutation_revision'], 'next_page': response.get('next_page')}


def preview_url(config, database, asset_id, url):
    if not isinstance(url, str) or len(url) > 2048:
        raise ValueError('Enter a valid Adult Empire film URL.')
    try:
        parts = urlsplit(url.strip())
        if (parts.scheme.lower() != 'https' or parts.hostname not in
                ('adultempire.com', 'www.adultempire.com', 'adultdvdempire.com', 'www.adultdvdempire.com')
                or parts.port not in (None, 443) or parts.username or parts.password
                or not re.fullmatch(r'/(?:clip/)?\d+/[a-z0-9-]+\.html', parts.path, re.I)):
            raise ValueError
    except ValueError as exc:
        raise ValueError('Enter a valid Adult Empire film URL.') from exc
    with database.read_connection() as connection:
        row = connection.execute("SELECT mutation_revision FROM asset WHERE id=? AND medium='video' AND COALESCE(disposal,'') NOT IN ('trash','vanished')", (asset_id,)).fetchone()
        if row is None:
            raise ValueError('Choose a video from your library.')
    path = _record(config, asset_id)
    path.parent.mkdir(parents=True, exist_ok=True)
    atomic_write_text(path, json.dumps({'revision': row['mutation_revision'], 'candidates': [{'id': parts.path}]}))
    return detail(config, database, asset_id, parts.path, row['mutation_revision'])


def detail(config, database, asset_id, candidate_id, revision):
    from .entities import normalize_entity_name
    try:
        record = json.loads(_record(config, asset_id).read_text(encoding='utf-8'))
        if type(revision) is not int or revision != record['revision'] or not any(c['id'] == candidate_id for c in record['candidates']):
            raise ValueError
    except (OSError, KeyError, TypeError, ValueError) as exc:
        raise ValueError('This candidate is no longer available. Search again.') from exc
    result = _service('/detail', {'path': candidate_id})
    if result.get('id') != candidate_id:
        raise ValueError('The source returned a different movie.')
    record['detail'] = result
    identity_links = []
    identity_conflicts = []
    with database.read_connection() as connection:
        for person in result.get('performers') or []:
            name = person.get('name')
            if not name:
                continue
            key = normalize_entity_name(name)
            rows = connection.execute("SELECT DISTINCT e.id,e.canonical_name FROM entity e LEFT JOIN entity_alias a ON a.entity_id=e.id WHERE e.kind='performer' AND (e.normalized_name=? OR a.normalized_alias=?) LIMIT 2", (key, key)).fetchall()
            linked = connection.execute("SELECT entity_id FROM entity_external_ref WHERE provider='adultempire' AND external_kind='performer' AND external_id=?", (str(person.get('id') or ''),)).fetchone()
            if len(rows) > 1 or (linked and (len(rows) != 1 or linked[0] != rows[0]['id'])):
                identity_conflicts.append(name)
                continue
            if len(rows) == 1:
                refs = connection.execute("SELECT external_id FROM entity_external_ref WHERE entity_id=? AND provider='adultempire' AND external_kind='performer'", (rows[0]['id'],)).fetchall()
                if refs and str(person.get('id') or '') not in {str(ref[0]) for ref in refs}:
                    identity_conflicts.append(name)
                    continue
                identity_links.append({'name': name, 'existing': rows[0]['canonical_name'], 'entity_id': rows[0]['id']})
    record['identity_links'] = identity_links
    atomic_write_text(_record(config, asset_id), json.dumps(record, ensure_ascii=False))
    return {'candidate': result, 'revision': revision, 'identity_links': identity_links, 'identity_conflicts': identity_conflicts}


def apply(config, database, asset_id, candidate_id, revision, *, confirm_identity_links=False):
    from . import avatar_picker, cover_artwork, images
    from .entities import upsert_asset_entity, normalize_entity_name
    from .field_owners import write_owned_fields
    from .previews import entity_image_key
    from .western_artwork import artwork_key

    path = _record(config, asset_id)
    try:
        record = json.loads(path.read_text(encoding='utf-8'))
        movie = record['detail']
        if record['revision'] != revision or movie['id'] != candidate_id:
            raise ValueError
    except (OSError, KeyError, TypeError, ValueError) as exc:
        raise ValueError('This candidate is no longer available. Search again.') from exc
    fields = {k: v for k, v in {'catalog_title': movie.get('title'), 'release_date': movie.get('date'),
                                'studio': movie.get('studio')}.items() if isinstance(v, str) and v}
    cast = movie.get('performers') or []
    portraits, errors = [], []
    with database.write_transaction() as connection:
        row = connection.execute("SELECT mutation_revision,code FROM asset WHERE id=? AND medium='video' AND COALESCE(disposal,'') NOT IN ('trash','vanished')", (asset_id,)).fetchone()
        if row is None or row['mutation_revision'] != revision:
            raise ValueError('The library item changed. Search again.')
        if fields:
            write_owned_fields(connection, [asset_id], fields, 'review:adultempire', expected_revision=revision)
        cast_conflicts = []
        for performer in cast:
            name, external_id = performer.get('name'), performer.get('id')
            if not name or not external_id:
                cast_conflicts.append('A performer identity is incomplete.')
                continue
            key = normalize_entity_name(name)
            identities = connection.execute("SELECT DISTINCT e.id FROM entity e LEFT JOIN entity_alias a ON a.entity_id=e.id WHERE e.kind='performer' AND (e.normalized_name=? OR a.normalized_alias=?) LIMIT 2", (key, key)).fetchall()
            if len(identities) > 1:
                cast_conflicts.append(f'Existing cast preserved: ambiguous performer {name}.')
                continue
            existing = identities[0] if identities else None
            linked = connection.execute("SELECT entity_id FROM entity_external_ref WHERE provider='adultempire' AND external_kind='performer' AND external_id=?", (str(external_id),)).fetchone()
            if linked and (not existing or linked[0] != existing[0]):
                cast_conflicts.append(f'Existing cast preserved: conflicting source identity for {name}.')
                continue
            if existing:
                refs = connection.execute("SELECT provider,external_id FROM entity_external_ref WHERE entity_id=? AND external_kind='performer' AND provider IN ('stashdb','adultempire')", (existing[0],)).fetchall()
                empire_ids = {str(ref[1]) for ref in refs if ref[0] == 'adultempire'}
                confirmed = confirm_identity_links and any(link.get('entity_id') == existing[0] and link.get('name') == name for link in record.get('identity_links', []))
                if (empire_ids and str(external_id) not in empire_ids) or (not empire_ids and any(ref[0] == 'stashdb' for ref in refs) and not confirmed):
                    cast_conflicts.append(f'Existing cast preserved: conflicting source identity for {name}.')
        if cast_conflicts:
            errors.extend(cast_conflicts)
        if cast and not cast_conflicts:
            connection.execute("DELETE FROM asset_entity WHERE asset_id=? AND role='performer'", (asset_id,))
            connection.execute("DELETE FROM asset_tag WHERE asset_id=? AND tag LIKE '演员:%'", (asset_id,))
            for performer in cast:
                name, external_id = performer.get('name'), performer.get('id')
                if not name or not external_id:
                    continue
                conflict = connection.execute("SELECT 1 FROM entity e JOIN entity_external_ref x ON x.entity_id=e.id WHERE e.kind='performer' AND e.normalized_name=? AND x.provider='adultempire' AND x.external_kind='performer' AND x.external_id<>? LIMIT 1", (normalize_entity_name(name), str(external_id))).fetchone()
                if conflict:
                    errors.append(f'Performer identity needs review: {name}')
                    continue
                entity_id = upsert_asset_entity(connection, kind='performer', name=name, asset_id=asset_id,
                    role='performer', source='review:adultempire', external_provider='adultempire',
                    external_id=external_id, metadata={'movie': candidate_id}, update_entity_metadata=False)
                if entity_id:
                    portraits.append((entity_id, performer))
        if fields.get('studio'):
            connection.execute("DELETE FROM asset_entity WHERE asset_id=? AND role='studio'", (asset_id,))
            upsert_asset_entity(connection, kind='studio', name=fields['studio'], asset_id=asset_id,
                role='studio', source='review:adultempire', metadata={'movie': candidate_id}, update_entity_metadata=False)

    def image_bytes(url):
        parts = urlsplit(url)
        if parts.scheme != 'https' or parts.hostname != 'imgs4cdn.adultempire.com' or parts.username or parts.password or parts.port not in (None, 443):
            raise ValueError('Invalid Adult Empire image URL.')
        with httpx.Client(timeout=20, follow_redirects=False) as client:
            with client.stream('GET', url) as response:
                response.raise_for_status()
                payload = bytearray()
                for chunk in response.iter_bytes():
                    payload.extend(chunk)
                    if len(payload) > 16 * 1024 * 1024:
                        raise ValueError('Image is too large.')
        return bytes(payload)

    cover_url = movie.get('cover') or ''
    if cover_url:
        try:
            payload = images.upright(image_bytes(cover_url))
            size = images.measure_image_size(payload)
            if not size:
                raise ValueError('Invalid image.')
            key = artwork_key(asset_id, row['code'])
            cover_artwork.install_cover(config.directory('generated') / 'covers' / f'{key}.jpg', key, payload, size,
                evidence={'provider': 'adultempire', 'source': 'review:adultempire', 'source_url': cover_url, 'title': fields.get('catalog_title', '')})
        except (ValueError, OSError, httpx.HTTPError) as exc:
            errors.append(f'Cover: {exc}')
    for entity_id, performer in portraits:
        image = performer.get('image') or ''
        target = config.directory('generated') / 'avatars' / (entity_image_key('performer', entity_id) + '.img')
        if image and not target.exists():
            try:
                avatar_picker.install(config.directory('generated') / 'provider-cache' / 'performer-avatars', target.parent,
                    'performer', entity_id, avatar_picker.prepare_image(image_bytes(image)),
                    {'provider': 'adultempire', 'source_kind': 'external_media_library', 'matched_name': performer['name'],
                     'name_source': 'adultempire', 'external_id': performer['id'], 'upstream_url': image})
            except (ValueError, OSError, httpx.HTTPError, avatar_picker.PickerError) as exc:
                errors.append(f"Portrait for {performer['name']}: {exc}")
    path.unlink(missing_ok=True)
    return {'ok': True, 'updated_fields': list(fields), 'image_errors': errors}
