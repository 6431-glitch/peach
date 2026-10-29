"""当前所选艺名的中日显示写法；只读投影，不更改规范名或作品署名。"""
from __future__ import annotations

import json
import re

from . import entity_classification
from .entities import normalize_entity_name
from .kanji import fold_glyphs, simplify_kanji
from .metadata_alias_resolve import is_descriptive, is_planning_alias
from .performer_header import HIDDEN_SOURCES, SHOWN, page_names
from .performer_profiles import read_profile
from .sources.seesaa import split_names

_KANA = re.compile(r"[\u3040-\u30ff]")
_LATIN = re.compile(r"[A-Za-z]")
_BRACKET = re.compile(r"[()（）【】\[\]]")
_SENTENCE = re.compile(r"中に.+ながらも|を実現して|を我慢でき|現在は|正式女優名")
# 已核对的同一艺名译写。仅当资料原文含对应日文写法时使用，
# 不把同一人物的新旧艺名当作语言对应。
_REVIEWED_WRITINGS = (
    ("枫花恋", "楓カレン"),
    ("田中柠檬", "田中レモン"),
    ("松永纱奈", "松永さな"),
    ("森泽佳奈", "森沢かな"),
)


def _key(name: str) -> str:
    return normalize_entity_name(fold_glyphs(name))


def writing(canonical: str, page: dict, source_url: str) -> dict:
    """只对当前统称找写法；资料页主名与统称不对应时不采用主名。"""
    original = list(dict.fromkeys(
        name for name in [page["name"], *(entry["name"] for entry in page["aliases"])] if name))
    key = _key(canonical)
    for zh, ja in _REVIEWED_WRITINGS:
        if key in {_key(zh), _key(ja)} and ja in original:
            return {"zh_cn": zh, "ja": ja, "source": source_url, "basis": "reviewed-writing"}
    matches = [name for name in original if _key(name) == key]
    # 多个原文写法折为相同字形时，只有主名确定属于当前艺名才选主名。
    ja = page["name"] if page["name"] in matches else matches[0] if len(matches) == 1 else None
    zh = simplify_kanji(canonical) if not _KANA.search(canonical) else None
    if _LATIN.search(canonical):
        return {"zh_cn": canonical, "ja": canonical, "basis": "original-spelling"}
    return {"zh_cn": zh, "ja": ja, "source": source_url, "basis": "source-glyphs"}


def _stage_key(name: str, page: dict) -> str:
    originals = {page["name"], *(entry["name"] for entry in page["aliases"])}
    for zh, ja in _REVIEWED_WRITINGS:
        if ja in originals and _key(name) in {_key(zh), _key(ja)}:
            return _key(zh)
    return _key(name)


def display(connection, entity_id: int, canonical: str, aliases: list[dict], grouped: dict | None) -> dict:
    """名称菜单与别名行共享语言投影；原始别名和可选名称的值不改写。"""
    profile = read_profile(connection, entity_id)
    page = page_names(profile)
    original_names = {page["name"], *(entry["name"] for entry in page["aliases"])} - {""}
    readings = {page["reading"], *(entry.get("reading", "") for entry in page["aliases"])} - {""}
    romanizations = {_key(entry.get("romaji", "")) for entry in page["aliases"]} - {""}
    hidden_keys = {_key(row["alias"]) for row in aliases if row["source"] in HIDDEN_SOURCES}
    registered = {canonical, *(row["alias"] for row in aliases)}
    known_keys = {_key(name) for name in registered | original_names}

    def keep(name: str) -> bool:
        if name == canonical:
            return True
        if not name or _BRACKET.search(name):
            return False
        parts = split_names(name)
        if len(parts) > 1 and all(_key(part) in known_keys for part in parts):
            return False
        if name == "FC2" or _SENTENCE.search(name) or is_descriptive(name):
            return False
        if name not in original_names and (name in readings or _key(name) in hidden_keys):
            return False
        if _LATIN.search(name) and not _LATIN.search(canonical):
            return name in original_names and _key(name) not in romanizations
        return not is_planning_alias(name)

    stages: dict[str, dict] = {}
    ordered = [canonical, page["name"], *(entry["name"] for entry in page["aliases"]),
               *(row["alias"] for row in aliases)]
    for name in ordered:
        if not keep(name):
            continue
        key = _stage_key(name, page)
        row = stages.setdefault(key, {"value": None, "registered": [], **writing(name, page, (profile or {}).get("source_url", ""))})
        if name in registered and name not in row["registered"]:
            row["registered"].append(name)
        if row["value"] is None and name in registered:
            row["value"] = name
    current_key = _stage_key(canonical, page)
    current = stages[current_key]
    choices, groups = {}, {}
    for language, field in (("zh-CN", "zh_cn"), ("ja", "ja")):
        choices[language] = [{"value": canonical if key == current_key else
                             row[field] if row[field] in row["registered"] else row["value"],
                              "label": row[field] or canonical}
                             for key, row in stages.items()
                             if row["value"] is not None and (row[field] or key == current_key)]
        taken = {current_key}
        sections = []
        for section in (grouped or {}).get("groups", []):
            shown = []
            for entry in section["names"]:
                key = _stage_key(entry["name"], page)
                row = stages.get(key)
                if row and row[field] and key not in taken:
                    shown.append({"name": row[field]})
                    taken.add(key)
            if shown:
                sections.append({"label": section.get("label", ""), "names": shown})
        everyone = [entry["name"] for section in sections for entry in section["names"]]
        reading = ""
        if language == "ja":
            if _stage_key(page["name"], page) == current_key:
                reading = page["reading"]
            else:
                reading = next((entry.get("reading", "") for entry in page["aliases"]
                                if _stage_key(entry["name"], page) == current_key), "")
            if reading == current[field]:
                reading = ""
        groups[language] = {"reading": reading, "shown": everyone[:SHOWN], "total": len(everyone), "groups": sections}
    return {"current": {"canonical_name": canonical, **writing(canonical, page, (profile or {}).get("source_url", ""))},
            "choices": choices, "groups": groups}


def variants(connection) -> list[dict]:
    """资料形状接口同时交付只读显示写法；缺失对应关系明确保留为空。"""
    people = list(connection.execute(
        "SELECT id,kind,canonical_name FROM entity WHERE kind IN ('performer','creator')"))
    categories = entity_classification.summaries(connection, [row["id"] for row in people])
    profiles = {row["entity_id"]: dict(row) for row in connection.execute(
        "SELECT entity_id,raw_json,source_url FROM performer_profile")}
    result = []
    for person in people:
        if "japanese_av" not in categories[person["id"]]["identity_categories"]:
            continue
        profile = profiles.get(person["id"], {})
        raw = json.loads(profile.get("raw_json") or "{}")
        names = writing(person["canonical_name"], page_names({"raw": raw}), profile.get("source_url", ""))
        result.append({"id": person["id"], "kind": person["kind"],
                       "canonical_name": person["canonical_name"], **names})
    return result
