"""从现有媒体线索查询 StashDB，并按用户选择自动或手动采用。

基于 avonar69 的 peach-mitao/peach PR #145（提交 3fd6019b）改编。
"""
from __future__ import annotations

import json
import time

from . import stashdb_client, stashdb_matching
from .fsutil import atomic_write_text
from .field_owners import owner_of, write_owned_fields
from .entities import upsert_asset_entity


def _install_images(config, client, asset_id, code, scene, performers, policy, *, replace_cover=False):
    """手动匹配替换作品封面；自动匹配只补缺图。人物头像是共享数据，保留已有头像。"""
    from . import avatar_picker, cover_artwork, images
    from .previews import entity_image_key
    from .western_artwork import artwork_key
    generated = config.directory('generated')
    errors = []
    scene_images = scene.get('images') or []
    cover_key = artwork_key(asset_id, code)
    cover = generated / 'covers' / f'{cover_key}.jpg'
    if policy['scene_images'] and scene_images and (replace_cover or not cover.exists()):
        try:
            url = scene_images[0]['url']
            payload = client.image(url)
            payload = images.upright(payload)
            size = images.measure_image_size(payload)
            if not size:
                raise ValueError('Invalid StashDB scene image.')
            cover_artwork.install_cover(cover, cover_key, payload, size,
                evidence={'provider': 'stashdb', 'source': 'review:stashdb' if replace_cover else 'auto:stashdb', 'scene_id': scene['id'],
                          'source_url': url, 'title': scene.get('title') or ''})
        except (ValueError, OSError, KeyError) as exc:
            errors.append(f'Scene image: {exc}')
    avatars = generated / 'avatars'
    providers = generated / 'provider-cache' / 'performer-avatars'
    if policy['actor_images']:
        for entity_id, performer in performers:
            pictures = performer.get('images') or []
            if not pictures or (avatars / f'{entity_image_key("performer", entity_id)}.img').exists():
                continue
            try:
                url = pictures[0]['url']
                avatar_picker.install(providers, avatars, 'performer', entity_id, client.image(url),
                    {'provider': 'stashdb', 'source_kind': 'external_media_library',
                     'matched_name': performer['name'], 'name_source': 'stashdb',
                     'external_id': str(performer['id']), 'upstream_url': url})
            except (ValueError, OSError, KeyError, avatar_picker.PickerError) as exc:
                errors.append(f'Performer image: {exc}')
    return errors


def preview_scene(config, database, asset_id, *, client=None, search_title=None):
    """只读取账本与来源；不更改媒体、身份或账本字段。"""
    with database.read_connection() as connection:
        row = connection.execute(
            "SELECT id,name,medium,catalog_title,original_title,studio,release_date,duration,mutation_revision "
            "FROM asset WHERE id=? AND COALESCE(disposal,'') NOT IN ('trash','vanished')",
            (asset_id,),
        ).fetchone()
        if not row or row['medium'] != 'video':
            raise ValueError('Choose a video from your library.')
        actors = [item[0] for item in connection.execute(
            "SELECT DISTINCT e.canonical_name FROM entity e JOIN asset_entity ae ON ae.entity_id=e.id "
            "WHERE ae.asset_id=? AND e.kind='performer' ORDER BY e.id", (asset_id,),
        )]
        evidence = stashdb_matching.hints(dict(row), actors,
            ignore_terms=stashdb_client.settings(config)['ignore_terms'])
        if search_title is not None:
            if not isinstance(search_title, str) or not search_title.strip() or len(search_title) > 200:
                raise ValueError('Enter a search title of up to 200 characters.')
            evidence.update(title=search_title.strip(), studio='', date='', actors=[])
    owned = client is None
    client = client or stashdb_client.Client(config)
    try:
        result = stashdb_matching.search_scenes(client, evidence)
        result['revision'] = row['mutation_revision']
        return result
    finally:
        if owned:
            client.close()


def manual_search(config, database, asset_id, search_title=None):
    """Save manually searched candidates for the same revision-checked review flow."""
    result = preview_scene(config, database, asset_id, search_title=search_title)
    with database.read_connection() as connection:
        row = connection.execute('SELECT name FROM asset WHERE id=?', (asset_id,)).fetchone()
    root = config.directory('state') / 'stashdb-review'
    root.mkdir(parents=True, exist_ok=True)
    record = {'id': asset_id, 'label': row['name'], 'preview': result, 'searched_at': time.time()}
    atomic_write_text(root / f'{asset_id}.json', json.dumps(record, ensure_ascii=False))
    return result


def scan_assets(config, database, rows, *, progress, issue, active):
    """只自动采用唯一且文件名中的标题、厂牌和日期完全一致的候选。"""
    policy = stashdb_client.settings(config)
    if not policy['enabled'] or not policy['api_key_set']:
        return {'stashdb_review': 0, 'stashdb_skipped': 0}
    root = config.directory('state') / 'stashdb-review'
    root.mkdir(parents=True, exist_ok=True)
    client = stashdb_client.Client(config)
    count = skipped = applied = 0
    try:
        for index, row in enumerate(rows):
            if not active():
                raise InterruptedError('Processing stopped')
            progress(stage='StashDB matching', checked=index, total=len(rows), current_asset_id=row['id'],
                     current_asset_name=row['name'])
            try:
                result = preview_scene(config, database, row['id'], client=client)
            except stashdb_client.RateLimited as exc:
                # Every remaining item was left unsearched and must remain retryable.
                for pending in rows[index:]:
                    issue(pending, str(exc), action='querying_metadata', paused=True, retryable=True)
                    skipped += 1
                break
            except (ValueError, OSError) as exc:
                issue(row, str(exc), action='querying_metadata', retryable=True)
                skipped += 1
                continue
            record = {'id': row['id'], 'label': row['name'], 'preview': result, 'searched_at': time.time()}
            atomic_write_text(root / f"{row['id']}.json", json.dumps(record, ensure_ascii=False))
            count += bool(result['candidates'])
            certain = stashdb_matching.certain_filename_match(result)
            if certain:
                try:
                    outcome = apply_candidate(config, database, row['id'], certain['id'],
                                              result['revision'], client=client, automatic=True)
                    applied += 1
                    for message in outcome['image_errors']:
                        issue(row, message, action='fetching_cover', retryable=True)
                except (ValueError, OSError) as exc:
                    issue(row, str(exc), action='querying_metadata', retryable=True)
                    skipped += 1
        return {'stashdb_review': count - applied, 'stashdb_applied': applied, 'stashdb_skipped': skipped}
    finally:
        client.close()


def review_queue(config):
    root = config.directory('state') / 'stashdb-review'
    records = []
    for path in sorted(root.glob('*.json')):
        try:
            data = json.loads(path.read_text(encoding='utf-8'))
            if isinstance(data, dict) and data.get('preview', {}).get('candidates'):
                records.append(data)
        except (OSError, ValueError, AttributeError):
            continue
    return records


def apply_candidate(config, database, asset_id, candidate_id, revision, *, client=None, automatic=False):
    """采用选中候选，同时保留人工字段和现有图片。"""
    path = config.directory('state') / 'stashdb-review' / f'{asset_id}.json'
    try:
        record = json.loads(path.read_text(encoding='utf-8'))
        preview = record['preview']
        candidate = next(item for item in preview['candidates'] if item['id'] == candidate_id)
    except (OSError, ValueError, KeyError, TypeError, StopIteration) as exc:
        raise ValueError('This candidate is no longer available. Search again.') from exc
    if revision != preview.get('revision'):
        raise ValueError('This candidate is outdated. Search again.')
    owned_client = client is None
    client = client or stashdb_client.Client(config)
    try:
        scene = client.scene(candidate_id)
        if not scene or scene.get('deleted') or scene.get('id') != candidate_id:
            raise ValueError('The StashDB scene is no longer available.')
        return _apply_scene(config, database, asset_id, candidate, revision, scene, client, path, automatic)
    finally:
        if owned_client:
            client.close()


def _apply_scene(config, database, asset_id, candidate, revision, scene, client, path, automatic):
    fields = {'catalog_title': candidate.get('title'), 'release_date': candidate.get('date'),
              'studio': candidate.get('studio')}
    owner = 'auto:stashdb' if automatic else 'review:stashdb'
    performers = []
    with database.write_transaction() as connection:
        row = connection.execute('SELECT mutation_revision,field_owners,code FROM asset WHERE id=?', (asset_id,)).fetchone()
        if not row or row['mutation_revision'] != revision:
            raise ValueError('The library item changed. Search again.')
        fields = {name: value for name, value in fields.items() if value and
                  (not automatic or not owner_of(row['field_owners'], name).startswith(('user:', 'review:')))}
        if fields:
            write_owned_fields(connection, [asset_id], fields, owner, expected_revision=revision)
        # Explicit selection replaces this video's cast and studio associations.
        reviewed = connection.execute("SELECT 1 FROM asset_entity WHERE asset_id=? AND role='performer' "
                                      "AND source='review:stashdb' LIMIT 1", (asset_id,)).fetchone()
        if not automatic:
            if scene.get('performers'):
                connection.execute("DELETE FROM asset_entity WHERE asset_id=? AND role='performer'", (asset_id,))
                connection.execute("DELETE FROM asset_tag WHERE asset_id=? AND tag LIKE '演员:%'", (asset_id,))
            if fields.get('studio'):
                connection.execute("DELETE FROM asset_entity WHERE asset_id=? AND role='studio'", (asset_id,))
        elif not reviewed:
            connection.execute("DELETE FROM asset_entity WHERE asset_id=? AND role='performer' "
                               "AND source='auto:stashdb'", (asset_id,))
        for appearance in scene.get('performers') or []:
            if automatic and reviewed:
                break
            performer = appearance.get('performer') or {}
            name, external_id = performer.get('name'), performer.get('id')
            if not name or not external_id or performer.get('deleted'):
                continue
            # Do not attach a same-name entity already bound to a different StashDB identity.
            conflict = connection.execute(
                "SELECT 1 FROM entity e JOIN entity_external_ref x ON x.entity_id=e.id "
                "WHERE e.kind='performer' AND e.normalized_name=? AND x.provider='stashdb' "
                "AND x.external_kind='performer' AND x.external_id<>? LIMIT 1",
                (str(name).strip().casefold(), str(external_id))).fetchone()
            if conflict:
                continue
            entity_id = upsert_asset_entity(connection, kind='performer', name=name, asset_id=asset_id,
                role='performer', source=owner, external_provider='stashdb', external_id=external_id,
                metadata={'scene_id': scene['id']}, update_entity_metadata=False)
            if entity_id is not None:
                performers.append((entity_id, performer))
        if fields.get('studio'):
            studio = scene.get('studio') or {}
            upsert_asset_entity(connection, kind='studio', name=fields['studio'], asset_id=asset_id,
                role='studio', source=owner, external_provider='stashdb', external_id=studio.get('id'),
                metadata={'scene_id': scene['id']}, update_entity_metadata=False)
    image_errors = _install_images(config, client, asset_id, row['code'], scene, performers,
                                   stashdb_client.settings(config), replace_cover=not automatic)
    path.unlink(missing_ok=True)
    return {'ok': True, 'updated_fields': list(fields), 'performers': len(performers), 'image_errors': image_errors}
