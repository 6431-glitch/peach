/** 语言写法只用于标签。查询、路由和写入始终使用调用方持有的原始名称与 ID。 */
export type NameLanguage = 'zh-CN' | 'ja';
export interface NameWriting {
  id: number; kind: string; canonical_name: string; zh_cn: string | null; ja: string | null;
}
const names = new Map<string, NameWriting>();
const identities = new Map<string, NameWriting>();
const listeners = new Set<() => void>();
let language: NameLanguage = 'zh-CN';
let revision = 0;
const notify = () => { revision++; listeners.forEach(listener => listener()) };
export const nameRevision = () => revision;
export const subscribeNames = (listener: () => void) => { listeners.add(listener); return () => { listeners.delete(listener) } };
export const nameLanguage = () => language;
export function setNameLanguage(value: NameLanguage): void {
  if (language === value) return;
  language = value;
  notify();
}
export function registerNameWritings(rows: NameWriting[]): void {
  names.clear(); identities.clear();
  for (const row of rows) {
    identities.set(`${row.kind}/${row.id}`, row);
    // 仅以规范名索引，不能让另一个艺名经实体 ID 变成当前艺名。
    names.set(`${row.kind}/${row.canonical_name}`, row);
  }
  notify();
}
export function registerNameWriting(row: NameWriting): void {
  identities.set(`${row.kind}/${row.id}`, row);
  names.set(`${row.kind}/${row.canonical_name}`, row);
  notify();
}
export function entityWriting(kind: string, name: string, id?: number | null): NameWriting | undefined {
  const byId = id ? identities.get(`${kind}/${id}`) : undefined;
  return byId?.canonical_name === name ? byId : names.get(`${kind}/${name}`);
}
export function entityDisplayName(kind: string, name: string, id?: number | null): string {
  const row = entityWriting(kind, name, id);
  return (language === 'ja' ? row?.ja : row?.zh_cn) || name;
}
export function nameFallback(kind: string, name: string, id?: number | null): string {
  const row = entityWriting(kind, name, id);
  if (!row || (language === 'ja' ? row.ja : row.zh_cn)) return '';
  return language === 'ja' ? '暂无已核对的日文原文，保留当前名称' : '暂无已核对的中文写法，保留当前名称';
}
