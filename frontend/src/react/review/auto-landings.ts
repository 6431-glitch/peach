/* 复核页「自动写入的资料」的数据契约（ADR-0140）。
 *
 * 一个读端点、一个写端点。列表是核查结算自动写下的批次；带 `batches` 读到的是这几批的撤回预览
 * 与 token。撤回把同一个 token 交回去，服务端在写锁里重算，对不上就拒绝。 */
import { apiGet, apiSend } from '../../api';
import { localTime } from '../time';

export const AUTO_LANDINGS_URL = '/api/review/auto-landings';
export const AUTO_LANDING_REVERT_URL = '/api/review/auto-landings/revert';
export const AUTO_LANDINGS_KEY = ['review', 'auto-landings'] as const;

export interface AutoLandingBatch {
  rule: string;
  /** 规则写给人看的名字。 */
  label: string;
  batch: string;
  /** 批次时刻，秒；读不出时为 null。 */
  at: number | null;
  /** 这批写下的决定条数，每条是一部作品的一格资料。 */
  items: number;
  /** 覆盖改过的作品数；并集为 0。 */
  assets: number;
  /** 并集补进、仍在账本里的标签数；覆盖为 0。 */
  tags: number;
}

interface AssetRef {
  asset_id: number; name: string; code: string;
  /** 作品已不在账本里。 */
  gone?: boolean;
}
export interface RestoreRow extends AssetRef { field: string; current: string; previous: string }
export interface ChangedRow extends AssetRef { field: string; written: string }
export interface TagRow extends AssetRef { tag: string; batch: string }

export interface AutoLandingPreview {
  batches: string[];
  token: string;
  decisions: number;
  restores: RestoreRow[];
  changed: ChangedRow[];
  tags: TagRow[];
  /** 并集决定按整条撤，连带的那几个没选中的批次。 */
  other_batches: string[];
}

export interface AutoLandingResult {
  ok: boolean;
  batches: string[];
  restored: number;
  removed_tags: number;
  decisions: number;
  changed: ChangedRow[];
  backup: string;
}

export const fetchAutoLandings = (signal?: AbortSignal) =>
  apiGet<{ items: AutoLandingBatch[] }>(AUTO_LANDINGS_URL, signal);

export const previewAutoLandings = (batches: string[]) =>
  apiGet<AutoLandingPreview>(`${AUTO_LANDINGS_URL}?batches=${encodeURIComponent(batches.join(','))}`);

/** 真实 ledger 写入：服务端先备份，再按预览的那份计划撤回。 */
export const revertAutoLandings = (batches: string[], token: string) =>
  apiSend<AutoLandingResult>(AUTO_LANDING_REVERT_URL, { batches, token });

export const batchTime = (item: AutoLandingBatch) =>
  item.at === null ? '' : localTime(new Date(item.at * 1000).toISOString());

export function impactText(item: AutoLandingBatch): string {
  return item.assets
    ? `${item.items} 项资料 · ${item.assets} 部作品`
    : `${item.items} 项资料 · ${item.tags} 个标签`;
}

const work = (row: AssetRef) => row.code || row.name || `#${row.asset_id}`;
const shown = (value: string) => (value ? `「${value}」` : '空');

/** 确认弹层里逐条列出的改动：改回的值、删掉的标签，最后是被人改过、不动的作品。 */
export function previewLines(preview: AutoLandingPreview): string[] {
  return [
    ...preview.restores.map((row) => `${work(row)} ${row.field}：${shown(row.current)} 改回 ${shown(row.previous)}`),
    ...preview.tags.map((row) => `${work(row)} 删除标签「${row.tag}」`),
    ...preview.changed.map((row) => row.gone
      ? `${work(row)} ${row.field}：作品已不在账本中，跳过`
      : `${work(row)} ${row.field}：之后已被修改，保留现值`),
  ];
}

export function previewBody(preview: AutoLandingPreview): string {
  const parts = [
    preview.restores.length ? `改回 ${preview.restores.length} 条资料` : '',
    preview.tags.length ? `删除 ${preview.tags.length} 个自动补上的标签` : '',
  ].filter(Boolean);
  return [
    `将撤回 ${preview.batches.length} 批自动写入：${parts.join('，') || '没有要改的资料'}。`,
    preview.changed.length ? `${preview.changed.length} 条资料写入后被修改过或作品已删除，不改动。` : '',
    preview.other_batches.length ? `所选标签的补写记录还连带 ${preview.other_batches.length} 个其他批次，一并撤回。` : '',
    '撤回前会自动备份账本。下一轮资料处理仍按同一判据判断，可能再次写入。',
  ].filter(Boolean).join('');
}

export function resultText(result: AutoLandingResult): string {
  const parts = [
    result.restored ? `改回 ${result.restored} 条资料` : '',
    result.removed_tags ? `删除 ${result.removed_tags} 个标签` : '',
  ].filter(Boolean);
  return `已撤回 ${result.batches.length} 批自动写入${parts.length ? `：${parts.join('，')}` : ''}`;
}
