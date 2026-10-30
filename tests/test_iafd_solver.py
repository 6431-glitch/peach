"""IAFD solver accepts only the intended source and exposes failures."""
import unittest
from unittest.mock import Mock

from peach import iafd_solver


class IafdSolverTests(unittest.TestCase):
    def test_success_returns_html(self):
        client = Mock()
        client.post.return_value.json.return_value = {'status': 'ok', 'solution': {
            'status': 200, 'url': 'https://www.iafd.com/', 'response': '<html>OK</html>'}}
        self.assertEqual(iafd_solver.fetch('http://solver:8191/v1', 'https://www.iafd.com/', client=client), '<html>OK</html>')

    def test_non_iafd_address_rejected_before_request(self):
        client = Mock()
        with self.assertRaisesRegex(ValueError, 'Only IAFD'):
            iafd_solver.fetch('http://solver:8191/v1', 'https://example.com/', client=client)
        client.post.assert_not_called()

    def test_solver_error_is_not_an_empty_result(self):
        client = Mock()
        client.post.return_value.json.return_value = {'status': 'error'}
        with self.assertRaisesRegex(ValueError, 'unavailable'):
            iafd_solver.fetch('http://solver:8191/v1', 'https://www.iafd.com/', client=client)
