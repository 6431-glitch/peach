/** 「修复与迁移」：升级后的各项修复做了什么、改了多少；开销大或可能改错的在这里等用户确认。
 *
 *  历史里列出每次修复前留下的账本备份：还在的去「账本备份」恢复，清退了的照实写。 */
import { useEffect, useState } from 'react';
import { RiArrowRightLine } from '@remixicon/react';
import { Button } from '@/components/base/buttons/button';
import { LinkButton } from '@/components/base/buttons/link-button';
import { SettingsRow } from '@/components/application/settings/settings-rows';
import { apiGet, apiSend } from '../../api';
import { StatusLabel, type StatusTone } from '../components/status-label';
import { ErrorText, Help, Rows, Section, Stack } from './section';
import { useAction } from './use-action';

interface RepairItem {
  id: string; title: string; summary: string; mode: 'auto' | 'confirm';
  state: string; changed?: number; done?: number; total?: number; pending?: number;
}
interface RepairHistory { id: string; title: string; at: number; changed: number; backups: { name: string; exists: boolean }[] }
interface RepairCenterData { available: boolean; items: RepairItem[]; history: RepairHistory[] }

const STATES: Record<string, [string, StatusTone]> = {
  done: ['已完成', 'success'], succeeded: ['已完成', 'success'], complete: ['已完成', 'success'],
  running: ['进行中', 'progress'], pending: ['等待执行', 'neutral'], waiting: ['等你确认', 'warning'],
  failed: ['需要重试', 'error'], none: ['无需处理', 'neutral'],
};
const number = (value = 0) => value.toLocaleString();
const stamp = (seconds: number) => new Date(seconds * 1000).toLocaleString('zh-CN', {
  year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });

function reading(item: RepairItem) {
  if (item.mode === 'confirm') return item.pending ? `${number(item.pending)} 部待补测` : '';
  if (item.total) return `${number(item.done)} / ${number(item.total)}`;
  return item.changed ? `改动 ${number(item.changed)} 项` : '';
}

function backupNote(row: RepairHistory) {
  if (!row.backups.length) return null;
  return row.backups.some(backup => backup.exists)
    ? <LinkButton href="/settings/maintenance#ledgerBackups" size="small" trailingIcon={RiArrowRightLine}>修复前的账本备份</LinkButton>
    : <span className="text-body-2-regular text-text-tertiary">修复前的备份已按保留规则清理</span>;
}

export function RepairCenter() {
  const [data, setData] = useState<RepairCenterData | null>(null);
  const [error, setError] = useState('');
  const action = useAction();
  useEffect(() => {
    apiGet<RepairCenterData>('/api/configuration/repairs').then(setData).catch((reason: Error) => setError(reason.message));
  }, []);
  const start = (item: RepairItem) => void action.run(item.id, signal => apiSend<RepairCenterData>(
    `/api/configuration/repairs/${item.id}`, {}, 'POST', signal), setData);

  return <>
    <Section id="repairCenter" title="修复与迁移">
      <Stack><Help>开销小、只改自动写入资料的修复在升级后自动执行，你手动改过的不动；开销大或可能改错的，等你确认后才开始。</Help></Stack>
      {error || action.error ? <Stack><ErrorText>{action.error || error}</ErrorText></Stack> : null}
      <Rows>
        {(data?.items || []).map(item => {
          const [label, tone] = STATES[item.state] || STATES.none;
          return (
            <SettingsRow key={item.id} label={item.title} description={item.summary}>
              <div className="flex shrink-0 items-center gap-3">
                {reading(item) ? <span className="text-body-2-regular text-text-secondary">{reading(item)}</span> : null}
                {item.mode === 'confirm' && item.state === 'waiting'
                  ? <Button size="small" disabled={!data?.available || !!action.busy} onClick={() => start(item)}>开始</Button>
                  : <StatusLabel tone={tone}>{label}</StatusLabel>}
              </div>
            </SettingsRow>
          );
        })}
      </Rows>
    </Section>
    <Section id="repairHistory" title="历史记录">
      {data && !data.history.length ? <Stack><Help>还没有修复记录。</Help></Stack> : null}
      <Rows>
        {(data?.history || []).map(row => (
          <SettingsRow key={row.id} label={row.title}
            description={`${stamp(row.at)} · ${row.changed ? `改动 ${number(row.changed)} 项` : '无改动'}`}>
            {backupNote(row)}
          </SettingsRow>
        ))}
      </Rows>
    </Section>
  </>;
}
