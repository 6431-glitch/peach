"""Adult Film Database results must match the requested performer."""
import unittest

from peach import adultfilmdatabase
from peach.http import HttpResponse


class AdultFilmDatabaseTests(unittest.TestCase):
    def test_search_reads_name_from_image_link_title(self):
        html = b'<a href="/actor/sample-person-123/" title="Sample Person"><img src="/x.jpg"></a>'
        result = adultfilmdatabase.search(lambda *_: HttpResponse(200, {}, html,
            'https://www.adultfilmdatabase.com/lookup.cfm'), 'Sample Person')
        self.assertEqual(result, [{'name': 'Sample Person',
                                  'profile_url': 'https://www.adultfilmdatabase.com/actor/sample-person-123/'}])

    def test_profile_rejects_different_identity(self):
        html = b'<h1>Someone Else</h1>'
        with self.assertRaisesRegex(ValueError, 'identity'):
            adultfilmdatabase.profile(lambda *_: HttpResponse(200, {}, html,
                'https://www.adultfilmdatabase.com/actor/sample-person-123/'),
                'Sample Person', 'https://www.adultfilmdatabase.com/actor/sample-person-123/')

    def test_profile_extracts_public_timeline_and_portrait(self):
        html = b'''<h1>Sample Person</h1><div id="id05"><li>Date of Birth: 2/14/2000</li>
        <li>Starting Year: 2020</li></div><img alt="Portrait of Sample Person" src="/Graphics/PornStars/sample.jpg">'''
        result = adultfilmdatabase.profile(lambda *_: HttpResponse(200, {}, html,
            'https://www.adultfilmdatabase.com/actor/sample-person-123/'),
            'Sample Person', 'https://www.adultfilmdatabase.com/actor/sample-person-123/')
        self.assertEqual(result['profile']['birth_date'], '2000-02-14')
        self.assertEqual(result['profile']['debut_year'], 2020)
        self.assertEqual(result['portrait_url'], 'https://www.adultfilmdatabase.com/Graphics/PornStars/sample.jpg')
