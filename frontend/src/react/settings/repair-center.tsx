/** 「应用与维护 › 修复与迁移」子页：升级后的各项修复做了什么、改了多少；开销大或可能改错的在这里等用户确认。
 *
 *  历史里列出每次修复前留下的账本备份：还在的去「账本备份」恢复，清退了的照实写。页头的面包屑由管理区页头画。
 *  有项在后台统计或执行时每 2 秒重读一次，做完就停。 */
import { useEffect, useState, type ReactNode } from 'react';
import { RiArrowRightLine } from '@remixicon/react';
import { fmtSize } from '@peach/legacy/core';
import { confirmModal } from '@peach/legacy/ui';
import { Button } from '@/components/base/buttons/button';
import { LinkButton } from '@/components/base/buttons/link-button';
import { apiGet, apiSend } from '../../api';
import { RESULT_PANEL, RESULT_SECTION, SectionHeading } from '../components/fieldset';
import { Note } from '../components/note';
import { Page } from '../components/page';
import { Progress } from '../components/progress';
import { StatusLabel, type StatusTone } from '../components/status-label';
import { useAction } from './use-action';

interface RepairItem {
  id: string; title: string; summary: string; mode: 'auto' | 'confirm';
  state: string; changed?: number; done?: number; total?: number; pending?: number;
  /** 删除类确认项：能回收的文件数与字节数；`estimating` 为还在后台统计。 */
  files?: number; bytes?: number; estimating?: boolean; error?: string;
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

const reclaimable = (item: RepairItem) => `${number(item.files)} 个文件 · ${fmtSize(item.bytes || 0)}`;
/** 页面开着时要跟进的后台进度：在跑的项与还在统计的删除类确认项。补测要跑几天，正因为久才要看得到进度。 */
const inFlight = (item: RepairItem) => !!item.estimating || item.state === 'running';

function reading(item: RepairItem) {
  if (item.estimating) return '正在统计';
  if (item.state === 'failed' && item.error) return item.error;
  // 行里只写体积，手机宽度下才不挤说明列；文件数在确认弹层里点名。
  if (item.files) return `可回收 ${fmtSize(item.bytes || 0)}`;
  if (item.state === 'waiting' && item.pending) return `${number(item.pending)} 部待补测`;
  if (item.total) return `${number(item.done)} / ${number(item.total)}`;
  if (item.mode === 'confirm') return '';
  return item.changed ? `改动 ${number(item.changed)} 项` : '';
}

function Row({ title, description, progress, children }: {
  title: string; description: string; progress?: ReactNode; children: ReactNode;
}) {
  return (
    <div className={`${RESULT_SECTION} flex flex-wrap items-center justify-between gap-x-4 gap-y-2`}>
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="text-body-medium text-text-primary">{title}</span>
        <span className="text-body-2-regular text-text-secondary">{description}</span>
        {progress ? <div className="pt-2">{progress}</div> : null}
      </div>
      <div className="flex shrink-0 items-center gap-3">{children}</div>
    </div>
  );
}

export function RepairCenterPage() {
  const [data, setData] = useState<RepairCenterData | null>(null);
  const [error, setError] = useState('');
  const action = useAction();
  const polling = !!data?.items.some(inFlight);
  useEffect(() => {
    let timer = 0;
    const load = () => apiGet<RepairCenterData>('/api/configuration/repairs').then(setData)
      .catch((reason: Error) => setError(reason.message));
    if (polling) timer = window.setTimeout(load, 2000); else if (!data) void load();
    return () => window.clearTimeout(timer);
  }, [data, polling]);
  const post = (item: RepairItem, signal?: AbortSignal) => apiSend<RepairCenterData>(
    `/api/configuration/repairs/${item.id}`, {}, 'POST', signal);
  const start = (item: RepairItem) => item.files === undefined
    ? void action.run(item.id, signal => post(item, signal), setData)
    : void confirmModal({
      title: `删除${item.title}`,
      body: `将删除 ${reclaimable(item)}，删除后不能恢复。每个关注来源最近 3 份快照和条目引用的快照会保留。`,
      confirmLabel: '删除快照', danger: true,
      onConfirm: async () => setData(await post(item)),
    });
  const backupNote = (row: RepairHistory) => !row.backups.length ? null : row.backups.some(backup => backup.exists)
    ? <LinkButton href="/settings/maintenance#ledgerBackups" size="small" trailingIcon={RiArrowRightLine}>修复前的账本备份</LinkButton>
    : <span className="text-body-2-regular text-text-tertiary">修复前的备份已清理</span>;

  return <Page>
    <p className="text-body-regular text-text-secondary">开销小、只改自动写入资料的修复自动执行，你手动改过的不动；开销大或可能改错的等你确认。</p>
    {error || action.error ? <Note tone="error">{action.error || error}</Note> : null}
    <section aria-labelledby="repair-items" className="flex flex-col gap-4">
      <SectionHeading id="repair-items">修复项目</SectionHeading>
      {data && !data.items.length
        ? <p className="text-body-2-regular text-text-secondary">这台机器上没有要修复或迁移的内容。</p>
        : <div className={RESULT_PANEL} aria-busy={!data || undefined}>
        {(data?.items || []).map(item => {
          const [label, tone] = STATES[item.state] || STATES.none;
          return (
            <Row key={item.id} title={item.title} description={item.summary}
              progress={item.state === 'running' && item.total
                ? <Progress label={`${item.title}进度`} value={item.done || 0} max={item.total} /> : null}>
              {reading(item) ? <span className="text-body-2-regular text-text-secondary">{reading(item)}</span> : null}
              {item.mode === 'confirm' && item.state === 'waiting'
                ? <Button size="small" disabled={!data?.available || !!action.busy || item.estimating}
                    onClick={() => start(item)}>开始</Button>
                : <StatusLabel tone={tone}>{label}</StatusLabel>}
            </Row>
          );
        })}
      </div>}
    </section>
    {data?.history.length ? <section aria-labelledby="repair-history" className="flex flex-col gap-4">
      <SectionHeading id="repair-history">历史记录</SectionHeading>
      <div className={RESULT_PANEL}>
        {data.history.map(row => (
          <Row key={row.id} title={row.title}
            description={`${stamp(row.at)} · ${row.changed ? `改动 ${number(row.changed)} 项` : '无改动'}`}>
            {backupNote(row)}
          </Row>
        ))}
      </div>
    </section> : null}
  </Page>;
}
