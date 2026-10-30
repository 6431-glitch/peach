"""Explicit Adult Empire performer profile discovery for review."""
from __future__ import annotations

import re
import unicodedata
from urllib.parse import urlencode, urljoin, urlsplit

from bs4 import BeautifulSoup

from .http import HttpRequest, public_https_url, response_text
from .user_agent import USER_AGENT

BASE = 'https://www.adultempire.com'
HOSTS = frozenset(('www.adultempire.com', 'adultempire.com'))
PROFILE = re.compile(r'^/(?:porn-videos/|dvd/|blu-ray/)?(\d+)/[^/]+-pornstars\.html$', re.I)


def _name(value):
    return re.sub(r'[^\w]+', '', unicodedata.normalize('NFKC', str(value or '')).casefold())


def _checked(url):
    parts = urlsplit(url)
    return public_https_url(url) and parts.hostname in HOSTS and parts.port in (None, 443)


def _get(http, url):
    response = http(HttpRequest('GET', url, {'User-Agent': USER_AGENT, 'Cookie': 'ageConfirmed=true'}), 20, 2 * 1024 * 1024)
    if response.status != 200 or not _checked(response.url or url):
        raise ValueError(f'Adult Empire is unavailable (HTTP {response.status}).')
    return BeautifulSoup(response_text(response), 'html.parser'), response.url or url


def search(http, name):
    name = str(name or '').strip()
    if not name or len(name) > 120 or any(ord(c) < 32 for c in name):
        raise ValueError('Enter a valid performer name.')
    soup, base = _get(http, BASE + '/performer/search?' + urlencode({'q': name}))
    matches = {}
    for anchor in soup.select('a[href]'):
        url = urljoin(base, anchor.get('href', ''))
        label = str(anchor.get('label') or anchor.get('title') or anchor.get_text(' ', strip=True)).strip()
        if _checked(url) and PROFILE.fullmatch(urlsplit(url).path) and _name(label) == _name(name):
            matches[urlsplit(url).path] = {'name': label, 'profile_url': url}
    return list(matches.values())


def profile(http, name, profile_url):
    if not _checked(profile_url) or not PROFILE.fullmatch(urlsplit(profile_url).path):
        raise ValueError('Invalid Adult Empire profile URL.')
    soup, final = _get(http, profile_url)
    if not PROFILE.fullmatch(urlsplit(final).path):
        raise ValueError('Adult Empire returned an unexpected profile page.')
    heading = soup.select_one('h1')
    found = heading.get_text(' ', strip=True) if heading else ''
    if not found or _name(found) != _name(name):
        raise ValueError('Adult Empire profile identity did not match; review required.')
    picture = soup.select_one('a[category="Performer"][label="Headshot"] img[src]')
    image = urljoin(final, picture.get('src', '')) if picture else ''
    parts = urlsplit(image)
    if not public_https_url(image) or parts.hostname != 'imgs4cdn.adultempire.com' or not parts.path.startswith('/performer/'):
        image = ''
    fields = {}
    allowed = {'Height', 'Weight', 'Measurements', 'Eyes', 'From', 'Born', 'Zodiac Sign', 'Hair'}
    for item in soup.select('ul.list-unstyled > li'):
        key, separator, value = item.get_text(' ', strip=True).partition(':')
        if separator and key.strip() in allowed and value.strip():
            fields[key.strip()] = value.strip()
    details = {'raw': fields, 'tags': []}
    for heading in soup.select('.modal-content h2'):
        if heading.get_text(' ', strip=True).casefold() == ('about ' + found).casefold():
            body = heading.find_parent(class_='modal-content').select_one('.modal-body')
            if body:
                for facts in body.select('.well'):
                    facts.decompose()
                biography = body.get_text(' ', strip=True)
                if biography:
                    fields['Biography'] = biography[:12000]
            break
    height = re.fullmatch(r'(\d+)\s*ft\.?\s*(\d+)\s*in\.?', fields.get('Height', ''), re.I)
    if height and int(height[2]) < 12:
        details['height_cm'] = round((int(height[1]) * 12 + int(height[2])) * 2.54)
    return {'matched_name': found, 'aliases': [], 'profile_url': final,
            'profile': details, 'links': [], 'portrait_url': image}
