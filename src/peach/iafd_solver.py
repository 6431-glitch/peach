"""Bounded IAFD requests through a configured FlareSolverr service."""
from __future__ import annotations

from urllib.parse import urlsplit

import httpx

from .http import public_https_url

IAFD_HOSTS = frozenset(('www.iafd.com', 'iafd.com'))
MAX_HTML_BYTES = 2 * 1024 * 1024


def _iafd_url(url):
    try:
        parsed = urlsplit(url)
        return (public_https_url(url) and parsed.hostname in IAFD_HOSTS
                and parsed.port in (None, 443) and not parsed.fragment)
    except (TypeError, ValueError):
        return False


def fetch(endpoint, url, *, client=None):
    """Fetch an IAFD page without silently treating solver errors as no results."""
    if not _iafd_url(url):
        raise ValueError('Only IAFD HTTPS addresses are supported.')
    if not endpoint:
        raise ValueError('Configure the IAFD FlareSolverr endpoint first.')
    own = client is None
    client = client or httpx.Client(trust_env=False, follow_redirects=False, timeout=75)
    try:
        response = client.post(endpoint, json={'cmd': 'request.get', 'url': url, 'maxTimeout': 60000})
        response.raise_for_status()
        payload = response.json()
        solution = payload.get('solution') or {}
        if payload.get('status') != 'ok' or solution.get('status') != 200:
            raise ValueError('IAFD is unavailable through FlareSolverr. Try again later.')
        if not _iafd_url(solution.get('url') or ''):
            raise ValueError('IAFD returned an unexpected destination.')
        html = solution.get('response')
        if not isinstance(html, str) or len(html.encode('utf-8')) > MAX_HTML_BYTES:
            raise ValueError('IAFD returned an invalid or oversized page.')
        return html
    except (httpx.HTTPError, TypeError, AttributeError) as exc:
        raise ValueError('Could not reach FlareSolverr or IAFD. Try again later.') from exc
    finally:
        if own:
            client.close()
