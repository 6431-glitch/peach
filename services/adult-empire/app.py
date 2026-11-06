"""Stateless, on-demand Adult Empire metadata lookup."""
from __future__ import annotations

import re
import json
import os
import secrets
import threading
import time
from pathlib import Path
from datetime import datetime
from urllib.parse import parse_qsl, urlencode, urljoin, urlsplit, urlunsplit

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
DORCEL = 'https://www.dorcelvision.com'
DORCEL_PATH = re.compile(r'^/en/movies/[a-z0-9-]+/[a-z0-9-]+/?$', re.I)
_DORCEL_DISCOVER_LOCK = threading.Lock()
_dorcel_discover_cache = None
_dorcel_discover_until = 0.0


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
    query = urlencode([(key, val) for key, val in parse_qsl(parts.query, keep_blank_values=True)
                       if key.lower() not in {'w', 'h', 'width', 'height', 'fit'}])
    return urlunsplit((parts.scheme, parts.netloc, parts.path, query, ''))


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
                         'image': _image(str(image.get('src', ''))) if image else f'https://imgs4cdn.adultempire.com/performer/{match[1]}?v=bust'})
    img = soup.select_one('#front-cover img[src]')
    og_image = soup.select_one('meta[property="og:image"][content]')
    synopsis = soup.select_one('.synopsis-content')
    return {'id': path, 'title': title, 'date': release, 'studio': fields.get('studio', ''),
            'performers': cast, 'cover': _image(str(img.get('src', ''))) if img else _image(str(og_image.get('content', ''))) if og_image else '',
            'description': synopsis.get_text(' ', strip=True) if synopsis else '', 'url': BASE + path}


@app.get('/healthz')
def health():
    return {'ok': True}


def _dorcel_url(value: str) -> str:
    parts = urlsplit(urljoin(DORCEL, value))
    if (parts.scheme != 'https' or parts.hostname != 'www.dorcelvision.com'
            or parts.port not in (None, 443) or parts.username or parts.password
            or parts.query or parts.fragment or not DORCEL_PATH.fullmatch(parts.path)):
        return ''
    return DORCEL + parts.path


def _dorcel_get(path: str, params: dict | None = None) -> BeautifulSoup:
    try:
        with httpx.Client(timeout=20, follow_redirects=False, headers={
            'User-Agent': 'Mozilla/5.0', 'X-Requested-With': 'XMLHttpRequest',
        }) as client:
            with client.stream('GET', DORCEL + path, params=params) as response:
                if response.status_code != 200:
                    raise ValueError(f'DorcelVision returned HTTP {response.status_code}.')
                data = bytearray()
                for chunk in response.iter_bytes():
                    data.extend(chunk)
                    if len(data) > 5 * 1024 * 1024:
                        raise ValueError('DorcelVision response is too large.')
        return BeautifulSoup(bytes(data), 'html.parser')
    except httpx.HTTPError as exc:
        raise ValueError('DorcelVision could not be reached.') from exc


def parse_dorcel_search(soup: BeautifulSoup) -> dict:
    candidates, seen = [], set()
    for anchor in soup.select('a.movies[href]'):
        url = _dorcel_url(str(anchor.get('href', '')))
        title = str(anchor.get('aria-label') or '').strip()
        if url and title and url not in seen:
            seen.add(url)
            candidates.append({'id': urlsplit(url).path, 'title': title, 'url': url})
    return {'candidates': candidates, 'next_page': None}


def parse_dorcel_discover(soup: BeautifulSoup) -> dict:
    candidates, seen = [], set()
    for anchor in soup.select('a.movies[href]'):
        url = _dorcel_url(str(anchor.get('href', '')))
        title = str(anchor.get('aria-label') or '').strip()
        if '<' in title:
            title = BeautifulSoup(title, 'html.parser').get_text(' ', strip=True)
            if not title:
                title = urlsplit(url).path.rstrip('/').rsplit('/', 1)[-1].replace('-', ' ').title()
        if not url or not title or url in seen:
            continue
        seen.add(url)
        image = anchor.select_one('img[data-src], img[src]')
        image_url = urljoin(DORCEL, str(image.get('data-src') or image.get('src') or '')) if image else ''
        image_parts = urlsplit(image_url)
        if image_parts.scheme != 'https' or image_parts.hostname != 'www.dorcelvision.com':
            image_url = ''
        fallback = image_url
        if re.fullmatch(r'/images/cover8xs0400/\d+\.jpg', image_parts.path):
            image_url = DORCEL + image_parts.path.replace('/cover8xs0400/', '/coverxs1200/', 1)
        studio = urlsplit(url).path.strip('/').split('/')[2].replace('-', ' ').title()
        candidates.append({'id': urlsplit(url).path, 'title': title, 'url': url, 'image': image_url,
                           'image_fallback': fallback, 'studio': studio})
    return {'candidates': candidates}


def parse_dorcel_home(soup: BeautifulSoup) -> dict:
    sections = []
    seen = set()
    for block in soup.select('.margined-block'):
        heading = block.select_one('.slider-heading h1, .slider-heading h2, .slider-heading h3')
        title = heading.get_text(' ', strip=True) if heading else ''
        if not title or title.casefold() in seen:
            continue
        candidates = parse_dorcel_discover(block)['candidates']
        if candidates:
            seen.add(title.casefold())
            sections.append({'title': title, 'candidates': candidates[:24]})
    return {'sections': sections}


@app.get('/dorcelvision/discover', dependencies=[Depends(authorize)])
def dorcel_discover():
    global _dorcel_discover_cache, _dorcel_discover_until
    try:
        with _DORCEL_DISCOVER_LOCK:
            if _dorcel_discover_cache is not None and time.monotonic() < _dorcel_discover_until:
                return _dorcel_discover_cache
            result = parse_dorcel_home(_dorcel_get('/en/'))
            if not result['sections']:
                raise ValueError('DorcelVision returned no releases.')
            _dorcel_discover_cache = result
            _dorcel_discover_until = time.monotonic() + 86400
            return result
    except ValueError as exc:
        raise HTTPException(502, str(exc)) from exc


def parse_dorcel_detail(soup: BeautifulSoup, path: str) -> dict:
    for script in soup.select('script[type="application/ld+json"]'):
        try:
            data = json.loads(script.string or script.get_text())
        except (ValueError, TypeError):
            continue
        if not isinstance(data, dict) or data.get('@type') != 'Movie':
            continue
        title = data.get('name')
        if not isinstance(title, str) or not title.strip():
            break
        actors = data.get('actors') if isinstance(data.get('actors'), list) else []
        profiles = {}
        for anchor in soup.select('a[href]'):
            url = urlsplit(urljoin(DORCEL, str(anchor.get('href', ''))))
            if url.scheme == 'https' and url.hostname == 'www.dorcelvision.com' and re.fullmatch(r'/en/pornstars-(?:women|men)/[a-z0-9-]+/?', url.path, re.I):
                label = anchor.get_text(' ', strip=True)
                label = re.sub(r'\s+\d+\s+movies?$', '', label, flags=re.I).strip()
                if label:
                    profiles[label.casefold()] = url.path
        return {'id': path, 'title': title.strip(), 'date': str(data.get('datecreated') or ''),
                'studio': '', 'performers': [{'name': name, 'id': profiles.get(name.casefold(), '')} for name in actors if isinstance(name, str)],
                'cover': str(data.get('image') or ''), 'description': str(data.get('description') or ''),
                'url': DORCEL + path}
    raise ValueError('DorcelVision did not return movie metadata.')


@app.get('/dorcelvision/search', dependencies=[Depends(authorize)])
def dorcel_search(q: str = Query(min_length=2, max_length=200)):
    if len(q.strip()) < 2 or any(ord(c) < 32 for c in q):
        raise HTTPException(400, 'Invalid search.')
    try:
        return parse_dorcel_search(_dorcel_get('/en/search/contentsAjax', {'query': q.strip()}))
    except ValueError as exc:
        raise HTTPException(502, str(exc)) from exc


@app.get('/dorcelvision/detail', dependencies=[Depends(authorize)])
def dorcel_detail(path: str):
    if not _dorcel_url(path) or urlsplit(path).path != path:
        raise HTTPException(400, 'Invalid movie path.')
    try:
        return parse_dorcel_detail(_dorcel_get(path), path)
    except ValueError as exc:
        raise HTTPException(502, str(exc)) from exc


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
