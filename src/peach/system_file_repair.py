"""将旧推送发现登记的系统元数据放入可还原回收站。"""
import json
from pathlib import PureWindowsPath

from .discovery_rules import system_path
from .personal_records import record_holders

PRIOR_RULE = 'discovery-system-files-1'
RULE = 'discovery-system-files-2'


def _previously_isolated(connection) -> set[tuple[int, PureWindowsPath]]:
    """旧回执中隔离过的同一路径不再处理，保留用户后来的还原决定。"""
    receipts = connection.execute(
        'SELECT json_extract(result_json,?) FROM ledger_upgrade_repair '
        'WHERE json_type(result_json,?) IS NOT NULL',
        (f'$."{PRIOR_RULE}"', f'$."{PRIOR_RULE}"'))
    return {(row['id'], PureWindowsPath(row['path'])) for receipt in receipts
            for row in json.loads(receipt[0])['isolated']}


def collect(connection) -> list[dict]:
    previous = _previously_isolated(connection)
    rows = [dict(row) for row in connection.execute(
        "SELECT id,path,disposal,disposal_reason,feedback_at FROM asset "
        "WHERE disposal IS NULL AND medium='other' AND coalesce(code,'')='' "
        "AND coalesce(feedback,'')<>'like'")
        if system_path(row['path']) and (row['id'], PureWindowsPath(row['path'])) not in previous]
    protected = record_holders(connection, [row['id'] for row in rows])
    return [row for row in rows if row['id'] not in protected and not connection.execute(
        "SELECT 1 FROM review_decision WHERE category='junk_file' AND item_key=? AND status='rejected'",
        (str(row['id']),)).fetchone()]


def apply(connection, rows, stamp: float) -> list[dict]:
    current = {row['id']: row for row in collect(connection)}
    changed = []
    for row in rows:
        if current.get(row['id']) != row:
            continue
        connection.execute(
            "UPDATE asset SET disposal='trash',disposal_reason='junk',feedback_at=? WHERE id=?",
            (stamp, row['id']))
        changed.append(row)
    return changed
