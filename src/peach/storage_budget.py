"""按真实磁盘余量和本机容量设置保护媒体任务。

磁盘余量每次实时查；数据与缓存总量要逐文件统计，只在后台线程里做，请求读最近一次读数。
超限时按修改时间从旧到新清理可重建的播放缓存与缩略图，清完仍超限才暂停写入。
"""
from __future__ import annotations

from dataclasses import asdict, dataclass
from functools import lru_cache
import json
import logging
import os
from pathlib import Path
import shutil
import stat
import tempfile
import threading
import time

from filelock import FileLock

from .fsutil import atomic_write_text
from .jobs import DiskSpaceDenied
from .platform import system_volume

GIB = 1024 ** 3
POLICY_NAME = 'storage-policy.json'
STATUS_NAME = 'storage-budget-status.json'
READINGS_NAME = 'storage-budget-readings.json'
SCAN_SECONDS = 30
#: 后台统计间隔按变化速度分开：缓存约一万个文件、几秒一遍，几分钟统计一次；
#: 整个数据目录可达几十万个文件、一遍要几分钟，而它按天增长，每天统计一次。
REFRESH_SECONDS = {'cache': 300, 'data': 86400}
_LOCK = threading.RLock()
_SCANS: dict[tuple, tuple[float, dict]] = {}
#: 后台统计的最近读数（墙钟时间, 读数）、本进程开始统计的时间与失败，按 `_reading_key` 分开。
_READINGS: dict[str, tuple[float, dict]] = {}
_STARTED: dict[str, float] = {}
_FAILURES: dict[str, Exception] = {}
_REFRESH_GUARD = threading.Lock()
_GENERATION = [0]
_UNKNOWN = {'cache_bytes': None, 'data_bytes': None, 'external_cache_bytes': None}
_FIELDS = {'cache': ('cache_bytes', 'external_cache_bytes'), 'data': ('data_bytes',)}


@dataclass(frozen=True)
class StoragePolicy:
    enabled: bool = True
    minimum_free_gib: int = 0
    data_max_gib: int = 0
    cache_max_gib: int = 0
    auto_clean: bool = True
    external_cache_path: str = ''
    external_cache_max_gib: int = 0


def validate(raw: object, *, check_path=True) -> StoragePolicy:
    if not isinstance(raw, dict) or set(raw) - set(asdict(StoragePolicy())):
        raise ValueError('容量设置包含不支持的字段')
    values = {**asdict(StoragePolicy()), **raw}
    for key in ('minimum_free_gib', 'data_max_gib', 'cache_max_gib', 'external_cache_max_gib'):
        value = values[key]
        minimum = 0
        if type(value) is not int or not minimum <= value <= 1_048_576:
            raise ValueError(f'{key} 必须是 {minimum} 到 1048576 之间的整数 GiB')
    for key in ('enabled', 'auto_clean'):
        if type(values[key]) is not bool:
            raise ValueError(f'{key} 必须是开关值')
    raw_path = values['external_cache_path']
    if not isinstance(raw_path, str):
        raise ValueError('外部缓存目录必须是路径')
    if raw_path:
        path = Path(raw_path)
        if check_path and values['enabled'] and (not path.is_absolute() or not path.is_dir()):
            raise ValueError('外部缓存目录必须是本机可读取的绝对目录')
        if check_path and path.is_absolute():
            values['external_cache_path'] = str(path.absolute())
    return StoragePolicy(**values)


def load_policy(config) -> StoragePolicy:
    try:
        raw = json.loads((config.directory('state') / POLICY_NAME).read_text(encoding='utf-8'))
    except FileNotFoundError:
        return StoragePolicy()
    except (OSError, ValueError) as error:
        raise ValueError(f'容量设置未取得：{error}') from error
    return validate(raw, check_path=False)


def save_policy(config, raw) -> StoragePolicy:
    policy = validate(raw)
    if policy.external_cache_path:
        external = Path(policy.external_cache_path).resolve()
        from .settings_file import DIRECTORY_KEYS
        for managed in (config.data_root, *(config.directory(name) for name in DIRECTORY_KEYS)):
            managed = managed.resolve()
            if external.is_relative_to(managed) or managed.is_relative_to(external):
                raise ValueError('外部缓存目录必须独立于 Peach 数据及各配置目录')
    path = config.directory('state') / POLICY_NAME
    path.parent.mkdir(parents=True, exist_ok=True)
    with FileLock(str(path) + '.lock'):
        atomic_write_text(path, json.dumps(asdict(policy), ensure_ascii=False))
    # 读数按统计范围分键，只改上限数值时旧读数照样能用，不必重新统计整个数据目录。
    return policy


def invalidate_measurements(config=None):
    """手动清理、迁移后旧读数作废；传入配置时连同保存在状态目录里的读数一起删。"""
    with _REFRESH_GUARD:
        _GENERATION[0] += 1
        _SCANS.clear()
        _READINGS.clear()
        _STARTED.clear()
        _FAILURES.clear()
    if config is not None:
        try:
            (config.directory('state') / READINGS_NAME).unlink(missing_ok=True)
        except OSError as error:
            logging.getLogger(__name__).warning('容量读数未清除（%s）', type(error).__name__)


def _parts(policy) -> tuple[str, ...]:
    """设了哪类上限才统计哪类：缓存与外部缓存同一轮，数据目录单独一轮。"""
    parts = []
    if policy.cache_max_gib or policy.external_cache_max_gib:
        parts.append('cache')
    if policy.data_max_gib:
        parts.append('data')
    return tuple(parts)


def _reading_key(config, policy, part) -> str:
    """统计范围的身份：目录布局、类别，以及缓存一类实际统计了哪些目录；与上限数值无关。"""
    scope = ([bool(policy.cache_max_gib), policy.external_cache_path if policy.external_cache_max_gib else '']
             if part == 'cache' else [])
    return json.dumps([part, layout(config, policy), scope], sort_keys=True)


def _load_saved(config) -> dict:
    try:
        saved = json.loads((config.directory('state') / READINGS_NAME).read_text(encoding='utf-8'))
    except (OSError, ValueError):
        return {}
    return saved if isinstance(saved, dict) else {}


def _publish(config, key, measured_at, usage):
    """读数存进状态目录：重启后与其他进程（托盘任务、命令行）直接复用，不重新统计。"""
    _READINGS[key] = (measured_at, usage)
    path = config.directory('state') / READINGS_NAME
    try:
        path.parent.mkdir(parents=True, exist_ok=True)
        with FileLock(str(path) + '.lock', timeout=5):
            saved = _load_saved(config)
            saved[key] = {'measured_at': measured_at, 'usage': usage}
            atomic_write_text(path, json.dumps(saved, ensure_ascii=False))
    except (OSError, TimeoutError) as error:
        logging.getLogger(__name__).warning('容量读数未保存（%s）', type(error).__name__)


def refresh_usage(config, policy=None, parts=None) -> dict:
    """同步统计并发布读数；后台线程、手动统计与需要即时读数的调用方共用。"""
    policy = policy or load_policy(config)
    result = {}
    for part in (parts or _parts(policy)):
        key = _reading_key(config, policy, part)
        generation = _GENERATION[0]
        try:
            usage = _measure_part(config, policy, part)
        except (OSError, ValueError) as error:
            with _REFRESH_GUARD:
                if generation == _GENERATION[0]:
                    _FAILURES[key] = error
            raise
        with _REFRESH_GUARD:
            # 统计期间手动清理或迁移过，这份读数已过时，不发布。
            if generation != _GENERATION[0]:
                continue
            _FAILURES.pop(key, None)
            _publish(config, key, time.time(), usage)
        result.update(usage)
    return result


def _refresh_in_background(config, policy, part):
    def run():
        lock = FileLock(str(config.directory('state') / f'storage-measure-{part}.lock'))
        try:
            config.directory('state').mkdir(parents=True, exist_ok=True)
            # 同一数据目录只让一个进程统计；别的进程正在统计就跳过，等它发布读数。
            lock.acquire(timeout=0)
        except (OSError, TimeoutError):
            return
        try:
            refresh_usage(config, policy, (part,))
        except DiskSpaceDenied:
            # 统计途中余量触线，请求侧的实时余量检查会拦下写入。
            pass
        except (OSError, ValueError) as error:
            logging.getLogger(__name__).warning('容量统计未取得（%s）', type(error).__name__)
        finally:
            lock.release()
    threading.Thread(target=run, name=f'PeachCapacityMeasure-{part}', daemon=True).start()


def latest_usage(config, policy) -> dict:
    """请求只读最近一次总量读数，不展开目录。

    读数先找本进程，再找状态目录里别的进程或上次运行留下的；没有或已到该类的统计间隔就交后台
    重算，同一类同时只跑一份。还没有读数时按未知处理，这段时间只由实时磁盘余量把关；最近一次
    统计失败则如实报出，不把未知当成零。
    """
    usage = {**_UNKNOWN, 'measured_at': None}
    now = time.time()
    saved = None
    for part in _parts(policy):
        key = _reading_key(config, policy, part)
        with _REFRESH_GUARD:
            reading, failure = _READINGS.get(key), _FAILURES.get(key)
        if reading is None or now - reading[0] >= REFRESH_SECONDS[part]:
            saved = _load_saved(config) if saved is None else saved
            stored = saved.get(key)
            if isinstance(stored, dict) and (reading is None or stored.get('measured_at', 0) > reading[0]):
                reading = (float(stored['measured_at']), dict(stored['usage']))
                with _REFRESH_GUARD:
                    _READINGS[key] = reading
        stale = reading is None or now - reading[0] >= REFRESH_SECONDS[part]
        with _REFRESH_GUARD:
            started = _STARTED.get(key)
            due = stale and (started is None or now - started >= REFRESH_SECONDS[part])
            if due:
                _STARTED[key] = now
        if due:
            _refresh_in_background(config, policy, part)
        if failure is not None:
            raise OSError(f'容量统计未取得：{failure}') from failure
        if reading is not None:
            usage.update({name: reading[1].get(name) for name in _FIELDS[part]})
            usage['measured_at'] = min(filter(None, (usage['measured_at'], reading[0])))
    return usage


def _remember_cleanup(config, policy, freed):
    """自动清理后从最近读数里扣掉释放量，下一次统计前不重复清理同一缺口；缓存也算在数据目录里。"""
    for part, name in (('cache', 'cache_bytes'), ('data', 'data_bytes')):
        key = _reading_key(config, policy, part)
        with _REFRESH_GUARD:
            reading = _READINGS.get(key)
            if reading is None or reading[1].get(name) is None:
                continue
            _publish(config, key, reading[0], {**reading[1], name: max(0, reading[1][name] - freed)})


def snapshot(config, *, usage=None) -> dict:
    try:
        loaded = load_policy(config)
        policy = asdict(loaded)
    except ValueError as error:
        return {'policy': None, 'last_check': None, 'error': str(error)}
    try:
        status = json.loads((config.directory('state') / STATUS_NAME).read_text(encoding='utf-8'))
    except FileNotFoundError:
        status = None
    except (OSError, ValueError) as error:
        return {'policy': policy, 'last_check': None, 'error': f'容量检查记录未取得：{error}'}
    try:
        if status is not None and status.get('layout') != layout(config, loaded):
            status = None
    except OSError as error:
        return {'policy': policy, 'last_check': None, 'error': f'容量目录未取得：{error}'}
    from .capacity_history import project
    history = project(config)
    return {'policy': policy, 'last_check': status, 'recommendation_state': 'population_model_not_available',
            'history': history, 'error': ''}


def _history_due(config):
    from .capacity_history import sample_due
    try:
        return sample_due(config)
    except (OSError, ValueError) as error:
        logging.getLogger(__name__).warning('容量历史未取得（%s）', type(error).__name__)
        return False


def record_history(config, *, data_bytes, cache_bytes, cleaned_bytes=0):
    """研究记录失败独立于容量闸门；不因记录失败取消磁盘保护。"""
    from .capacity_history import record_sample
    try:
        record_sample(config, data_bytes, cache_bytes, cleaned_bytes)
    except (OSError, ValueError) as error:
        logging.getLogger(__name__).warning('容量历史未取得（%s）', type(error).__name__)


@lru_cache(maxsize=1)
def _compressed_file_size():
    import ctypes
    from ctypes import wintypes
    function = ctypes.WinDLL('kernel32', use_last_error=True).GetCompressedFileSizeW
    function.argtypes = (wintypes.LPCWSTR, ctypes.POINTER(wintypes.DWORD))
    function.restype = wintypes.DWORD
    return function


def allocated_bytes(path: Path, info: os.stat_result) -> int:
    """稀疏缓存按实际占盘计量，不把文件逻辑长度当作分配量。"""
    if os.name != 'nt':
        return info.st_blocks * 512
    import ctypes
    from ctypes import wintypes
    function = _compressed_file_size()
    high = wintypes.DWORD()
    ctypes.set_last_error(0)
    low = function(str(path), ctypes.byref(high))
    error = ctypes.get_last_error()
    if low == 0xFFFFFFFF and error:
        raise ctypes.WinError(error)
    return (high.value << 32) | low


def _files(root: Path):
    """不跟随文件或目录链接；消失的临时文件跳过，其他读取失败交由守卫暂停。"""
    if root.is_symlink() or root.is_junction():
        return
    stack = [root]
    while stack:
        folder = stack.pop()
        try:
            with os.scandir(folder) as entries:
                for entry in entries:
                    try:
                        if entry.is_symlink() or Path(entry.path).is_junction():
                            continue
                        if entry.is_dir(follow_symlinks=False):
                            stack.append(Path(entry.path))
                        else:
                            info = file_stat(entry)
                            if stat.S_ISREG(info.st_mode):
                                yield Path(entry.path), info
                    except FileNotFoundError:
                        continue
        except FileNotFoundError:
            continue


def _roots(paths):
    selected = []
    for path in sorted({Path(value).resolve() for value in paths}, key=lambda value: len(value.parts)):
        if not any(path.is_relative_to(parent) for parent in selected):
            selected.append(path)
    return selected


def cache_roots(config):
    from .previews import cover_thumb_root, entity_thumb_root
    generated = config.directory('generated')
    return _roots((generated / 'transcodes', generated / 'stream-segments', generated / 'remote-media',
                   cover_thumb_root(generated / 'covers'), entity_thumb_root(generated / 'avatars')))


def data_roots(config):
    from .settings_file import DIRECTORY_KEYS
    return _roots((config.data_root, *(config.directory(name) for name in DIRECTORY_KEYS)))


def layout(config, policy=None):
    """统计绑定当前配置与挂载身份，迁移或重挂载后不复用旧读数。"""
    from .settings_file import DIRECTORY_KEYS
    paths = {'data': config.data_root, **{name: config.directory(name) for name in DIRECTORY_KEYS},
             'temporary': Path(tempfile.gettempdir())}
    if policy is not None and policy.external_cache_path:
        paths['external'] = Path(policy.external_cache_path)
    result = {'version': 1, 'paths': {}}
    for name, raw in paths.items():
        path = Path(raw).resolve()
        existing = _existing(path)
        info = existing.stat()
        result['paths'][name] = [str(path), str(existing), info.st_dev, info.st_ino]
    return result


def count_file(info, seen):
    """同一硬链接文件只计一次；文件系统未提供身份时不伪造分配量。"""
    if info.st_nlink <= 1:
        return True
    if not info.st_ino:
        raise OSError('文件系统未提供硬链接身份，分配量未取得')
    key = info.st_dev, info.st_ino
    if key in seen:
        return False
    seen.add(key)
    return True


def file_stat(entry):
    """Windows DirEntry 的设备、文件号与链接数均为空，按路径读取完整身份。"""
    return os.stat(entry.path, follow_symlinks=False) if os.name == 'nt' else entry.stat(follow_symlinks=False)


def cache_usage(config, policy=None, *, managed=True, external=True, check=lambda: None):
    policy = policy or load_policy(config)
    binding = layout(config, policy)
    key = ('cache', json.dumps(binding, sort_keys=True), managed, external)
    cached = _SCANS.get(key)
    if cached and time.monotonic() - cached[0] < SCAN_SECONDS:
        return dict(cached[1])
    result = {'managed_cache_bytes': None, 'external_cache_bytes': None}
    if managed:
        result['managed_cache_bytes'] = _allocated(cache_roots(config), check)
    if external and policy.external_cache_path:
        root = Path(policy.external_cache_path)
        if not root.is_absolute():
            raise OSError('外部缓存路径不适用于当前系统，请更新路径')
        root = root.resolve()
        if not root.is_dir():
            raise OSError('外部缓存目录不可访问')
        result['external_cache_bytes'] = _allocated((root,), check)
    if layout(config, policy) != binding:
        raise OSError('缓存目录在统计期间发生变化，请重新统计')
    _SCANS[key] = (time.monotonic(), result)
    return dict(result)


def data_usage(config, *, check=lambda: None):
    binding = layout(config)
    amount = _allocated(data_roots(config), check)
    if layout(config) != binding:
        raise OSError('数据目录在统计期间发生变化，请重新统计')
    return amount


def _allocated(roots, check):
    total = 0
    seen = set()
    for root in roots:
        for path, info in _files(root):
            check()
            if count_file(info, seen):
                total += allocated_bytes(path, info)
    return total


def _free_space_check(config, policy, interval_secs=2):
    """长遍历按间隔复查余量，触线就中断，不在磁盘快满时继续读分配量。"""
    next_check = 0.0
    def check_free():
        nonlocal next_check
        now = time.monotonic()
        if now < next_check:
            return
        next_check = now + interval_secs
        reasons = _exceeded(policy, dict(_UNKNOWN), _disks(config, policy))
        if reasons:
            raise DiskSpaceDenied('扫描期间磁盘余量触线，已暂停当前写入，请清理或重试：' + '；'.join(reasons))
    return check_free


def _measure_part(config, policy, part) -> dict:
    """后台分类统计：数据目录一类，缓存与外部缓存一类；统计期间目录变化则不发布。"""
    binding = layout(config, policy)
    check_free = _free_space_check(config, policy)
    if part == 'data':
        usage = {'data_bytes': data_usage(config, check=check_free)}
    else:
        cache = cache_usage(config, policy, managed=bool(policy.cache_max_gib),
                            external=bool(policy.external_cache_max_gib), check=check_free)
        usage = {'cache_bytes': cache['managed_cache_bytes'], 'external_cache_bytes': cache['external_cache_bytes']}
    if layout(config, policy) != binding:
        raise OSError('容量目录在统计期间发生变化，请重新统计')
    record_history(config, data_bytes=usage.get('data_bytes'), cache_bytes=usage.get('cache_bytes'))
    return usage


def _measure(config, policy, *, interval_secs=2):
    """预估写入量时的即时统计，按设了上限的类别一次统计完。"""
    binding = layout(config, policy)
    key = (json.dumps(binding, sort_keys=True), policy)
    now = time.monotonic()
    cached = _SCANS.get(key)
    if cached and now - cached[0] < SCAN_SECONDS:
        return dict(cached[1])
    check_free = _free_space_check(config, policy, interval_secs)
    cache = cache_usage(config, policy, managed=bool(policy.cache_max_gib),
                        external=bool(policy.external_cache_max_gib), check=check_free)
    result = {'cache_bytes': cache['managed_cache_bytes'], 'data_bytes': None,
              'external_cache_bytes': cache['external_cache_bytes']}
    if policy.data_max_gib:
        result['data_bytes'] = data_usage(config, check=check_free)
    if layout(config, policy) != binding:
        raise OSError('容量目录在统计期间发生变化，请重新统计')
    result['measured_at'] = time.time()
    record_history(config, data_bytes=result['data_bytes'], cache_bytes=result['cache_bytes'])
    _SCANS[key] = (time.monotonic(), result)
    return dict(result)


def reserve_bytes(policy, total):
    if not policy.enabled:
        return 0
    return policy.minimum_free_gib * GIB if policy.minimum_free_gib else max(GIB, min(40 * GIB, total // 20))


def _exceeded(policy, usage, disks):
    reasons = [f'{path} 可用空间 {free / GIB:.2f} GiB，低于保留值 {reserve_bytes(policy, total) / GIB:.2f} GiB'
               for path, free, total in disks if free < reserve_bytes(policy, total)]
    for name, key, limit in (('Peach 数据', 'data_bytes', policy.data_max_gib),
                             ('Peach 缓存', 'cache_bytes', policy.cache_max_gib),
                             ('外部缓存', 'external_cache_bytes', policy.external_cache_max_gib)):
        amount = usage[key]
        if limit and amount is not None and amount >= limit * GIB:
            reasons.append(f'{name} {amount / GIB:.2f} GiB，达到上限 {limit} GiB')
    return reasons


def _disks(config, policy, *, strict=True):
    """各写入目录所在卷的余量；`strict=False` 时跳过不可访问的外部缓存目录，其余照查。"""
    from .settings_file import DIRECTORY_KEYS
    paths = [system_volume(), config.data_root, *(config.directory(name) for name in DIRECTORY_KEYS),
             Path(tempfile.gettempdir())]
    if policy.external_cache_path:
        external = Path(policy.external_cache_path)
        if external.is_absolute() and external.is_dir():
            paths.append(external)
        elif strict:
            raise OSError('外部缓存目录不可访问，迁移后请更新容量设置中的路径')
    devices, result = set(), []
    for path in dict.fromkeys(paths):
        target = _existing(path)
        device = target.stat().st_dev
        if device not in devices:
            disk = shutil.disk_usage(target)
            result.append((str(path), disk.free, disk.total))
            devices.add(device)
    return result


def _existing(path):
    target = Path(path)
    while not target.exists() and target != target.parent:
        target = target.parent
    return target


def _rebuildable(config):
    """可自动清理的已完成产物：转码副本、HLS 分段、本机原图可重算的缩略图。

    转码与分段写入时用 `.tmp.` 临时名，完成后才改名，临时文件不在清理之列。
    预览图、下载的封面与资料重建代价高或取不回来，不自动清理。
    """
    from . import artifact_rules
    from .data_storage import _TRANSCODE
    from .previews import cover_thumb_root, entity_thumb_root
    generated = config.directory('generated')
    for path, info in _files(generated / 'transcodes'):
        if _TRANSCODE.match(path.name) and not path.name.endswith('.tmp.mp4'):
            yield path, info, False
    for path, info in _files(generated / 'stream-segments'):
        if path.suffix == '.ts' and not path.name.endswith('.tmp.ts'):
            yield path, info, False
    for root in (cover_thumb_root(generated / 'covers'), entity_thumb_root(generated / 'avatars')):
        for path, info in _files(root):
            if path.suffix.lower() == '.webp' and artifact_rules.current(path, source_required=True):
                yield path, info, True


def _clean_rebuildable(config, needed):
    """按修改时间从旧到新删可重建产物，凑够 `needed` 字节为止；删不掉的（正在播放）跳过。"""
    from .previews import _generate_lock
    freed = 0
    for _, path, thumbnail in sorted((info.st_mtime, path, thumbnail)
                                     for path, info, thumbnail in _rebuildable(config)):
        if freed >= needed:
            break
        lock = _generate_lock(path) if thumbnail else None
        if lock is not None and not lock.acquire(blocking=False):
            continue
        try:
            current = path.stat(follow_symlinks=False)
            amount = allocated_bytes(path, current) if current.st_nlink == 1 else 0
            path.unlink()
            freed += amount
            if thumbnail:
                Path(str(path) + '.rule').unlink(missing_ok=True)
        except OSError:
            continue
        finally:
            if lock is not None:
                lock.release()
    return freed


class CapacityGuard:
    """容量闸门。

    后台任务（刮削、补修、抽帧等让数据增长的工作）遇到任一上限或余量不足都暂停。
    `foreground=True` 用于播放与浏览：总量上限只触发清理，不挡请求；只有磁盘余量真的
    不够才拒绝写缓存；检查本身出错时放行并记下原因，不让保护机制挡住播放。
    """

    def __init__(self, config, interval_secs=2, *, foreground=False):
        self.config = config
        self.interval_secs = interval_secs
        self.foreground = foreground
        self.next_check = 0.0
        self._reservation_started = False
        self._reserved_data = None
        self._denied = None

    def _projected_reasons(self, policy, usage, disks, required_bytes, destination):
        projected = dict(usage)
        checked = list(disks)
        if required_bytes:
            target = _existing(destination or self.config.data_root)
            disk = shutil.disk_usage(target)
            checked.append((f'{target} 预计写入后', disk.free - required_bytes, disk.total))
            if projected['data_bytes'] is not None:
                self._reserved_data = max(self._reserved_data or 0, projected['data_bytes'] + required_bytes)
                projected['data_bytes'] = self._reserved_data
        return _exceeded(policy, projected, checked)

    def _cleanup_target(self, policy, usage, required_bytes, destination):
        generated = _existing(self.config.directory('generated'))
        disk = shutil.disk_usage(generated)
        needed = max(0, reserve_bytes(policy, disk.total) - disk.free)
        if required_bytes and _existing(destination or self.config.data_root).stat().st_dev == generated.stat().st_dev:
            needed = max(needed, reserve_bytes(policy, disk.total) - disk.free + required_bytes)
        for key, limit in (('cache_bytes', policy.cache_max_gib), ('data_bytes', policy.data_max_gib)):
            if limit and usage[key] is not None:
                extra = required_bytes if key == 'data_bytes' else 0
                needed = max(needed, usage[key] + extra - limit * GIB + 1)
        return needed

    def _usage(self, policy, disks, required_bytes):
        """余量已触线就不统计；预估写入要即时读数；其余请求只读后台最近一次读数。"""
        unknown = {**_UNKNOWN, 'measured_at': time.time()}
        if _exceeded(policy, unknown, disks):
            return unknown
        if required_bytes:
            return _measure(self.config, policy, interval_secs=self.interval_secs)
        try:
            return latest_usage(self.config, policy)
        except OSError as error:
            if not self.foreground:
                raise
            # 总量读不到不影响播放，照样按实时余量把关。
            return {**unknown, 'error': str(error)}

    def _after_cleanup(self, policy, usage, disks, freed, required_bytes):
        if not required_bytes:
            _remember_cleanup(self.config, policy, freed)
            return {**usage, **{name: None if usage[name] is None else max(0, usage[name] - freed)
                                for name in ('cache_bytes', 'data_bytes')}}
        _SCANS.clear()
        refreshed = (usage if _exceeded(policy, dict(_UNKNOWN), disks) else
                     _measure(self.config, policy, interval_secs=self.interval_secs))
        if self._reserved_data is not None and usage['data_bytes'] is not None and refreshed['data_bytes'] is not None:
            self._reserved_data -= max(0, usage['data_bytes'] - refreshed['data_bytes'])
        elif refreshed['data_bytes'] is None:
            self._reserved_data = None
        return refreshed

    def check(self, force=False, *, required_bytes=0, destination=None):
        from .update_tasks import check_pause, current_db
        check_pause(current_db.get())
        now = time.monotonic()
        if not force and not required_bytes and now < self.next_check:
            if self._denied is not None:
                raise self._denied
            return None
        self.next_check = now + self.interval_secs
        try:
            policy = load_policy(self.config)
            if not policy.enabled:
                self._denied = None
                return {'enabled': False, 'paused': False, 'reasons': [], 'freed_bytes': 0,
                        'data_bytes': None, 'cache_bytes': None, 'external_cache_bytes': None,
                        'checked_at': time.time()}
            disks = _disks(self.config, policy, strict=not self.foreground)
            if required_bytes and not self._reservation_started:
                _SCANS.clear()
                self._reservation_started = True
            # 统计不持锁：一个调用方在统计时，其他请求照常放行或拦截。
            usage = self._usage(policy, disks, required_bytes)
            reasons = self._projected_reasons(policy, usage, disks, required_bytes, destination)
            freed = 0
            needed = self._cleanup_target(policy, usage, required_bytes, destination)
            if reasons and policy.auto_clean and needed > 0:
                self.config.directory('state').mkdir(parents=True, exist_ok=True)
                with _LOCK, FileLock(str(self.config.directory('state') / 'storage-auto-clean.lock')):
                    # 多清 1 MiB 余量，免得每次只差几个字节就再清一轮。
                    freed = _clean_rebuildable(self.config, needed + GIB // 1024)
                disks = _disks(self.config, policy, strict=not self.foreground)
                usage = self._after_cleanup(policy, usage, disks, freed, required_bytes)
                reasons = self._projected_reasons(policy, usage, disks, required_bytes, destination)
                if freed:
                    record_history(self.config, data_bytes=None, cache_bytes=None, cleaned_bytes=freed)
            status = {**usage, 'checked_at': time.time(), 'reasons': reasons,
                      'layout': layout(self.config, policy),
                      'freed_bytes': freed, 'paused': bool(reasons), 'required_bytes': required_bytes,
                      'volumes': [{'path':path,'free_bytes':free,'reserve_bytes':reserve_bytes(policy,total)}
                                  for path, free, total in disks]}
            with _LOCK:
                atomic_write_text(self.config.directory('state') / STATUS_NAME,
                                  json.dumps(status, ensure_ascii=False))
            if self.foreground:
                blocking = _exceeded(policy, dict(_UNKNOWN), disks)
                if blocking:
                    raise DiskSpaceDenied('；'.join(blocking) + '；磁盘空间不足，已停止写入缓存，请清理后重试')
            elif reasons:
                raise DiskSpaceDenied('；'.join(reasons) + '；已停止领取新项，请调整容量或清理后重试')
            self._denied = None
            return status
        except DiskSpaceDenied as error:
            self._denied = error
            raise
        except (OSError, ValueError) as error:
            if self.foreground:
                logging.getLogger(__name__).warning('容量检查未取得，播放照常（%s）', type(error).__name__)
                self._denied = None
                return {'paused': False, 'reasons': [], 'error': str(error), 'checked_at': time.time()}
            self._denied = DiskSpaceDenied(f'容量保护检查未取得，已暂停：{error}')
            raise self._denied from error
