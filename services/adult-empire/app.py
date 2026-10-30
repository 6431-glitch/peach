"""Stateless, on-demand Adult Empire metadata lookup."""
from __future__ import annotations

import re
import os
import secrets
from pathlib import Path
from datetime import datetime
from urllib.parse import urljoin, urlsplit

import httpx
from bs4 import BeautifulSoup
from fastapi import Depends, FastAPI, Header, HTTPException, Query

app = FastAPI(docs_url=None, redoc_url=None, openapi_url=None)
BASE = 'https://www.adultempire.com'
HOST = 'www.adultempire.com'
IMAGE_HOST = 'imgs4cdn.adultempire.com'
SEARCH = {'dvd': '/dvd/search', 'clips': '/clips/search', 'bluray': '/blu-ray/search', 'vod': '/vod/search'}
DETAIL_PATH = re.compile(r'^/(?:clip/)?\d+/[a-z0-9-]+(?:-porn-videos|-porn-movies|-streaming-scene|\.html)?\.html$', re.I)
PERFORMER_PATH = re.compile(r'^/(?:porn-videos/|dvd/|blu-ray/|clips/)?(\d+)/[^/]+-pornstars\.html$', re.I)
MAX_PAGE = 2 * 1024 * 1024


def authorize(authorization: str = Header(default='')):
    token_file = os.environ.get('PEACH_EMPIRE_TOKEN_FILE', '')
    try:
        token = Path(token_file).read_text(encoding='utf-8').strip() if token_file else os.environ.get('PEACH_EMPIRE_TOKEN', '')
    except OSError:
        token = ''
    if len(token) < 32 or not secrets.compare_digest(authorization, 'Bearer ' + token):
        raise HTTPException(401, 'Unauthorized.')


def _get(path: str, params: dict | None = None) -> BeautifulSoup:
    try:
        with httpx.Client(timeout=20, follow_redirects=False, headers={
            'User-Agent': 'Peach-Metadata/1.0', 'Cookie': 'ageConfirmed=true',
        }) as client:
            with client.stream('GET', BASE + path, params=params) as response:
                if response.status_code != 200:
                    raise ValueError(f'Adult Empire returned HTTP {response.status_code}.')
                data = bytearray()
                for chunk in response.iter_bytes():
                    data.extend(chunk)
                    if len(data) > MAX_PAGE:
                        raise ValueError('Adult Empire response is too large.')
        return BeautifulSoup(bytes(data), 'html.parser')
    except httpx.HTTPError as exc:
        raise ValueError('Adult Empire could not be reached.') from exc


def _detail_url(value: str) -> str:
    url = urljoin(BASE, value)
    parts = urlsplit(url)
    if parts.scheme != 'https' or parts.hostname != HOST or parts.port not in (None, 443) or parts.username or parts.password or not DETAIL_PATH.fullmatch(parts.path):
        return ''
    return BASE + parts.path


def _image(value: str) -> str:
    url = urljoin(BASE, value)
    parts = urlsplit(url)
    if parts.scheme != 'https' or parts.hostname != IMAGE_HOST or parts.port not in (None, 443) or parts.username or parts.password:
        return ''
    return url


def parse_search(soup: BeautifulSoup, category: str, page: int) -> dict:
    entries = []
    if category == 'clips':
        anchors = soup.select('a.text-display-primary[href^="/clip/"]')
    else:
        anchors = soup.select('.list-view-item a[label="Title"][href]')
    seen = set()
    for anchor in anchors:
        url = _detail_url(str(anchor.get('href', '')))
        title = anchor.get_text(' ', strip=True)
        if not url or not title or url in seen:
            continue
        seen.add(url)
        entries.append({'id': urlsplit(url).path, 'title': title, 'url': url})
    next_page = any(re.search(r'(?:\?|&)page=' + str(page + 1) + r'(?:&|$)', str(a.get('href', '')))
                    for a in soup.select('a[href]'))
    return {'candidates': entries, 'next_page': page + 1 if next_page else None}


def parse_detail(soup: BeautifulSoup, path: str) -> dict:
    h1 = soup.select_one('h1.clip-page__detail__title__primary, h1.movie-page__heading__title')
    if not h1:
        raise ValueError('Adult Empire did not return a movie detail page.')
    title = next((str(t).strip() for t in h1.find_all(string=True, recursive=False) if str(t).strip()), '')
    if not title:
        raise ValueError('Adult Empire did not provide a title.')
    fields = {}
    for li in soup.select('ul.list-unstyled.m-b-2 > li'):
        small = li.select_one('small')
        if small:
            label = small.get_text(' ', strip=True).rstrip(':').lower()
            fields[label] = li.get_text(' ', strip=True).removeprefix(small.get_text(' ', strip=True)).strip()
    if path.startswith('/clip/'):
        for li in soup.select('li'):
            strong = li.select_one('strong')
            if strong and strong.get_text(' ', strip=True).rstrip(':').lower() == 'released':
                fields['released'] = li.get_text(' ', strip=True).removeprefix(strong.get_text(' ', strip=True)).strip()
                break
        studio = soup.select_one('a[category="Clip Page"][label="Studio"][href*="/studio/"]')
        if studio:
            fields['studio'] = studio.get_text(' ', strip=True)
    release = ''
    for fmt in ('%b %d %Y', '%B %d %Y', '%m/%d/%Y'):
        try:
            release = datetime.strptime(fields.get('released', ''), fmt).date().isoformat()
            break
        except ValueError:
            pass
    cast = []
    seen = set()
    for anchor in soup.select('.movie-page__content-tags__performers a[label="Performer"][href], a[category="Clip Page"][label="Clip Performer"][href]'):
        url = urljoin(BASE, anchor.get('href', ''))
        parts = urlsplit(url)
        match = PERFORMER_PATH.fullmatch(parts.path)
        image = anchor.select_one('img[src]')
        name = str(image.get('title', '')).strip() if image else anchor.get_text(' ', strip=True)
        if parts.hostname == HOST and match and name and match[1] not in seen:
            seen.add(match[1])
            cast.append({'id': match[1], 'name': name, 'url': BASE + parts.path,
                         'image': _image(str(image.get('src', ''))) if image else f'https://imgs4cdn.adultempire.com/performer/{match[1]}?w=143&v=bust'})
    img = soup.select_one('#front-cover img[src]')
    og_image = soup.select_one('meta[property="og:image"][content]')
    synopsis = soup.select_one('.synopsis-content')
    return {'id': path, 'title': title, 'date': release, 'studio': fields.get('studio', ''),
            'performers': cast, 'cover': _image(str(img.get('src', ''))) if img else _image(str(og_image.get('content', ''))) if og_image else '',
            'description': synopsis.get_text(' ', strip=True) if synopsis else '', 'url': BASE + path}


@app.get('/healthz')
def health():
    return {'ok': True}


@app.get('/search', dependencies=[Depends(authorize)])
def search(q: str = Query(min_length=2, max_length=200), category: str = 'dvd', page: int = Query(default=1, ge=1, le=100)):
    if category not in SEARCH or len(q.strip()) < 2 or any(ord(c) < 32 for c in q):
        raise HTTPException(400, 'Invalid search.')
    try:
        return parse_search(_get(SEARCH[category], {'q': q.strip(), 'view': 'list', 'page': page}), category, page)
    except ValueError as exc:
        raise HTTPException(502, str(exc)) from exc


@app.get('/detail', dependencies=[Depends(authorize)])
def detail(path: str):
    url = _detail_url(path)
    if not url or urlsplit(url).path != path:
        raise HTTPException(400, 'Invalid movie path.')
    try:
        return parse_detail(_get(path), path)
    except ValueError as exc:
        raise HTTPException(502, str(exc)) from exc
