"""Manual, revision-checked JAV matching for a single library video."""
from __future__ import annotations

import base64
import json
import re

from . import cover_artwork, images
from .catalog_rules import normalise_code_key
from .entities import upsert_asset_entity
from .field_owners import write_owned_fields
from .fsutil import atomic_write_text
from .javdb_public import PUBLIC_API, public_cache_scope
from .jav_cover_fetch import Unavailable
from .western_artwork import artwork_key


def _record_path(config, asset_id):
    return config.directory('state') / 'jav-manual-review' / f'{asset_id}.json'


def search(config, database, asset_id, code):
    code = str(code or '').strip()
    if not re.fullmatch(r'[A-Za-z0-9_-]{2,64}', code):
        raise ValueError('Enter a valid release code.')
    code = normalise_code_key(code)
    with database.read_connection() as connection:
        row = connection.execute("SELECT mutation_revision FROM asset WHERE id=? AND medium='video' "
                                 "AND COALESCE(disposal,'') NOT IN ('trash','vanished')", (asset_id,)).fetchone()
    if row is None:
        raise ValueError('Choose a video from your library.')
    with public_cache_scope(config.directory('generated') / 'jav-public'):
        movie = PUBLIC_API.movie(code, refresh=True)
    candidate = {'id': movie['id'], 'code': code, 'title': movie.get('title') or movie.get('origin_title') or '',
                 'date': movie.get('release_date') or '', 'studio': movie.get('maker_name') or '',
                 'actors': [a.get('name') for a in movie.get('actors') or [] if isinstance(a, dict) and a.get('name')],
                 'url': 'https://javdb.com/v/' + movie['id']}
    record = {'revision': row['mutation_revision'], 'candidate': candidate}
    path = _record_path(config, asset_id)
    path.parent.mkdir(parents=True, exist_ok=True)
    atomic_write_text(path, json.dumps(record, ensure_ascii=False))
    return record


def apply(config, database, asset_id, candidate_id, revision):
    path = _record_path(config, asset_id)
    try:
        record = json.loads(path.read_text(encoding='utf-8'))
        candidate = record['candidate']
        if candidate['id'] != candidate_id or record['revision'] != revision:
            raise ValueError
    except (OSError, KeyError, TypeError, ValueError) as exc:
        raise ValueError('This candidate is no longer available. Search again.') from exc
    code = candidate['code']
    with public_cache_scope(config.directory('generated') / 'jav-public'):
        movie = PUBLIC_API.movie(code, refresh=True)
    if movie.get('id') != candidate_id:
        raise ValueError('The source result changed. Search again.')
    fields = {key: value for key, value in {'code': code, 'catalog_title': candidate['title'],
              'release_date': candidate['date'], 'studio': candidate['studio']}.items() if value}
    with database.write_transaction() as connection:
        row = connection.execute("SELECT mutation_revision FROM asset WHERE id=? AND medium='video' "
                                 "AND COALESCE(disposal,'') NOT IN ('trash','vanished')", (asset_id,)).fetchone()
        if row is None or row['mutation_revision'] != revision:
            raise ValueError('The library item changed. Search again.')
        write_owned_fields(connection, [asset_id], fields, 'review:javdb', expected_revision=revision)
        if candidate['actors']:
            connection.execute("DELETE FROM asset_entity WHERE asset_id=? AND role='performer'", (asset_id,))
            connection.execute("DELETE FROM asset_tag WHERE asset_id=? AND tag LIKE '演员:%'", (asset_id,))
            for name in candidate['actors']:
                upsert_asset_entity(connection, kind='performer', name=name, asset_id=asset_id,
                                    role='performer', source='review:javdb',
                                    metadata={'code': code, 'source_id': candidate_id}, update_entity_metadata=False)
        if candidate['studio']:
            connection.execute("DELETE FROM asset_entity WHERE asset_id=? AND role='studio'", (asset_id,))
            upsert_asset_entity(connection, kind='studio', name=candidate['studio'], asset_id=asset_id,
                                role='studio', source='review:javdb',
                                metadata={'code': code, 'source_id': candidate_id}, update_entity_metadata=False)
    errors = []
    url = movie.get('cover_url') or movie.get('thumb_url')
    if url:
        try:
            with public_cache_scope(config.directory('generated') / 'jav-public'):
                encoded = PUBLIC_API.image_from_url(url, original=True)
            payload = base64.b64decode(encoded.partition(',')[2], validate=True)
            size = images.measure_image_size(payload)
            if not size:
                raise ValueError('Invalid cover image.')
            key = artwork_key(asset_id, code)
            cover_artwork.install_cover(config.directory('generated') / 'covers' / f'{key}.jpg', key, payload, size,
                evidence={'provider': 'javdb', 'source': 'review:javdb', 'source_url': url, 'title': candidate['title']})
        except (ValueError, OSError, Unavailable) as exc:
            errors.append(f'Cover: {exc}')
    else:
        errors.append('The source did not provide a cover.')
    path.unlink(missing_ok=True)
    return {'ok': True, 'updated_fields': list(fields), 'image_errors': errors}
