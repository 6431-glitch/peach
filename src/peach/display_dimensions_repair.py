"""逐片补齐旧视频的 SAR 测量；只失效尺寸变化的派生预览。"""
import hashlib
import json
from pathlib import Path

from filelock import FileLock

from . import artifact_rules, media_probe, timeline_sheets, upgrade_rules
from .fsutil import atomic_write_text
from .media_sources import CLOUD_LOCATIONS, cost_for
from .platform import translate_ledger_path
from .media_identity import path_key
from .strm import skip_background_read

RECEIPT_KEY = 'display_dimensions_v2'
IDENTITY_COLUMNS = 'id,location,path,size,mtime'


def generation(row) -> str:
    identity = [row['location'], path_key(row['path']), row['size'], row['mtime']]
    return hashlib.sha256(json.dumps(identity, ensure_ascii=False).encode('utf-8')).hexdigest()[:24]


def task_key(row) -> str:
    return f'upgrade-library:{upgrade_rules.DISPLAY_DIMENSIONS_SAR}:{generation(row)}:{row["id"]}'


def collect(connection, *, cloud: bool = False) -> dict:
    """要补测的旧视频。网盘挂载默认不在内：逐部读文件头会撑大网盘客户端缓存、耗流量，
    收益只有少数非方形像素的片子；用户在「自动修复」里点「补测网盘视频」才加进来。"""
    places = ','.join('?' * len(CLOUD_LOCATIONS))
    condition = f"location IN ({places})" if cloud else f"location NOT IN ({places})"
    return {str(row['id']): [row['width'], row['height']] for row in connection.execute(
        "SELECT id,path,width,height FROM asset WHERE medium='video' AND disposal IS NULL "
        f"AND duration>0 AND width>0 AND height>0 AND {condition}", tuple(CLOUD_LOCATIONS))
        if not skip_background_read(row['path'])}


def _invalidate(contract, config, row) -> None:
    rule = upgrade_rules.DISPLAY_DIMENSIONS_SAR
    snapshot = translate_ledger_path(row['snapshot_path']) if row['snapshot_path'] else None
    if (snapshot is not None and contract.snapshot_root is not None
            and snapshot.is_relative_to(contract.snapshot_root) and snapshot.is_file()):
        artifact_rules.remember(snapshot, f'invalid:{rule}')
    root = Path(getattr(contract, 'timeline_root', Path(config.directory('generated')) / 'timeline'))
    meta = timeline_sheets.read_meta(root, row['id'])
    if meta:
        meta['invalidated_by'] = rule
        atomic_write_text(timeline_sheets.meta_path(root, row['id']), json.dumps(meta))


def reprobe(contract, config, asset_id: int, *, checkpoint, expected_generation=None) -> dict:
    from .library_processing import _ffprobe_path
    from .upgrade_repairs import REVISION
    receipt_path = Path(contract.follow_state_root) / 'upgrade-repairs' / 'receipt.json'

    def receipt_from(connection):
        stored = connection.execute('SELECT result_json FROM ledger_upgrade_repair WHERE id=?',
                                    (REVISION,)).fetchone()
        if stored is None:
            raise ValueError('显示尺寸补测记录尚未准备')
        return json.loads(stored[0])

    with contract.database.read_connection() as connection:
        receipt = receipt_from(connection)
        completed = receipt.get(RECEIPT_KEY, {}).get('completed', {}).get(str(asset_id))
        row = connection.execute("SELECT * FROM asset WHERE id=? AND medium='video' AND disposal IS NULL",
                                 (asset_id,)).fetchone()
    if row is None or skip_background_read(row['path']):
        return {'changed': False, 'skipped': True}
    current_generation = generation(row)
    if expected_generation is not None and expected_generation != current_generation:
        return {'changed': False, 'skipped': True}
    if completed is not None and completed.get('generation') == current_generation:
        return completed
    if cost_for(row['location'], row['path'], config) != 'free':
        raise ValueError('显示尺寸补测需要先确认计费来源的流量')
    ffprobe = _ffprobe_path(config)
    if not ffprobe:
        raise ValueError('显示尺寸补测未取得 ffprobe')
    checkpoint()
    measured = media_probe.measure(ffprobe, asset_id, row['path'])
    checkpoint()
    if measured[0] <= 0 or measured[1] <= 0 or measured[2] <= 0:
        raise ValueError('显示尺寸未取得，保留原有测量')
    changed = (row['width'], row['height']) != tuple(measured[1:3])
    result = {'changed': changed, 'dimensions': list(measured[1:3]), 'generation': current_generation}
    # 测量和完成回执同一事务提交；服务在任务结算前重启也不再读取成功的媒体。
    with FileLock(str(receipt_path) + '.lock'):
        with contract.database.write_transaction() as connection:
            receipt = receipt_from(connection)
            current = connection.execute('SELECT * FROM asset WHERE id=? AND disposal IS NULL', (asset_id,)).fetchone()
            if current is None or generation(current) != current_generation or any(
                    current[key] != row[key] for key in media_probe.PROBED_COLUMNS):
                raise ValueError('补测期间影片或测量已变化，请重试')
            if changed:
                _invalidate(contract, config, current)
            connection.execute('UPDATE asset SET width=?,height=?,ctx_orient=?,ctx_quality=? WHERE id=?',
                               (measured[1], measured[2], measured[7], measured[8], asset_id))
            receipt[RECEIPT_KEY].setdefault('completed', {})[str(asset_id)] = result
            receipt[RECEIPT_KEY].setdefault('generations', {})[str(asset_id)] = current_generation
            connection.execute('UPDATE ledger_upgrade_repair SET result_json=? WHERE id=?',
                               (json.dumps(receipt, ensure_ascii=False), REVISION))
        atomic_write_text(receipt_path, json.dumps(receipt, ensure_ascii=False))
    return result
