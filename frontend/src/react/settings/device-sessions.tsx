/* 用访问密码登录过的浏览器，逐台撤销。
 *
 * 列表单独取：服务端要拿这次请求的 cookie 认出哪一行是本机。撤销与改密码同一条边界，
 * 只在运行 Peach 的电脑上做，别处打开只能看。行是 BoardUI `SettingsRow`，本机标记是 `Chip`，
 * 撤销键是 BoardUI `Button`，确认走 `confirmModal()`。 */
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { confirmModal } from '@peach/legacy/ui';

import { Chip } from '@/components/base/badges/chip';
import { Button } from '@/components/base/buttons/button';
import { SettingsRow } from '@/components/application/settings/settings-rows';

import { apiGet, apiSend, errorMessage } from '../../api';
import { devicesSkeleton, rememberShape } from '../../configuration-skeleton';
import { ErrorText, Footer, Help, Rows, Section, SectionSkeleton, Stack } from './section';

const URL = '/api/configuration/access/sessions';

export interface DeviceSession {
  id: string; device: string; network: string; remote: boolean;
  created_at: number; last_seen: number; expires: number; legacy: boolean; current: boolean;
}
export interface DeviceSessionList { revision: string; sessions: DeviceSession[]; manageable: boolean }

const deviceName = (row: DeviceSession) => row.device || '未识别的浏览器';

/** 最近活动按分钟落盘，所以一分钟以内都写「刚刚」。 */
export function lastSeen(seconds: number, now = Date.now() / 1000): string {
  const elapsed = Math.max(0, now - seconds);
  if (elapsed < 60) return '刚刚';
  if (elapsed < 3600) return `${Math.floor(elapsed / 60)} 分钟前`;
  if (elapsed < 86400) return `${Math.floor(elapsed / 3600)} 小时前`;
  if (elapsed < 86400 * 30) return `${Math.floor(elapsed / 86400)} 天前`;
  return new Date(seconds * 1000).toLocaleDateString('zh-CN');
}

function origin(row: DeviceSession): string {
  if (row.network === 'loopback') return '运行 Peach 的电脑';
  if (!row.network) return '';
  return row.remote ? `公网入口 · ${row.network}` : row.network;
}

const describe = (row: DeviceSession) => [`最近活动 ${lastSeen(row.last_seen)}`, origin(row)].filter(Boolean).join(' · ');

/** 访问密码改了（`revision` 变了）就重新取：旧行已经全部作废。 */
export function DeviceSessions({ revision, receipt }: { revision: string; receipt(message: string): void }) {
  const query = useQuery({
    queryKey: ['access-sessions', revision], refetchOnMount: 'always',
    queryFn: ({ signal }) => apiGet<DeviceSessionList>(URL, signal),
  });
  if (query.error) {
    return <Section title="已登录的设备"><Stack><ErrorText>{errorMessage(query.error)}</ErrorText></Stack></Section>;
  }
  if (query.isFetching || !query.data) return <SectionSkeleton label="正在读取已登录的设备" html={devicesSkeleton} />;
  return <DeviceList initial={query.data} receipt={receipt} />;
}

function DeviceList({ initial, receipt }: { initial: DeviceSessionList; receipt(message: string): void }) {
  const [list, setList] = useState(initial);
  useEffect(() => setList(initial), [initial]);
  const others = list.sessions.filter(row => !row.current);
  useEffect(() => {
    rememberShape('devices', { rows: Math.min(list.sessions.length, 8), manageable: list.manageable && others.length > 0 });
  }, [list, others.length]);

  const revoke = (row: DeviceSession) => void confirmModal({
    title: '撤销这台设备的登录',
    body: `${deviceName(row)}（${describe(row)}）下次打开 Peach 需要重新输入访问密码。`,
    confirmLabel: '撤销登录',
    onConfirm: async () => {
      setList(await apiSend<DeviceSessionList>(`${URL}/revoke`, { revision: list.revision, id: row.id }));
      receipt('已撤销登录');
    },
  });
  const revokeOthers = () => void confirmModal({
    title: '撤销其他设备的登录',
    body: `除本机以外的 ${others.length} 台设备下次打开 Peach 需要重新输入访问密码。`,
    confirmLabel: '撤销登录',
    onConfirm: async () => {
      const next = await apiSend<DeviceSessionList & { removed: number }>(`${URL}/revoke`, { revision: list.revision, scope: 'others' });
      setList(next);
      receipt(`已撤销 ${next.removed} 台设备的登录`);
    },
  });

  return (
    <Section title="已登录的设备">
      {list.sessions.length
        ? <Rows>
            {list.sessions.map(row => (
              <SettingsRow key={row.id} label={deviceName(row)} description={describe(row)}>
                {row.current
                  ? <Chip color="blue" variant="caption">本机</Chip>
                  : list.manageable
                    ? <Button size="small" variant="secondary" aria-label={`撤销 ${deviceName(row)} 的登录`}
                        onClick={() => revoke(row)}>撤销</Button>
                    : null}
              </SettingsRow>
            ))}
          </Rows>
        : <Stack><Help>还没有浏览器用访问密码登录过。</Help></Stack>}
      {!list.manageable && others.length
        ? <Stack divided><Help>在运行 Peach 的电脑上打开这一页才能撤销。</Help></Stack>
        : null}
      {list.manageable && others.length
        ? <Footer status="修改访问密码会让全部设备退出。">
            <Button variant="secondary" onClick={revokeOthers}>撤销其他设备</Button>
          </Footer>
        : null}
    </Section>
  );
}
