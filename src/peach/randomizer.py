"""Library draws and explicitly reviewed video formats."""
from __future__ import annotations

import random

from .entities import male_performer_ids


def set_format_from_source(connection, asset_id, value, source):
    """Fill only missing classifications using an explicit source category."""
    if value not in ('film', 'clip'):
        return
    connection.execute('INSERT INTO asset_format(asset_id,format,source) VALUES(?,?,?) ON CONFLICT(asset_id) DO NOTHING',
                       (asset_id, value, source))


def get_format(database, asset_id):
    with database.read_connection() as connection:
        asset = connection.execute("SELECT 1 FROM asset WHERE id=? AND medium='video' AND COALESCE(disposal,'') NOT IN ('trash','vanished')", (asset_id,)).fetchone()
        if asset is None:
            raise ValueError('Video not found.')
        row = connection.execute('SELECT format FROM asset_format WHERE asset_id=?', (asset_id,)).fetchone()
        return row[0] if row else 'unknown'


def set_format(database, asset_id, value):
    if value not in ('film', 'clip', 'unknown'):
        raise ValueError('Choose Film, Clip, or Unclassified.')
    with database.write_transaction() as connection:
        asset = connection.execute("SELECT 1 FROM asset WHERE id=? AND medium='video' AND COALESCE(disposal,'') NOT IN ('trash','vanished')", (asset_id,)).fetchone()
        if asset is None:
            raise ValueError('Video not found.')
        if value == 'unknown':
            connection.execute('DELETE FROM asset_format WHERE asset_id=?', (asset_id,))
        else:
            connection.execute("INSERT INTO asset_format(asset_id,format,source) VALUES(?,?,'user:manual') ON CONFLICT(asset_id) DO UPDATE SET format=excluded.format,source=excluded.source,updated_at=CURRENT_TIMESTAMP", (asset_id, value))


def draw(database, mode, exclude=None):
    if mode not in ('film', 'clip', 'actress'):
        raise ValueError('Choose Film, Clip, or Actress.')
    with database.read_connection() as connection:
        if mode == 'actress':
            males = male_performer_ids(connection)
            rows = connection.execute("SELECT DISTINCT e.id,e.canonical_name AS name FROM entity e JOIN asset_entity ae ON ae.entity_id=e.id AND ae.role='performer' JOIN asset a ON a.id=ae.asset_id WHERE e.kind='performer' AND a.medium='video' AND COALESCE(a.disposal,'') NOT IN ('trash','vanished')").fetchall()
            pool = [dict(row) for row in rows if row['id'] not in males]
        else:
            rows = connection.execute("SELECT a.id,COALESCE(NULLIF(a.catalog_title,''),a.name) AS name FROM asset a JOIN asset_format f ON f.asset_id=a.id WHERE a.medium='video' AND COALESCE(a.disposal,'') NOT IN ('trash','vanished') AND f.format=?", (mode,)).fetchall()
            pool = [dict(row) for row in rows]
    if len(pool) > 1 and exclude is not None:
        pool = [item for item in pool if item['id'] != exclude]
    return random.SystemRandom().choice(pool) if pool else None
