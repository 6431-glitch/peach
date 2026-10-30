"""Read-only Adult Film Database performer search and profile candidates."""
from __future__ import annotations

import re
import unicodedata
from datetime import date
from urllib.parse import urlencode, urljoin, urlsplit

from bs4 import BeautifulSoup

from .http import HttpRequest, public_https_url, response_text
from .user_agent import USER_AGENT

BASE = 'https://www.adultfilmdatabase.com'
HOSTS = frozenset(('www.adultfilmdatabase.com', 'adultfilmdatabase.com'))
ACTOR_PATH = re.compile(r'^/actor/[a-z0-9-]+-\d+/$', re.I)


def _name(value):
    return re.sub(r'[^\w]+', '', unicodedata.normalize('NFKC', str(value or '')).casefold())


def _checked(url):
    parts = urlsplit(url)
    return public_https_url(url) and parts.hostname in HOSTS and parts.port in (None, 443)


def search(http, name):
    name = str(name or '').strip()
    if not name or len(name) > 120 or any(ord(c) < 32 for c in name):
        raise ValueError('Enter a valid performer name.')
    request = HttpRequest('POST', BASE + '/lookup.cfm',
        {'User-Agent': USER_AGENT, 'Content-Type': 'application/x-www-form-urlencoded'},
        urlencode({'find': name, 'searchType': 'Actor', 'exact': '0'}).encode())
    response = http(request, 20, 2 * 1024 * 1024)
    if response.status != 200 or not _checked(response.url or request.url):
        raise ValueError(f'Adult Film Database search unavailable (HTTP {response.status}).')
    soup = BeautifulSoup(response_text(response), 'html.parser')
    candidates = {}
    for anchor in soup.select('a[href]'):
        url = urljoin(response.url or BASE, anchor.get('href', ''))
        label = anchor.get_text(' ', strip=True) or str(anchor.get('title') or '').strip()
        if _checked(url) and ACTOR_PATH.fullmatch(urlsplit(url).path) and label and _name(label) == _name(name):
            candidates[url] = {'name': label, 'profile_url': url}
    return list(candidates.values())


def profile(http, name, profile_url):
    if not _checked(profile_url) or not ACTOR_PATH.fullmatch(urlsplit(profile_url).path):
        raise ValueError('Invalid Adult Film Database profile URL.')
    response = http(HttpRequest('GET', profile_url, {'User-Agent': USER_AGENT}), 20, 2 * 1024 * 1024)
    if response.status != 200 or not _checked(response.url or profile_url):
        raise ValueError(f'Adult Film Database profile unavailable (HTTP {response.status}).')
    soup = BeautifulSoup(response_text(response), 'html.parser')
    heading = soup.select_one('h1')
    found = heading.get_text(' ', strip=True) if heading else ''
    if not found or _name(found) != _name(name):
        raise ValueError('Adult Film Database profile identity did not match; review required.')
    portrait = soup.select_one('img[alt^="Portrait of "][src]')
    image = urljoin(response.url or profile_url, portrait.get('src', '')) if portrait else ''
    if not _checked(image) or not urlsplit(image).path.lower().startswith('/graphics/pornstars/'):
        image = ''
    fields = {}
    for item in soup.select('#id05 li'):
        text = item.get_text(' ', strip=True)
        key, separator, value = text.partition(':')
        if separator:
            fields[key.strip()] = value.strip()
    details = {'raw': fields, 'tags': []}
    match = re.search(r'\b(\d{1,2})/(\d{1,2})/(\d{4})\b', fields.get('Date of Birth', ''))
    if match:
        try:
            details['birth_date'] = date(int(match[3]), int(match[1]), int(match[2])).isoformat()
        except ValueError:
            pass
    year = re.match(r'\d{4}', fields.get('Starting Year', ''))
    if year:
        details['debut_year'] = int(year[0])
    return {'matched_name': found, 'aliases': [], 'profile_url': response.url or profile_url,
            'profile': details, 'links': [], 'portrait_url': image}
