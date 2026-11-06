/** 媒体详情的标签页身份；仅使用当前地址对应的已呈现条目。 */
export function mediaRouteLabel(pathname: string, item: {
  id: number; display_code?: string | null; code?: string | null; name?: string | null;
} | null): string {
  const work = /^\/works\/([A-Za-z0-9_-]{2,64})$/.exec(pathname);
  if (work) return work[1]!.toUpperCase();
  if (!item || pathname !== `/assets/${item.id}`) return '';
  return [item.display_code, item.code, item.name].map(value => String(value || '').trim()).find(Boolean) || '';
}
