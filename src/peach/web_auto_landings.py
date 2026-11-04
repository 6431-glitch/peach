"""复核页的「自动写入的资料」：列出核查结算自动写下的批次，预览后整批撤回（ADR-0140）。

只放行 ADR-0139 的两条规则：官方一致的标题、日期覆盖与标签并集。它们只改账本、不删盘上
文件，决定里存着撤回要用的全部依据。别的自动落库来源（种子、别名、样张、封面……）仍只在
`scripts/revert_auto_landing.py` 撤；接口按批次号反查规则，查不到就拒绝，挡住会删文件的来源。

预览与撤回调同一个 `auto_landing_revert.plan`，撤回再调同一个 `apply`，和命令行一字不差：
被人改过的资产照旧不动、单独报出。预览给出计划摘要的 `token`；撤回在写锁里重算计划，
对不上就拒绝，确认的就是将要写的。写入前按账本备份的命名留一份，回执写出文件名。
"""
from __future__ import annotations

import hashlib
import json
import time
from datetime import datetime, timezone
from uuid import uuid4

from . import auto_landing_revert
from .library_processing import LABELS
from .metadata_auto_apply import VERIFIED_REPLACE_RULE, VERIFIED_UNION_RULE
from .migrations import sqlite_backup
from .web_state import WebContract

#: 网页能撤的规则，顺序就是列表里的顺序。
RULES = {VERIFIED_REPLACE_RULE: "官方来源覆盖标题与日期", VERIFIED_UNION_RULE: "补齐来源多给的标签"}
#: 撤回前那份账本备份的用途名，「账本备份」列表里显示 `ledger_backups.PURPOSE_LABELS` 的写法。
BACKUP_PURPOSE = "auto-landing-revert"


def batch_time(batch: str) -> float | None:
    """批次号里的时刻：覆盖早先记 UTC `2026-11-04T06:10:56Z`，并集与此后的覆盖记本机时间 `20261104T141053`。"""
    stamp = batch.rpartition("@")[2]
    try:
        if stamp.endswith("Z"):
            return datetime.strptime(stamp, "%Y-%m-%dT%H:%M:%SZ").replace(tzinfo=timezone.utc).timestamp()
        return time.mktime(time.strptime(stamp, "%Y%m%dT%H%M%S"))
    except ValueError:
        return None


def _decisions(connection) -> list[tuple[str, str, dict]]:
    """两条规则写下、仍在的决定：（规则，item_key，note）。"""
    found = []
    for row in connection.execute(
            "SELECT item_key,note FROM review_decision WHERE category='metadata_fields'"
            " AND status='approved' AND note LIKE '%adr-0139-%'"):
        try:
            note = json.loads(row["note"] or "{}")
        except ValueError:
            continue
        if isinstance(note, dict) and note.get("rule") in RULES:
            found.append((note["rule"], row["item_key"], note))
    return found


def _batches_of(note: dict) -> list[str]:
    return [batch for batch in (note.get("batches") or [note.get("batch", "")]) if batch]


def list_batches(connection) -> list[dict]:
    """每条规则的每个批次：时间、决定条数与影响面，新的在前。

    并集一条决定可以带几个批次（之后收录了生词又补过一次），它在每个批次里都算一条；
    标签数按那个批次真正写下、仍在账本里的行数。
    """
    groups: dict[tuple[str, str], dict] = {}
    for rule, item_key, note in _decisions(connection):
        for batch in _batches_of(note):
            group = groups.setdefault((rule, batch), {"rule": rule, "batch": batch, "items": set(), "assets": set()})
            group["items"].add(item_key)
            group["assets"].update(int(before["asset_id"]) for before in note.get("previous") or [])
    tags: dict[str, dict[str, int]] = {}
    for rule, batch in groups:
        if rule == VERIFIED_UNION_RULE:
            tags[batch] = {str(row[0] or ""): row[1] for row in connection.execute(
                "SELECT json_extract(metadata_json,'$.review_item'),COUNT(*) FROM asset_entity"
                " WHERE role='tag' AND source=? GROUP BY 1", (batch,))}
    listed = []
    for (rule, batch), group in groups.items():
        written = tags.get(batch, {})
        listed.append({
            "rule": rule, "label": RULES[rule], "batch": batch, "at": batch_time(batch),
            "items": len(group["items"]), "assets": len(group["assets"]),
            "tags": sum(written.get(key, 0) for key in group["items"]) if rule == VERIFIED_UNION_RULE else 0,
        })
    order = list(RULES)
    return sorted(listed, key=lambda item: (-(item["at"] or 0), order.index(item["rule"]), item["batch"]))


def _plans(contract: WebContract, connection, batches: list[str]) -> list[dict]:
    """选中批次各自的撤回计划。同一条并集决定出现在两个选中批次里时只算一次。"""
    if not batches:
        raise ValueError("请选择要撤回的批次")
    rules = {item["batch"]: item["rule"] for item in list_batches(connection)}
    unknown = [batch for batch in batches if batch not in rules]
    if unknown:
        raise ValueError(f"这批自动写入已不在，请刷新后重试：{unknown[0]}")
    plans, seen = [], set()
    for batch in dict.fromkeys(batches):
        planned = auto_landing_revert.plan(connection, rules[batch], batch, logo_root=contract.logo_root,
                                           cover_root=contract.cover_root, files=False)
        planned["verified"] = [entry for entry in planned["verified"] if entry["item_key"] not in seen]
        seen.update(entry["item_key"] for entry in planned["verified"])
        plans.append(planned)
    return plans


def _token(plans: list[dict]) -> str:
    entries = [entry for planned in plans for entry in planned["verified"]]
    return hashlib.sha256(json.dumps(entries, ensure_ascii=False, sort_keys=True, default=str)
                          .encode("utf-8")).hexdigest()[:24]


def _assets(connection, ids: set[int]) -> dict[int, dict]:
    """作品的显示名与番号；资产已删的不出现。"""
    if not ids:
        return {}
    marks = ",".join("?" * len(ids))
    return {row["id"]: {"name": row["catalog_title"] or row["name"] or "", "code": row["code"] or ""}
            for row in connection.execute(
                f"SELECT id,name,code,catalog_title FROM asset WHERE id IN ({marks})", sorted(ids))}


def _summary(connection, plans: list[dict]) -> dict:
    """计划里每条要改的：还原哪部作品的哪一格、改回什么，已被改过不动的，删哪些标签。"""
    restores, changed, tags, selected = [], [], [], set()
    for planned in plans:
        selected.add(planned["batch"])
        for entry in planned["verified"]:
            field = entry["item_key"].rpartition(":")[2]
            label = LABELS.get(field, field)
            restores += [{"asset_id": int(before["asset_id"]), "field": label, "current": entry["value"],
                          "previous": before.get("value") or ""} for before in entry.get("restores") or []]
            changed += [{"asset_id": int(asset_id), "field": label, "written": entry["value"]}
                        for asset_id in entry.get("changed") or []]
            tags += [{"asset_id": tag["asset_id"], "tag": tag["tag"], "batch": tag["batch"]}
                     for tag in entry.get("tags") or []]
    names = _assets(connection, {row["asset_id"] for row in [*restores, *changed, *tags]})
    for row in [*restores, *changed, *tags]:
        # 写入后作品被删掉的，计划同样记在 `changed` 里不动；`gone` 让页面说清是哪一种。
        row.update(names.get(row["asset_id"], {"name": "", "code": "", "gone": True}))
    return {"decisions": sum(len(planned["verified"]) for planned in plans),
            "restores": restores, "changed": changed, "tags": tags,
            # 并集决定按决定撤：选中的批次连带它更早或更晚补的那几个。
            "other_batches": sorted({tag["batch"] for tag in tags} - selected)}


def _requested(args) -> list[str]:
    raw = args.get("batches") if isinstance(args, dict) else None
    if isinstance(raw, list):
        return [str(batch).strip() for batch in raw if str(batch).strip()]
    return [batch.strip() for batch in str(raw or "").split(",") if batch.strip()]


def q_auto_landings(contract: WebContract, args=None):
    """`GET /api/review/auto-landings`：批次列表；带 `batches=a,b` 时返回这几批的撤回预览与 token。"""
    batches = _requested(args or {})
    with contract.read_connection() as connection:
        if not batches:
            return {"items": list_batches(connection)}
        plans = _plans(contract, connection, batches)
        return {"batches": [planned["batch"] for planned in plans], "token": _token(plans),
                **_summary(connection, plans)}


def w_auto_landing_revert(contract: WebContract, body):
    """`POST /api/review/auto-landings/revert`：在写锁里重算计划，token 对上才备份并撤回。"""
    batches = _requested(body or {})
    with contract.write_transaction() as connection:
        connection.execute("BEGIN IMMEDIATE")
        plans = _plans(contract, connection, batches)
        if _token(plans) != str((body or {}).get("token") or ""):
            raise ValueError("这几批自动写入已有变化，请重新预览")
        summary = _summary(connection, plans)
        # 与标签管理同一个做法：写锁里只复制一份，完整性检查与清退留给账本备份那一轮，
        # 不让任务中心的心跳在这里多等几十秒。
        stamp = datetime.now().strftime("%Y%m%d-%H%M%S")
        backup = contract.db_path.with_name(f"ledger.pre-{BACKUP_PURPOSE}-{stamp}-{uuid4().hex[:8]}.db")
        sqlite_backup(contract.db_path, backup)
        results = [auto_landing_revert.apply(connection, planned) for planned in plans]
    contract.cache_bust()
    return {"ok": True, "batches": [planned["batch"] for planned in plans],
            "restored": sum(result["还原核查覆盖"] for result in results),
            "removed_tags": sum(result["删除核查并集标签"] for result in results),
            "decisions": sum(result["删除核查决定"] for result in results),
            "changed": summary["changed"], "backup": backup.name}
