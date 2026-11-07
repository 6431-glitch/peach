"""README 的安装要求、双语入口与下载直链版本。"""
from pathlib import Path
import re
import tempfile
import unittest

from scripts.check_readme_impact import READMES, installation_contracts
from scripts.version_bump import DOWNLOAD_LINK, README_FILES, read_version

ROOT = Path(__file__).resolve().parents[1]


class ReadmeContractsTests(unittest.TestCase):
    def test_repository_readmes_satisfy_installation_contracts(self):
        self.assertEqual(installation_contracts(ROOT), [])

    def test_download_links_point_at_the_current_or_previous_release(self):
        """`--ship` 等制品齐了才换直链，所以定版后、换链前指向上一版是正常的；更旧就是漏换了。"""
        self.assertEqual(set(README_FILES), READMES)
        current = read_version(ROOT)
        released = re.findall(r'^## \[(\d+\.\d+\.\d+)\]', (ROOT / 'CHANGELOG.md').read_text(encoding='utf-8'),
                              re.M)
        allowed = set(released[released.index(current):][:2])
        for name in sorted(READMES):
            versions = {(tag, asset) for tag, asset, _ in
                        DOWNLOAD_LINK.findall((ROOT / name).read_text(encoding='utf-8'))}
            with self.subTest(readme=name):
                self.assertEqual(len(versions), 1, versions)
                (tag, asset), = versions
                self.assertEqual(tag, asset)
                self.assertIn(tag, allowed)

    def test_installation_check_accepts_equivalent_floor_notation_and_reports_missing_links(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory).resolve()
            (root / 'pyproject.toml').write_text('[project]\nrequires-python = ">=3.14"\n', encoding='utf-8')
            for suffix in ('+', ' or newer', ' 或更高'):
                for name in READMES:
                    counterpart, = READMES - {name}
                    (root / name).write_text(f'Python 3.14{suffix}\n[Language]({counterpart})\n', encoding='utf-8')
                self.assertEqual(installation_contracts(root), [])
            (root / 'README.md').write_text('Python 3.13+\n', encoding='utf-8')
            self.assertEqual(installation_contracts(root), ['README.md: Python 下限须为 3.14',
                                                           'README.md: 缺少语言入口 README.zh-CN.md'])
