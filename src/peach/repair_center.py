"""「设置 › 修复与迁移」：升级后的各项修复做了什么、改了多少、何时做的，以及等用户确认的项。

开销小、只改自动写入的值（用户手改的不动）的修复在升级后自动执行，这里只列结果；开销大或
可能改错的（例如逐部读取网盘视频）不自动做，在这里等用户确认后才执行。
数据只读本机升级回执（`upgrade-repairs/receipt.json`）与账本的 `ledger_upgrade_repair`。

只列这台机器真碰到的项：馆藏里没有网盘视频、没有 NAS 系统目录、没有乱码人物的，对应那项不出现；
历史里没改动的那几次也不列。平台、媒体来源与馆藏的差别都落在这些读数上，不另按系统判断。
"""
from __future__ import annotations

import json
from pathlib import Path

#: 列给用户看的修复：标题、一句做了什么、是否自动执行。顺序就是页面顺序。
ITEMS = (
    ('catalog', '资料与番号整理', '按新规则修正番号、标题等自动写入的资料，你手动改过的不动', 'auto'),
    ('display-local', '本地视频显示尺寸', '重新读取本机与局域网视频的文件头，修正横竖屏判断', 'auto'),
    ('display-cloud', '网盘视频显示尺寸', '要逐部读取网盘里的视频，网盘缓存和流量会增加，确认后才开始', 'confirm'),
    ('system-files', 'NAS 系统文件', '群晖、飞牛等系统目录里被当成视频的文件移出馆藏，文件本身不删', 'auto'),
    ('garbled-people', '乱码人物', '解除早期采集乱码留下的人物关联，重新补采演员', 'auto'),
    ('dangling-candidates', '失效的复核候选', '资产删除后留下的候选改挂到同一文件的新编号，对不上的撤下', 'auto'),
)
#: 历史里的规则：账本行 id 的前缀、名字、计哪个字段（`None` 为资料整理的改动合计）。
RULES = (
    ('catalog-', '资料与番号整理', None), ('verification-settlement-', '核查差异结算', ('applied',)),
    ('studio-unbounded-misses-', '厂牌查询缓存', ('released',)), ('stale-filename-codes-', '清除误认的番号', ('cleared',)),
    ('dangling-candidates-', '失效的复核候选', ('repinned', 'withdrawn')),
)
#: 资料整理回执里不算「改动」的计数：重新探测、转人工与来源快照失效只是排队或让缓存重取，不是改了资料。
_NOT_CHANGES = ('probe_retry', 'text_review', 'text_snapshots_invalidated')


def _count(value) -> int:
    if isinstance(value, bool):
        return int(value)
    if isinstance(value, (int, float)):
        return int(value)
    if isinstance(value, (list, tuple)):
        return len(value)
    if isinstance(value, dict):
        return sum(_count(item) for item in value.values() if not isinstance(item, (str, type(None))))
    return 0


def _latest(rows, key):
    for _, _, result in rows:
        if key in result:
            return result[key]
    return None


def _touched(fact: dict) -> bool:
    """这台机器上这一项有没有事：在跑、等确认、失败，或者确实改了、补测了东西。"""
    if fact['state'] in ('running', 'waiting', 'failed', 'pending'):
        return True
    return bool(fact.get('changed') or fact.get('total') or fact.get('included'))


def _backups(value, directories) -> list[dict]:
    """回执里记下的写入前备份（`backup` 字段，可能嵌在各项补修里），以及它还在不在。

    这些备份和「账本备份」是同一批文件、同一套保留规则：还在的能从那里恢复，
    清退了的照实写已清理，撤回只能靠逐行回执。"""
    found = []
    if isinstance(value, dict):
        for key, item in value.items():
            if key == 'backup' and isinstance(item, str) and item:
                name = Path(item).name
                found.append({'name': name, 'exists': any((folder / name).is_file() for folder in directories)})
            else:
                found += _backups(item, directories)
    return found


def _history(rows, backup_directories) -> list[dict]:
    """历史记录：认得的规则里确实改了东西的那几次，连同修复前的备份还在不在。"""
    history = []
    for row_id, applied_at, result in rows:
        rule = next((rule for rule in RULES if row_id.startswith(rule[0])), None)
        if rule is None:
            continue
        if rule[2] is None:
            changed = _count({key: value for key, value in result.get('local', {}).get('changed', {}).items()
                              if key not in _NOT_CHANGES})
        else:
            changed = sum(_count(result.get(key)) for key in rule[2])
        if not changed:
            continue
        backups = list({row['name']: row for row in _backups(result, backup_directories)}.values())
        history.append({'id': row_id, 'title': rule[1], 'at': applied_at, 'changed': changed, 'backups': backups})
    return history


def snapshot(connection, receipt: dict, *, cloud_pending: int, backup_directories=()) -> dict:
    rows = sorted(((row[0], float(row[1] or 0), json.loads(row[2] or '{}')) for row in connection.execute(
        'SELECT id, applied_at, result_json FROM ledger_upgrade_repair')), key=lambda row: row[1], reverse=True)
    local = receipt.get('local', {})
    display = receipt.get('display_dimensions_v2', {})
    done, total = len(display.get('completed', {})), len(display.get('dimensions', {}))
    isolated = _latest(rows, 'discovery-system-files-2') or {}
    garbled = _latest(rows, 'garbled_people') or {}
    dangling = next((result for row_id, _, result in rows if row_id.startswith('dangling-candidates-')), {})
    facts = {
        'catalog': {'state': local.get('state') or ('done' if local else 'none'),
                    'changed': _count({key: value for key, value in local.get('changed', {}).items()
                                       if key not in _NOT_CHANGES})},
        'display-local': {'state': 'none' if not total else 'done' if done >= total else 'running',
                          'done': done, 'total': total},
        'display-cloud': {'state': 'waiting' if cloud_pending else 'done' if display.get('cloud_included_at') else 'none',
                          'pending': cloud_pending, 'included': bool(display.get('cloud_included_at'))},
        'system-files': {'state': 'done' if isolated else 'none', 'changed': _count(isolated.get('isolated'))},
        'garbled-people': {'state': 'done' if garbled else 'none', 'changed': _count(garbled.get('links'))},
        'dangling-candidates': {'state': 'done' if dangling else 'none',
                                'changed': _count(dangling.get('repinned')) + _count(dangling.get('withdrawn'))},
    }
    items = [{'id': key, 'title': title, 'summary': summary, 'mode': mode, **facts[key]}
             for key, title, summary, mode in ITEMS if _touched(facts[key])]
    return {'items': items, 'history': _history(rows, backup_directories)}
