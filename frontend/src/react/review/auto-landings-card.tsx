/* 复核页元数据分类下的「自动写入的资料」（ADR-0140）。
 *
 * 资料处理按确定判据自动写下的标题、发行日期与标签，按批次列出。勾选批次后先读一次撤回预览，
 * 弹层里逐条列出会改回的值、会删的标签和之后被人改过、不动的作品，确认后才写账本。撤回的回执
 * 留在表上方，被跳过的作品可以点开核对。没有批次也没有回执时整块不出现。 */
import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { confirmModal } from '@peach/legacy/ui';

import { Button } from '@/components/base/buttons/button';
import { LinkButton } from '@/components/base/buttons/link-button';
import { errorMessage } from '../../api';
import { DataTable, type DataColumn } from '../components/data-table';
import { Note } from '../components/note';
import { queryClient } from '../query';
import { busyProps } from '../settings/use-action';
import {
  AUTO_LANDINGS_KEY, batchTime, fetchAutoLandings, impactText, previewAutoLandings, previewBody, previewLines,
  resultText, revertAutoLandings, type AutoLandingBatch, type AutoLandingResult,
} from './auto-landings';
import { REVIEW_KEY } from './review';

const DESCRIPTION = '资料处理按确定判据自动写入的标题、发行日期与标签。撤回会把覆盖的值改回写入前、删掉补上的标签；写入后又被修改过的作品保留现值。';

export function AutoLandingsCard(
  { locked, openItem, toast }: { locked: boolean; openItem(id: number): void; toast(message: string): void },
) {
  const [selected, setSelected] = useState<string[]>([]);
  const [receipt, setReceipt] = useState<AutoLandingResult | null>(null);
  const query = useQuery({ queryKey: AUTO_LANDINGS_KEY, queryFn: ({ signal }) => fetchAutoLandings(signal) });
  const items = query.data?.items ?? [];
  const revert = useMutation({
    mutationFn: async (batches: string[]) => {
      const preview = await previewAutoLandings(batches);
      const { confirmed, result } = await confirmModal({
        title: '撤回自动写入', body: previewBody(preview), items: previewLines(preview),
        confirmLabel: '撤回', onConfirm: () => revertAutoLandings(preview.batches, preview.token),
      });
      return confirmed ? result as AutoLandingResult : null;
    },
    onSuccess: (result) => {
      if (!result) return;
      setReceipt(result);
      setSelected([]);
      toast(resultText(result));
      void queryClient.invalidateQueries({ queryKey: REVIEW_KEY });
    },
    onError: (error) => toast(errorMessage(error)),
  });
  if (!items.length && !receipt && !query.isError) return null;
  const columns: DataColumn<AutoLandingBatch>[] = [
    { id: 'rule', label: '规则', width: 360, min: 260, value: (item) => item.label, render: (item) => (
      <span className="flex min-w-0 flex-col gap-0.5">
        <span className="truncate text-body-regular text-text-primary">{item.label}</span>
        <small title={item.batch} className="truncate text-caption-1-regular text-text-secondary">{item.batch}</small>
      </span>
    ) },
    { id: 'at', label: '时间', width: 160, min: 136, value: (item) => item.at ?? 0,
      render: (item) => <span className="tabular-nums">{batchTime(item) || '未知'}</span> },
    { id: 'impact', label: '影响', width: 200, min: 160, value: (item) => item.items, render: (item) => impactText(item) },
  ];
  return (
    <section aria-labelledby="auto-landings-title" className="flex flex-col gap-4">
      {receipt ? (
        <Note tone="success" title={resultText(receipt)}>
          <p className="text-body-2-regular">{`撤回前的账本已备份为 ${receipt.backup}。`}</p>
          {receipt.changed.length ? (
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-body-2-regular">
              {`${receipt.changed.length} 条资料写入后被修改过或作品已删除，未改动：`}
              {receipt.changed.map((row) => row.gone ? (
                <span key={`${row.asset_id}:${row.field}`} className="text-text-secondary">{`#${row.asset_id}（已删除）`}</span>
              ) : (
                <LinkButton key={`${row.asset_id}:${row.field}`} size="small" onClick={() => openItem(row.asset_id)}>
                  {row.code || row.name || `#${row.asset_id}`}
                </LinkButton>
              ))}
            </p>
          ) : null}
        </Note>
      ) : null}
      {query.isError ? (
        <Note tone="error" title="读取自动写入的资料失败">{errorMessage(query.error)}</Note>
      ) : items.length ? (
        <DataTable label="自动写入的批次" items={items} columns={columns}
          title="自动写入的资料" titleId="auto-landings-title" unit="批"
          description={DESCRIPTION}
          rowId={(item) => item.batch} rowLabel={(item) => `${item.label} ${batchTime(item)}`}
          selected={selected} onSelected={setSelected}
          actions={(chosen) => (
            <Button variant="secondary" size="small" disabled={locked || !chosen.length}
              {...busyProps(revert.isPending)} onClick={() => revert.mutate(chosen.map((item) => item.batch))}>
              {`撤回所选（${chosen.length}）`}
            </Button>
          )} />
      ) : null}
    </section>
  );
}
