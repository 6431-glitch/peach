"""全量扫描和推送发现共用的系统目录判据。"""
from pathlib import PureWindowsPath


def system_directory(name: str) -> bool:
    return name.startswith('@') or name.casefold() == '#recycle'


def system_path(path: str) -> bool:
    parts = PureWindowsPath(path).parts
    return any(system_directory(part) for part in parts[:-1]) or (
        bool(parts) and parts[-1].casefold().endswith('@synoeastream'))
