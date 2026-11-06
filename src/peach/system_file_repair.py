"""将旧推送发现登记的系统元数据放入可还原回收站。"""
from .discovery_rules import system_path
from .personal_records import record_holders

RULE = 'discovery-system-files-1'


def collect(connection) -> list[dict]:
    rows = [dict(row) for row in connection.execute(
        "SELECT id,path,disposal,disposal_reason,feedback_at FROM asset "
        "WHERE disposal IS NULL AND medium='other' AND coalesce(code,'')='' "
        "AND coalesce(feedback,'')<>'like'") if system_path(row['path'])]
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
