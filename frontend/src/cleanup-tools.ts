/** 数据管理的维护工具；首页入口、二级页和面包屑共用名称与地址。 */
import { t } from './i18n';
export const CLEANUP_TOOLS = [
  { key: 'organize', path: '/data-cleanup/organize', title: t('cleanup:tools.organize'), icon: 'folder-cog',
    description: t('cleanup:tools.organizeDescription') },
  { key: 'resource-sync', path: '/data-cleanup/resource-sync', title: t('cleanup:tools.resourceSync'), icon: 'git-compare',
    description: t('cleanup:tools.resourceSyncDescription') },
  { key: 'orphan-records', path: '/data-cleanup/orphan-records', title: t('cleanup:tools.orphanRecords'), icon: 'file-stack',
    description: t('cleanup:tools.orphanRecordsDescription') },
  { key: 'media-repair', path: '/data-cleanup/media-repair', title: t('cleanup:tools.mediaRepair'), icon: 'wrench',
    description: t('cleanup:tools.mediaRepairDescription') },
  { key: 'links', path: '/data-cleanup/links', title: t('cleanup:tools.links'), icon: 'link',
    description: t('cleanup:tools.linksDescription') },
  { key: 'batch-delete', path: '/data-cleanup/batch-delete', title: t('cleanup:tools.bulkDelete'), icon: 'trash',
    description: t('cleanup:tools.bulkDeleteDescription') },
] as const;

export type CleanupTool = typeof CLEANUP_TOOLS[number];
export type CleanupToolKey = CleanupTool['key'];
export type CleanupToolPath = CleanupTool['path'];

export const CLEANUP_CRUMB_PAGES = Object.fromEntries(CLEANUP_TOOLS.map(tool => [tool.path, tool.title]));

/** 已分享的锚点仍能进入对应工具；扫描与采集继续留在首页。 */
export const CLEANUP_HASH_REDIRECTS: Readonly<Record<string, CleanupToolPath>> = {
  '#organize': '/data-cleanup/organize',
  '#mediaRepair': '/data-cleanup/media-repair',
  '#link-manager': '/data-cleanup/links',
  '#resource-sync': '/data-cleanup/resource-sync',
  '#orphan-records': '/data-cleanup/orphan-records',
  '#batch-delete': '/data-cleanup/batch-delete',
};
