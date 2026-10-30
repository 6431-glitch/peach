"""IAFD performer candidates via FlareSolverr.

Search and field selectors adapted from stashapp/CommunityScrapers IAFD.py.
"""
from __future__ import annotations

import json
import re
import unicodedata
from datetime import datetime
from urllib.parse import urlencode, urljoin, urlsplit

from bs4 import BeautifulSoup

from . import iafd_solver

BASE = 'https://www.iafd.com'


def _key(value):
    return re.sub(r'[^\w]+', '', unicodedata.normalize('NFKC', str(value or '')).casefold())


def endpoint(config):
    try:
        data = json.loads((config.directory('secrets') / 'iafd-solver.json').read_text(encoding='utf-8'))
        value = data.get('endpoint', '')
    except (OSError, ValueError, AttributeError):
        value = ''
    if not isinstance(value, str) or not value.startswith('http://'):
        raise ValueError('Configure the private IAFD solver endpoint before searching.')
    return value


def profile(config, name, aliases=(), *, fetch=None):
    fetch = fetch or iafd_solver.fetch
    solver = endpoint(config)
    url = BASE + '/results.asp?' + urlencode({'searchtype': 'comprehensive', 'searchstring': name})
    soup = BeautifulSoup(fetch(solver, url), 'html.parser')
    matches = {}
    known = {_key(value) for value in (name, *aliases)} - {''}
    for row in soup.select('#tblFem tr, #tblMal tr'):
        cells = row.find_all('td', recursive=False)
        if len(cells) < 2 or not cells[0].select_one('a img'):
            continue
        anchor = cells[1].select_one('a[href]')
        if not anchor:
            continue
        label = anchor.get_text(' ', strip=True)
        link = urljoin(BASE, anchor['href'])
        if _key(label) in known and iafd_solver._iafd_url(link) and urlsplit(link).path.lower().startswith('/person.rme/'):
            matches[link] = label
    if len(matches) != 1:
        raise ValueError('No unique IAFD performer found; verify the source manually.')
    link, matched = next(iter(matches.items()))
    page = BeautifulSoup(fetch(solver, link), 'html.parser')
    heading = page.select_one('h1')
    found = heading.get_text(' ', strip=True) if heading else ''
    if _key(found) not in known:
        raise ValueError('IAFD profile identity did not match; review required.')
    fields = {}
    for head in page.select('p.bioheading'):
        value = head.find_next_sibling('p', class_='biodata')
        if value:
            fields[head.get_text(' ', strip=True)] = value.get_text(' ', strip=True)
    data = {'raw': fields, 'tags': []}
    born = fields.get('Date of Birth', '')
    for pattern in ('%B %d, %Y', '%b %d, %Y'):
        try:
            data['birth_date'] = datetime.strptime(born, pattern).date().isoformat()
            break
        except ValueError:
            pass
    height = re.search(r'\b(\d{2,3})\s*cm\b', fields.get('Height', ''), re.I)
    if height:
        data['height_cm'] = int(height[1])
    image = page.select_one('#headshot img[src]')
    portrait = urljoin(link, image['src']) if image else ''
    if not iafd_solver._iafd_url(portrait):
        portrait = ''
    return {'matched_name': found, 'aliases': [], 'profile_url': link,
            'profile': data, 'links': [], 'portrait_url': portrait}
