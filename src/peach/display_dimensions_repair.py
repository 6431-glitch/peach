"""只重探旧测量；显示尺寸变化时失效本片的派生预览。"""
import json
from pathlib import Path

from . import artifact_rules, media_probe, timeline_sheets, upgrade_rules
from .fsutil import atomic_write_text
from .media_sources import cost_for
from .platform import translate_ledger_path


def collect(connection) -> dict:
    # 旧账本未保存 SAR；编码尺寸本身无法区分方形与非方形像素。
    return {str(row[0]): [row[1], row[2]] for row in connection.execute(
        "SELECT id,width,height FROM asset WHERE medium='video' AND disposal IS NULL "
        "AND duration>0 AND width>0 AND height>0")}


def reprobe(contract, config, asset_id: int, *, baseline=None) -> dict:
    from .library_processing import _ffprobe_path
    from .jobs import DiskGuard
    with contract.database.read_connection() as connection:
        row = connection.execute("SELECT * FROM asset WHERE id=? AND medium='video' AND disposal IS NULL",
                                 (asset_id,)).fetchone()
    if row is None:
        return {'changed': False, 'rebuild': False}
    if cost_for(row['location'], row['path'], config) != 'free':
        raise ValueError('显示尺寸重探需要先确认计费来源的流量')
    ffprobe = _ffprobe_path(config)
    if not ffprobe:
        raise ValueError('显示尺寸重探未取得 ffprobe')
    guard = DiskGuard(config.data_root, 1)
    guard.check(force=True)
    measured = media_probe.measure(ffprobe, asset_id, row['path'])
    guard.check(force=True)
    if measured[0] <= 0 or measured[1] <= 0 or measured[2] <= 0:
        raise ValueError('显示尺寸未取得，保留原有测量')
    with contract.database.write_transaction() as connection:
        current = connection.execute('SELECT * FROM asset WHERE id=? AND disposal IS NULL', (asset_id,)).fetchone()
        if current is None or current['path'] != row['path'] or any(
                current[key] != row[key] for key in media_probe.PROBED_COLUMNS):
            raise ValueError('重探期间影片或测量已变化，请重试')
        connection.execute(media_probe.UPDATE, measured)
    changed = tuple(baseline or (row['width'], row['height'])) != tuple(measured[1:3])
    if changed and row['location'] == 'local':
        snapshot = translate_ledger_path(row['snapshot_path']) if row['snapshot_path'] else None
        if (snapshot is not None and contract.snapshot_root is not None
                and snapshot.is_relative_to(contract.snapshot_root) and snapshot.is_file()):
            artifact_rules.remember(snapshot, f'invalid:{upgrade_rules.DISPLAY_DIMENSIONS}')
        timeline_root = Path(getattr(contract, 'timeline_root', Path(config.directory('generated')) / 'timeline'))
        meta = timeline_sheets.read_meta(timeline_root, asset_id)
        if meta:
            meta['invalidated_by'] = upgrade_rules.DISPLAY_DIMENSIONS
            atomic_write_text(timeline_sheets.meta_path(timeline_root, asset_id), json.dumps(meta))
    return {'changed': changed, 'rebuild': changed and row['location'] == 'local'}


def rebuild_timeline(contract, config, asset_id, *, active):
    from .ffmpeg import FFmpegResolver
    from .jobs import DiskGuard
    root = Path(getattr(contract, 'timeline_root', Path(config.directory('generated')) / 'timeline'))
    meta = timeline_sheets.read_meta(root, asset_id)
    if not meta or meta.get('invalidated_by') != upgrade_rules.DISPLAY_DIMENSIONS:
        return
    choice = FFmpegResolver(config.directory('tools') / 'ffmpeg').ffmpeg()
    if not choice:
        raise ValueError('时间轴预览重建未取得 ffmpeg')
    with contract.database.read_connection() as connection:
        row = connection.execute('SELECT path,duration FROM asset WHERE id=? AND disposal IS NULL',
                                 (asset_id,)).fetchone()
    guard = DiskGuard(config.data_root, 1)
    def available():
        guard.check()
        return active()
    if row is not None and not timeline_sheets.build(
            str(choice.path), str(translate_ledger_path(row['path'])), row['duration'], root,
            asset_id, int(meta['interval']), active=available):
        raise RuntimeError('时间轴预览重建未完成')
