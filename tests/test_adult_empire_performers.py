"""Adult Empire profiles require a unique, verified performer identity."""
import unittest

from peach import adult_empire_performers as source
from peach.http import HttpResponse


class AdultEmpirePerformerTests(unittest.TestCase):
    def test_search_returns_only_exact_names_and_deduplicates(self):
        html = b'''<a href="/123/sample-person-pornstars.html" label="Sample Person"></a>
        <a href="/123/sample-person-pornstars.html" label="Sample Person"></a>
        <a href="/124/other-pornstars.html" label="Other Person"></a>
        <a href="https://invalid.test/123/sample-person-pornstars.html" label="Sample Person"></a>'''
        result = source.search(lambda *_: HttpResponse(200, {}, html, source.BASE + '/performer/search'), 'Sample Person')
        self.assertEqual(result, [{'name': 'Sample Person', 'profile_url': source.BASE + '/123/sample-person-pornstars.html'}])

    def test_profile_checks_identity_and_returns_only_trusted_portrait(self):
        url = source.BASE + '/123/sample-person-pornstars.html'
        html = b'''<h1>Sample Person</h1><a category="Performer" label="Headshot">
        <img src="https://imgs4cdn.adultempire.com/performer/123?w=143&amp;v=bust"></a>
        <ul class="list-unstyled"><li>Height: 5 ft. 2 in.</li><li>Born: March 4</li>
        <li>Measurements: 32GG - 28 - 38</li></ul>'''
        result = source.profile(lambda *_: HttpResponse(200, {}, html, url), 'Sample Person', url)
        self.assertEqual(result['matched_name'], 'Sample Person')
        self.assertEqual(result['portrait_url'], 'https://imgs4cdn.adultempire.com/performer/123?w=143&v=bust')
        self.assertEqual(result['profile']['height_cm'], 157)
        self.assertEqual(result['profile']['raw']['Measurements'], '32GG - 28 - 38')
        self.assertNotIn('birth_date', result['profile'])
        with self.assertRaisesRegex(ValueError, 'identity'):
            source.profile(lambda *_: HttpResponse(200, {}, html, url), 'Someone Else', url)

    def test_http_failure_is_not_an_empty_result(self):
        with self.assertRaisesRegex(ValueError, 'HTTP 403'):
            source.search(lambda *_: HttpResponse(403, {}, b'', source.BASE + '/performer/search'), 'Sample Person')

    def test_redirect_to_untrusted_host_is_rejected(self):
        with self.assertRaisesRegex(ValueError, 'unavailable'):
            source.search(lambda *_: HttpResponse(200, {}, b'', 'https://invalid.test/'), 'Sample Person')
