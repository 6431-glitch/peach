import { cardIdentity, entityAvatar, type FaceRef, type IdentityItem } from '@peach/card-art';
import { entityDisplayName } from '../../core/entity-names';
import { followCompactWhen, followIdentity, followTitle } from '../follow-feed/follow-marks';
import { groupMediaKinds, itemForMedia, type FollowItem, type FollowPage } from '../follow-feed/follow-feed';
import type { OnlineAuthor } from '../follow/online-vocab';
import { onlineAuthorRingHtml } from '../index/index-controller';
import type { Discovery } from '../jav/jav';
import type { SuggestCard, SuggestGroup, SuggestItem } from './search';

type Request = (url: string) => Promise<any>;
type Latest = { id: number; code: string; release_date: string };

/** 推荐栏的分组与次序固定：还没取到的那组照样占着位置（`pending`），取到一组填一组，栏不改版式。
 *  `size` 是一页摆几条：人三行、作品一排五格。 */
const GROUPS = [
  { kind: 'performer', label: '艺人与新作', href: '/subscriptions?tab=add', action: '订阅新作', size: 3 },
  { kind: 'author', label: '关注作者', href: '/subscriptions?tab=add', action: '添加关注', size: 3 },
  { kind: 'asset', label: '作品推荐', href: '/', action: '全部作品', size: 5 },
  { kind: 'jav', label: 'JAV 推荐', href: '/jav?tab=discover', action: '发现 JAV', size: 5 },
  { kind: 'post', label: '关注作品', href: '/follow', action: '全部关注作品', size: 5 },
  { kind: 'photo', label: '关注图片', href: '/follow?media=images', action: '全部关注图片', size: 5 },
  { kind: 'release', label: '订阅新作', href: '/subscriptions', action: '管理订阅', size: 5 },
] as const;

/* 每组一次多取一池，「换一批」在池里翻页，不再发请求。JAV 推荐按口味分排、订阅新作按发行日排，
   同一个请求每次回同样的几部：只取一页的话这两组换不出东西。多取到二十条，耗时与取五条相当。 */
const POOL = 20;
/** 作者名册有缓存，多取几位不加成本；头一页是条目最多的三位。 */
const AUTHOR_POOL = 24;

/** 一组都还没取到时的推荐栏：版式与取齐之后相同。 */
export function pendingRecommendations(): SuggestGroup[] {
  return GROUPS.map(group => ({ ...group, items: [], pending: true }));
}

/** 今年的日期去掉年份，往年的留着，同关注卡片列表里的写法。 */
const day = (date: string) => date.startsWith(String(new Date().getFullYear())) ? date.slice(5, 10) : date.slice(0, 10);

/** 署名只写第一位，共演再给总人数，同作品卡。 */
const byline = (names: string[], total = names.length) => total > 1 ? `${names[0]} 等 ${total} 人` : names[0] || '';

/** 搜索入口复用馆藏、口味推荐、关注和新作的本机读接口。每个接口回来就交一次 `update`，
 *  慢的那个不拖住已经到手的几组。 */
export async function searchRecommendations(request: Request,
  update?: (groups: SuggestGroup[]) => void): Promise<SuggestGroup[]> {
  const filled = new Map<string, SuggestItem[]>();
  const build = (): SuggestGroup[] => GROUPS.map(group => {
    const pool = filled.get(group.kind);
    return pool ? { ...group, items: pool.slice(0, group.size), pool, offset: 0 } : { ...group, items: [], pending: true };
  });
  const fill = (groups: Record<string, SuggestItem[]>) => {
    for (const [kind, items] of Object.entries(groups)) filled.set(kind, items);
    update?.(build());
  };
  const settle = (url: string): Promise<any> => request(url).then(value => value, () => null);
  const work = (card: SuggestCard, href: string | undefined, who: string, whoAvatarHtml = ''): SuggestItem => ({
    value: String(card.code || card.display_title || card.title || card.name || '未命名作品'),
    id: card.id, code: card.code, title: String(card.display_title || card.title || ''),
    who, whoAvatarHtml, card, href,
  });
  const library = (card: SuggestCard) => {
    const { kind, name, coStarred, refs, total } = cardIdentity(card as IdentityItem);
    if (!kind) return work(card, undefined, '');
    const ref = kind === 'performer' ? refs[0] : (card as IdentityItem).creator_entity;
    const shown = entityDisplayName(kind, name, ref?.id);
    return work(card, undefined, coStarred ? byline([shown], total) : shown, entityAvatar(name, ref ?? null, kind));
  };
  const discovered = (card: Discovery, href: string) => {
    const refs = card.performer_refs || [];
    const names = refs.length ? refs.map(ref => ref.name)
      : String(card.performers || '').split(/[,，、;/]/).map(name => name.trim()).filter(Boolean);
    const avatar = names[0] ? entityAvatar(names[0], (refs[0] as FaceRef | undefined) ?? null, 'performer') : '';
    return work(card as unknown as SuggestCard, href, byline(names), avatar);
  };

  await Promise.all([
    settle(`/api/items?sort=rand&limit=${POOL}`).then(data => fill({
      asset: ((data?.items || []) as SuggestCard[]).map(library),
    })),
    settle(`/api/jav/discoveries?scope=library&limit=${POOL}`).then(async data => {
      const jav: Discovery[] = data?.items || [];
      fill({ jav: jav.map(card => discovered(card, `/assets/${card.asset_id || card.id}`)) });
      const people = new Map<string, SuggestItem>();
      for (const card of jav) {
        for (const ref of card.performer_refs || []) {
          if (!ref.id || people.has(ref.name)) continue;
          people.set(ref.name, { value: ref.name, entity_id: ref.id, has_image: ref.has_image,
            href: `/performers/${ref.id}`,
            image_version: ref.image_version, avatar_focus: ref.avatar_focus, rep: ref.has_avatar ? ref.rep : null,
            works: [card as unknown as SuggestCard],
          });
        }
      }
      const picked = [...people.values()].slice(0, POOL);
      const latest: Record<string, Latest> = picked.length
        ? (await settle(`/api/entity/latest?ids=${picked.map(item => item.entity_id).join(',')}`))?.items || {} : {};
      fill({ performer: picked.map(item => {
        const found = latest[String(item.entity_id)];
        return { ...item, subtitle: found ? `最新作 ${found.code || '无番号'} · ${day(found.release_date)}` : '最新作未取得' };
      }) });
    }),
    settle(`/api/follow?limit=20&sort=rand&seed=${Date.now() >>> 0}`).then((follow: FollowPage | null) => {
      const posts: SuggestItem[] = [];
      const photos: SuggestItem[] = [];
      const context = { sources: follow?.sources || [], aliases: follow?.author_aliases || [], credentials: new Set<string>() };
      for (const group of follow?.groups || []) {
        const kinds = groupMediaKinds(group);
        for (const media of ['videos', 'images'] as const) {
          if (media === 'images' ? !kinds.has('image') : kinds.size && !kinds.has('video')) continue;
          const item = itemForMedia(group, media);
          const source = context.sources.find(source => source.id === item.source_id);
          const sources = source?.author_key ? context.sources.filter(row => row.author_key === source.author_key) : source ? [source] : [];
          const identity = followIdentity(item, sources, context);
          const image = media === 'images' ? item.media_items?.find(entry => entry.media_kind === 'image') : undefined;
          (media === 'images' ? photos : posts).push({ value: followTitle(item), id: item.id, who: identity.author,
            whoAvatarHtml: identity.avatar, href: `/posts/${item.id}`, followMedia: media, mediaIndex: image?.index ?? null,
            card: { id: item.id, thumb_url: image?.thumb_url || item.thumb_url },
          });
        }
      }
      fill({ post: posts, photo: photos });
    }),
    settle(`/api/feeds/discoveries?limit=${POOL}`).then(data => fill({
      release: ((data?.items || []) as Discovery[]).filter(card => card.code)
        .map(card => discovered({ ...card, sourceWork: true } as Discovery, `/works/${encodeURIComponent(card.code)}`)),
    })),
    // 头像与更新时间都用名册那一行自己的：头像官方优先、归档兜底，同艺人页「在线」那一档。
    settle(`/api/follow/authors?limit=${AUTHOR_POOL}`).then(data => fill({
      author: ((data?.items || []) as OnlineAuthor[]).map(row => ({
        value: row.k, href: row.entity_id ? `/creators/${row.entity_id}` : `/follow?author=${encodeURIComponent(row.key)}`,
        avatarHtml: onlineAuthorRingHtml(row),
        subtitle: row.latest ? `最新更新于 ${followCompactWhen({ published_at: row.latest } as FollowItem)}` : '更新时间未取得',
      })),
    })),
  ]);
  return build();
}
