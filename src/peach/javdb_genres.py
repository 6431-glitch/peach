"""JavDB 匿名接口的类别 id 换回详情页的类别原词。

接口按作品给出类别名，是译名：同一个 (作品类型, 类别 id) 在不同作品上会写成不同的词
（`美臀` 与 `屁股`，`肛門・肛交` 与 `肛交`），不能直接交给 `genre_taxonomy`。这里按类别 id
换回详情页 `?locale=zh` 的原词，词表与用户的 genre 决定照旧按原词工作（ADR-0100、ADR-0140）。

对照由 `scripts/generate_javdb_genres.py` 把同一作品的详情页快照与接口资料按位置对齐生成；
同一个 id 对到两个原词的整项不收。`HIDDEN` 是接口给、详情页不显示的类别（如 `数位马赛克`），
不投出，否则有码作品会比详情页多出「有码」这类标签，与既有落库结果不一致。
"""
from __future__ import annotations

from collections.abc import Mapping

# BEGIN GENERATED_JAVDB_GENRES
GENRES = {}
HIDDEN = frozenset([])
# END GENERATED_JAVDB_GENRES


def genre_key(kind: object, genre_id: object) -> str:
    """对照表的键：`<作品类型>:<类别 id>`；类型或 id 不是来源写法时返回空串。"""
    if type(kind) is not int or kind < 0:
        return ""
    value = str(genre_id or "").strip()
    return f"{kind}:{value}" if value.isdigit() else ""


def page_genres(movie: Mapping) -> tuple[str, ...] | None:
    """接口作品的类别按详情页原词交出。

    有一个类别不在对照表里就返回 `None`：这一站这次不给标签。只交认得出的那几个，
    ADR-0100 的自动重判会把那个类别此前落下的标签撤掉；把接口译名交出去，又会按
    另一个词落库。两种都比不给更糟，未知类别补进对照表后自然恢复。
    """
    words = []
    for tag in movie.get("tags") or []:
        key = genre_key(movie.get("type"), tag.get("id") if isinstance(tag, Mapping) else None)
        if key in HIDDEN:
            continue
        word = GENRES.get(key)
        if not word:
            return None
        if word not in words:
            words.append(word)
    return tuple(words)
