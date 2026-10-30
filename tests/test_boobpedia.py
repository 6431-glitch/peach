"""Boobpedia profiles must belong to the requested performer."""
import unittest

from peach import boobpedia
from peach.http import HttpResponse


class BoobpediaTests(unittest.TestCase):
    def response(self, name='Sample Person'):
        html = f'''<h1 id="firstHeading">{name}</h1><table class="infobox">
          <tr><td><b>Born</b></td><td>June 1, 1990 <span>(1990-06-01)</span></td></tr>
          <tr><td><b>Height</b></td><td>5 ft 7 in (1.70 m)</td></tr>
          <tr><td><a class="mw-file-description"><img src="/wiki/images/a/a1/sample.jpg"></a></td></tr>
          </table>'''
        return HttpResponse(200, {}, html.encode(), 'https://www.boobpedia.com/boobs/Sample_Person')

    def test_profile_extracts_fields_and_same_site_portrait(self):
        result = boobpedia.profile(lambda *_: self.response(), 'Sample Person')
        self.assertEqual(result['profile']['birth_date'], '1990-06-01')
        self.assertEqual(result['profile']['height_cm'], 170)
        self.assertEqual(result['portrait_url'], 'https://www.boobpedia.com/wiki/images/a/a1/sample.jpg')

    def test_unrelated_person_is_rejected(self):
        with self.assertRaisesRegex(ValueError, 'identity'):
            boobpedia.profile(lambda *_: self.response('Someone Else'), 'Sample Person')
