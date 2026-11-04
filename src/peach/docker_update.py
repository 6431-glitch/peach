"""Docker 部署的一键更新（ADR-0140）：核对镜像仓库、保存 Watchtower 连接、请它重建容器。

容器换不掉自己，拉镜像与重建交给同一 compose 里可选的 Watchtower。Peach 只持有它的
HTTP API 地址与令牌；令牌存在本机 secrets，读接口只回存没存过。
"""
from __future__ import annotations

import json
import os
import re
from pathlib import Path
from urllib.parse import urlsplit

import httpx

from .follow_secrets import CredentialStore
from .fsutil import atomic_write_text
from .http import HttpRequest

REPOSITORY = "longmeidao/peach"
REGISTRY = "https://registry-1.docker.io"
REGISTRY_AUTH = "https://auth.docker.io/token"
#: 版本号标签与 `edge` 用同一组内容协商，比较的才是同一种文档的摘要。
MANIFEST_ACCEPT = ", ".join((
    "application/vnd.oci.image.index.v1+json", "application/vnd.oci.image.manifest.v1+json",
    "application/vnd.docker.distribution.manifest.list.v2+json",
    "application/vnd.docker.distribution.manifest.v2+json",
))
_DIGEST = re.compile(r"sha256:[0-9a-f]{64}")
CREDENTIAL = "watchtower"
DEFAULT_URL = "http://watchtower:8080"
#: compose 把 `${PEACH_VERSION:-edge}` 传进来。Watchtower 只换同一标签的新镜像，钉了版本号就换不动。
IMAGE_TAG_ENV = "PEACH_IMAGE_TAG"
ROLLING_TAG = "edge"


def image_tag() -> str:
    return os.environ.get(IMAGE_TAG_ENV, "").strip()


def _digest(transport, tag: str, token: str) -> str | None:
    response = transport(HttpRequest("HEAD", f"{REGISTRY}/v2/{REPOSITORY}/manifests/{tag}", {
        "Accept": MANIFEST_ACCEPT, "Authorization": f"Bearer {token}"}), 12.0, 0)
    if response.status == 404:
        return None
    if response.status != 200:
        raise OSError(f"Docker Hub 返回 HTTP {response.status}")
    digest = {key.lower(): value for key, value in response.headers.items()}.get("docker-content-digest", "")
    if not _DIGEST.fullmatch(digest):
        raise ValueError("Docker Hub 返回的镜像摘要无效")
    return digest


def published(transport, version: str) -> bool:
    """版本号标签已推送且 `edge` 指向同一镜像。只读 manifest 摘要，不下载镜像层。"""
    response = transport(HttpRequest("GET", REGISTRY_AUTH + "?service=registry.docker.io&scope=repository:"
                                     + REPOSITORY + ":pull", {"Accept": "application/json"}), 12.0, 64_000)
    if response.status != 200:
        raise OSError(f"Docker Hub 令牌请求返回 HTTP {response.status}")
    body = json.loads(response.body)
    token = body.get("token") or body.get("access_token") if isinstance(body, dict) else None
    if not isinstance(token, str) or not token:
        raise ValueError("Docker Hub 没有返回匿名令牌")
    target = _digest(transport, version, token)
    return target is not None and target == _digest(transport, ROLLING_TAG, token)


def values(root: Path) -> dict:
    saved = CredentialStore(root).load(CREDENTIAL)
    return dict(saved.values) if saved else {}


def describe(root: Path) -> dict:
    saved = values(root)
    tag = image_tag()
    return {"url": saved.get("url") or DEFAULT_URL, "token_set": bool(saved.get("token")),
            "image_tag": tag, "rolling": tag == ROLLING_TAG}


def ready(root: Path) -> bool:
    state = describe(root)
    return state["token_set"] and state["rolling"]


def save(root: Path, body: object) -> dict:
    """保存地址与令牌；令牌留空表示不改，`clear_token` 才撤掉。"""
    if not isinstance(body, dict):
        raise ValueError("请填写 Watchtower 地址")
    url = body.get("url")
    if not isinstance(url, str) or not url.strip():
        raise ValueError("请填写 Watchtower 地址")
    url = url.strip().rstrip("/")
    try:
        parsed = urlsplit(url)
        valid = (parsed.scheme in {"http", "https"} and parsed.hostname and not parsed.username
                 and not parsed.query and not parsed.fragment and parsed.path == "")
    except ValueError:
        valid = False
    if not valid or any(char.isspace() for char in url):
        raise ValueError("Watchtower 地址写成 http://主机名:端口，不带路径")
    token = body.get("token") or ""
    if not isinstance(token, str) or any(char.isspace() for char in token.strip()):
        raise ValueError("令牌不能含空白字符")
    saved = values(root)
    token = "" if body.get("clear_token") is True else token.strip() or saved.get("token", "")
    path = CredentialStore(root).path_for(CREDENTIAL)
    atomic_write_text(path, json.dumps({"url": url, "token": token}), mode=0o600)
    return describe(root)


def trigger(root: Path, *, transport: httpx.BaseTransport | None = None) -> dict:
    """请 Watchtower 在后台拉镜像、重建 Peach 容器，收到 202 就返回。

    必须异步：同步请求时 Watchtower 会在响应回来之前把 Peach 容器停掉。地址在 compose
    网络里，不走 Peach 代理，也不跟随重定向，令牌只发给这一个地址。
    """
    saved = values(root)
    if not saved.get("token"):
        raise ValueError("请先保存 Watchtower 令牌")
    if not image_tag():
        raise ValueError("容器里没有镜像标签，compose.yaml 可能还是旧版；换成仓库当前的 compose.yaml 后重建容器")
    if image_tag() != ROLLING_TAG:
        raise ValueError("镜像标签不是 edge，Watchtower 换不到新版本；请按下方步骤在宿主机上更新")
    url = saved.get("url") or DEFAULT_URL
    try:
        with httpx.Client(trust_env=False, follow_redirects=False, timeout=15.0, transport=transport) as client:
            response = client.post(url + "/v1/update", params={"async": "true"},
                                   headers={"Authorization": f"Bearer {saved['token']}"})
    except httpx.HTTPError as error:
        raise OSError(f"连不上 Watchtower（{type(error).__name__}），请确认已用 watchtower profile 启动") from error
    if response.status_code == 202:
        return {"state": "updating", "message": "Watchtower 正在拉取新镜像并重建容器。"}
    if response.status_code == 401:
        raise ValueError("Watchtower 拒绝了令牌，请核对与宿主机 secrets/watchtower-token 一致")
    if response.status_code == 429:
        raise ValueError("Watchtower 正在执行另一次更新，请稍后再试")
    raise OSError(f"Watchtower 返回 HTTP {response.status_code}")
