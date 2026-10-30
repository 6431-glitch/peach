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
    def test_dvd_results_and_next_page(self):
        soup = BeautifulSoup('''<div class="list-view-item"><a label="Title" href="/123/example-porn-movies.html">Example</a></div>
            <a href="?q=example&amp;page=2">Next</a>''', 'html.parser')
        result = service.parse_search(soup, 'dvd', 1)
        self.assertEqual(result['candidates'][0]['title'], 'Example')
        self.assertEqual(result['next_page'], 2)

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
