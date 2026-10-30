"""Boobpedia performer profile candidates; reading does not change the ledger."""
from __future__ import annotations

import re
import unicodedata
from urllib.parse import quote, urljoin, urlsplit

from bs4 import BeautifulSoup

from .http import HttpRequest, public_https_url, response_text
from .user_agent import USER_AGENT

BASE = 'https://www.boobpedia.com'
HOSTS = frozenset(('www.boobpedia.com', 'boobpedia.com'))


def _identity(value):
    return re.sub(r'[^\w]+', '', unicodedata.normalize('NFKC', str(value or '')).casefold())


def profile(http, name, aliases=()):
    """Read one explicit-name page; reject missing, redirected and unrelated identities."""
    name = str(name or '').strip()
    if not name or len(name) > 120 or any(ord(c) < 32 for c in name):
        raise ValueError('Enter a valid performer name.')
    url = BASE + '/boobs/' + quote(name.replace(' ', '_'), safe='')
    response = http(HttpRequest('GET', url, {'User-Agent': USER_AGENT}), 20, 2 * 1024 * 1024)
    final = response.url or url
    parsed = urlsplit(final)
    if (response.status != 200 or not public_https_url(final) or parsed.hostname not in HOSTS
            or not parsed.path.startswith('/boobs/')):
        raise ValueError(f'Boobpedia profile unavailable (HTTP {response.status}).')
    soup = BeautifulSoup(response_text(response), 'html.parser')
    heading, table = soup.select_one('#firstHeading'), soup.select_one('table.infobox')
    found = heading.get_text(' ', strip=True) if heading else ''
    known = {_identity(value) for value in (name, *aliases)} - {''}
    if not table or _identity(found) not in known:
        raise ValueError('Boobpedia profile identity did not match; review required.')
    fields = {}
    for row in table.select('tr'):
        cells = row.find_all('td', recursive=False)
        if len(cells) == 2:
            label = cells[0].get_text(' ', strip=True)
            if label:
                fields[label] = cells[1].get_text(' ', strip=True)
    result = {'raw': fields, 'tags': []}
    born = re.search(r'\b(\d{4}-\d{2}-\d{2})\b', fields.get('Born', ''))
    if born:
        result['birth_date'] = born.group(1)
    height = re.search(r'\b(\d(?:\.\d+)?)\s*m\b', fields.get('Height', ''), re.I)
    if height:
        result['height_cm'] = round(float(height.group(1)) * 100)
    photo = table.select_one('a.mw-file-description img[src]')
    image = urljoin(final, photo.get('src', '')) if photo else ''
    image_url = urlsplit(image)
    if not (public_https_url(image) and image_url.hostname in HOSTS and image_url.path.startswith('/wiki/images/')):
        image = ''
    return {'matched_name': found, 'aliases': [], 'profile_url': final,
            'profile': result, 'links': [], 'portrait_url': image}
