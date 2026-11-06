"""The stateless lookup preserves the site's category and identity boundaries."""
import importlib.util
from pathlib import Path
import unittest
from unittest.mock import patch

from bs4 import BeautifulSoup
from fastapi.testclient import TestClient

spec = importlib.util.spec_from_file_location('adult_empire_service', Path(__file__).resolve().parents[1] / 'services/adult-empire/app.py')
service = importlib.util.module_from_spec(spec)
spec.loader.exec_module(service)


class AdultEmpireServiceTests(unittest.TestCase):
    def test_dorcel_discovery_prefers_larger_cover_with_thumbnail_fallback(self):
        soup = BeautifulSoup('''<a class="movies" aria-label="Example" href="/en/movies/studio/example">
        <img data-src="/images/cover8xs0400/1518950.jpg"></a>''', 'html.parser')
        item = service.parse_dorcel_discover(soup)['candidates'][0]
        self.assertEqual(item['image'], 'https://www.dorcelvision.com/images/coverxs1200/1518950.jpg')
        self.assertEqual(item['image_fallback'], 'https://www.dorcelvision.com/images/cover8xs0400/1518950.jpg')

    def test_dorcel_home_sections_are_deduplicated(self):
        html = '''<div class="margined-block"><div class="slider-heading"><h2>New</h2></div>
        <a class="movies" aria-label="Example" href="/en/movies/studio/example"><img data-src="/image.jpg"></a></div>
        <div class="margined-block"><div class="slider-heading"><h2>New</h2></div>
        <a class="movies" aria-label="Example" href="/en/movies/studio/example"></a></div>'''
        result = service.parse_dorcel_home(BeautifulSoup(html, 'html.parser'))
        self.assertEqual([section['title'] for section in result['sections']], ['New'])
        self.assertEqual(result['sections'][0]['candidates'][0]['image'], 'https://www.dorcelvision.com/image.jpg')

    def test_dorcel_discovery_cache_expires_after_one_day(self):
        soup = BeautifulSoup('''<div class="margined-block"><div class="slider-heading"><h2>New</h2></div>
        <a class="movies" aria-label="Example" href="/en/movies/studio/example"></a></div>''', 'html.parser')
        with patch.object(service, '_dorcel_discover_cache', None), patch.object(service, '_dorcel_discover_until', 0), \
             patch.object(service, '_dorcel_get', return_value=soup) as get, \
             patch.object(service.time, 'monotonic', side_effect=[0, 86399, 86401, 86401]):
            service.dorcel_discover()
            service.dorcel_discover()
            service.dorcel_discover()
            self.assertEqual(get.call_count, 2)

    def test_dorcel_search_deduplicates_and_restricts_movie_links(self):
        soup = BeautifulSoup('''<a class="movies" aria-label="Example" href="/en/movies/studio/example"></a>
        <a class="movies" aria-label="Example" href="/en/movies/studio/example"></a>
        <a class="movies" aria-label="Bad" href="https://evil.example/en/movies/studio/example"></a>''', 'html.parser')
        result = service.parse_dorcel_search(soup)
        self.assertEqual([item['title'] for item in result['candidates']], ['Example'])

    def test_dorcel_detail_reads_structured_movie_metadata(self):
        soup = BeautifulSoup('''<script type="application/ld+json">{"@type":"Movie","name":"Example",
        "datecreated":"2024","actors":["Person"],"description":"Description"}</script>
        <a href="/en/pornstars-women/person">Person 44 movies</a>''', 'html.parser')
        movie = service.parse_dorcel_detail(soup, '/en/movies/studio/example')
        self.assertEqual((movie['title'], movie['date'], movie['performers'][0]['name']), ('Example', '2024', 'Person'))
        self.assertEqual(movie['performers'][0]['id'], '/en/pornstars-women/person')

    def test_dorcel_routes_require_authentication_and_validate_path(self):
        with patch.dict('os.environ', {'PEACH_EMPIRE_TOKEN': 'x' * 32}, clear=True):
            client = TestClient(service.app)
            self.assertEqual(client.get('/dorcelvision/search?q=sample').status_code, 401)
            self.assertEqual(client.get('/dorcelvision/detail', params={'path': '/account'},
                headers={'Authorization': 'Bearer ' + 'x' * 32}).status_code, 400)

    def test_dvd_results_and_next_page(self):
        soup = BeautifulSoup('''<div class="list-view-item"><a label="Title" href="/123/example-porn-movies.html">Example</a></div>
            <a href="?q=example&amp;page=2">Next</a>''', 'html.parser')
        result = service.parse_search(soup, 'dvd', 1)
        self.assertEqual(result['candidates'][0]['title'], 'Example')
        self.assertEqual(result['next_page'], 2)

    def test_on_demand_search_uses_vod_endpoint(self):
        self.assertEqual(service.SEARCH['vod'], '/vod/search')
        soup = BeautifulSoup('<div class="list-view-item"><a label="Title" href="/123/example-porn-videos.html">Example</a></div>', 'html.parser')
        self.assertEqual(service.parse_search(soup, 'vod', 1)['candidates'][0]['title'], 'Example')

    def test_clip_results_use_clip_links(self):
        soup = BeautifulSoup('''<a class="text-display-primary" href="/clip/123/example-streaming-scene.html">Example</a>
          <a class="text-display-primary" href="https://elsewhere.test/clip/99/bad.html">Bad</a>''', 'html.parser')
        self.assertEqual([x['title'] for x in service.parse_search(soup, 'clips', 1)['candidates']], ['Example'])

    def test_movie_fields_and_cast_are_read_from_detail(self):
        soup = BeautifulSoup('''<h1 class="movie-page__heading__title">Example<span>Sale</span></h1>
        <ul class="list-unstyled m-b-2"><li><small>Released:</small> Feb 24 2021</li>
        <li><small>Studio:</small> Example Studio</li></ul>
        <a id="front-cover"><img src="https://imgs4cdn.adultempire.com/movie/1"></a>
        <div class="movie-page__content-tags__performers"><a label="Performer" href="/123/sample-pornstars.html">
        <img title="Sample" src="https://imgs4cdn.adultempire.com/performer/123"></a></div>''', 'html.parser')
        result = service.parse_detail(soup, '/123/example-porn-movies.html')
        self.assertEqual((result['title'], result['date'], result['studio']), ('Example', '2021-02-24', 'Example Studio'))
        self.assertEqual(result['performers'][0]['id'], '123')
        self.assertTrue(result['cover'].startswith('https://imgs4cdn.adultempire.com/'))

    def test_only_authorized_clients_may_search(self):
        with patch.dict('os.environ', {'PEACH_EMPIRE_TOKEN': 'x' * 32}, clear=True):
            client = TestClient(service.app)
            self.assertEqual(client.get('/search?q=sample').status_code, 401)
            with patch.object(service, '_get', return_value=BeautifulSoup('', 'html.parser')):
                self.assertEqual(client.get('/search?q=sample', headers={'Authorization': 'Bearer ' + 'x' * 32}).status_code, 200)

    def test_clip_performers_use_clip_specific_links(self):
        soup = BeautifulSoup('''<h1 class="clip-page__detail__title__primary">Example</h1>
        <a category="Clip Page" label="Clip Performer" href="/clips/123/sample-pornstars.html">Sample</a>''', 'html.parser')
        result = service.parse_detail(soup, '/clip/45/example-streaming-scene.html')
        self.assertEqual(result['performers'][0]['name'], 'Sample')
        self.assertEqual(result['performers'][0]['id'], '123')

    def test_invalid_detail_url_is_rejected(self):
        self.assertEqual(service._detail_url('https://elsewhere.test/123/a.html'), '')
        self.assertEqual(service._detail_url('/account/loginpage'), '')

    def test_images_preserve_variant_without_resizing(self):
        self.assertEqual(service._image('https://imgs4cdn.adultempire.com/movie/123?w=100&h=140&fit=cover'),
                         'https://imgs4cdn.adultempire.com/movie/123')
        self.assertEqual(service._image('https://imgs4cdn.adultempire.com/performer/123?w=143&v=bust'),
                         'https://imgs4cdn.adultempire.com/performer/123?v=bust')
