/* JAV 新作列表的列定义与本机列偏好的存放位置。不依赖 React：路由骨架与列表读同一份。 */
import { tableSnapshot, type TableSnapshot } from '../catalog-grid/catalog-table-columns';
import type { ReleaseSort } from './discovery-sorts';

export const RELEASE_COLUMN_WIDTHS_KEY = 'peach.table.jav-releases.widths.v1';
export const RELEASE_COLUMN_VISIBILITY_KEY = 'peach.table.jav-releases.visibility.v1';

const sizes: Record<string, { width: number; min: number; max: number }> = {
  name: { width: 300, min: 280, max: 2000 },
  people: { width: 210, min: 160, max: 400 },
  studio: { width: 144, min: 120, max: 320 },
  tags: { width: 160, min: 144, max: 560 },
  code: { width: 128, min: 112, max: 320 },
  dur: { width: 96, min: 80, max: 200 },
  score: { width: 100, min: 96, max: 200 },
  release: { width: 120, min: 112, max: 240 },
  actions: { width: 184, min: 184, max: 320 },
};
const labels: Record<string, string> = { name: '作品', people: '艺人', studio: '厂牌', tags: '标签', code: '番号',
  dur: '时长', score: '来源评分', release: '发行时间', actions: '操作' };

/** 表头点了能排序的列，对应到新作接口的排序键；其余列不排。 */
export const RELEASE_SORT_COLUMNS: Record<string, ReleaseSort> = { code: 'code', dur: 'duration', score: 'source_score', release: 'release_date' };

export const releaseColumns = ['name', 'people', 'studio', 'tags', 'code', 'dur', 'score', 'release', 'actions']
  .map(id => ({ id, label: labels[id]!, ...sizes[id]!, flex: id === 'name', required: id === 'name', visible: id !== 'code' }));

export function releaseTableSnapshot(): TableSnapshot {
  return tableSnapshot(releaseColumns, RELEASE_COLUMN_WIDTHS_KEY, RELEASE_COLUMN_VISIBILITY_KEY);
}
