import { describe, expect, it, vi } from 'vitest';
import { pendingRecommendations, searchRecommendations } from '../../src/react/search/recommendations';
import type { SuggestGroup } from '../../src/react/search/search';

describe('搜索图片推荐', () => {
  it('不同作品来源保留各自详情地址，关注头像和署名取实际发布者', async () => {
    const source = { id: 8, author_key: 'name:作者', label: '作者', ref: '作者', provider: 'pixiv',
      entity_id: 20, entity_name: '作者', official_avatar_url: '/avatar-fixture' };
    const request = vi.fn(async (url: string) => {
      if (url.startsWith('/api/items')) return { items: [{ id: 11, name: '本地作品' }] };
      if (url.startsWith('/api/jav/')) return { items: [{ id: 12, asset_id: 12, code: 'ABW-101',
        performer_refs: [{ id: 15, name: '女优', has_image: true }] }] };
      if (url.startsWith('/api/feeds/')) return { items: [{ id: 12, code: 'ABW-102', cover_url: '/release-cover' }] };
      if (url.startsWith('/api/follow/authors')) return { items: [{ k: '作者', key: source.author_key, entity_id: 20,
        avatar: '/author-avatar', avatar_fallback: '/author-mirror', latest: '2025-03-04T05:06:07Z' }] };
      if (url.startsWith('/api/entity/latest')) return { items: { 15: { id: 30, code: 'ABW-099', release_date: '2025-02-01' } } };
      return { sources: [source], groups: [{
        primary: { id: 12, source_id: 8, title: '关注作品', thumb_url: '/post-cover', media_kind: 'video', status: 'saved' },
        variants: [{ id: 13, source_id: 8, title: '图片作品', status: 'seen', media_kind: 'image',
          media_items: [{ index: 2, media_kind: 'image', thumb_url: '/photo-cover' }] }], duplicates: [],
      }] };
    });
    const groups = await searchRecommendations(request);
    const entry = (kind: string) => groups.find(group => group.kind === kind)!.items[0]!;
    expect(entry('asset').id).toBe(11);
    expect(entry('jav').href).toBe('/assets/12');
    expect(entry('release').href).toBe('/works/ABW-102');
    expect(entry('release').card?.sourceWork).toBe(true);
    expect(entry('post').href).toBe('/posts/12');
    expect(entry('post').who).toBe('作者');
    expect(entry('post').card?.thumb_url).toBe('/post-cover');
    expect(entry('photo').href).toBe('/posts/13');
    expect(entry('photo').mediaIndex).toBe(2);
    expect(entry('photo').followMedia).toBe('images');
    expect(entry('photo').card?.thumb_url).toBe('/photo-cover');
    expect(entry('author').href).toBe('/creators/20');
    expect(entry('author').avatarHtml).toContain('/author-avatar');
    expect(entry('author').avatarHtml).toContain('/author-mirror');
    expect(entry('author').subtitle).toBe('最新更新于 2025-03-04');
    expect(entry('performer').entity_id).toBe(15);
    expect(entry('performer').subtitle).toBe('最新作 ABW-099 · 2025-02-01');
    expect(request).toHaveBeenCalledWith('/api/entity/latest?ids=15');
    expect(entry('jav').who).toBe('女优');
    expect(entry('post').whoAvatarHtml).toContain('/avatar-fixture');
    expect(request.mock.calls.every(([url]) => !url.includes('scope=external'))).toBe(true);
    expect(request.mock.calls.filter(([url]) => url.startsWith('/api/follow?')).every(([url]) => !url.includes('status='))).toBe(true);
  });

  it('一类读取失败不会丢失其他推荐，无实体的作者进入自己的关注筛选', async () => {
    const groups = await searchRecommendations(async url => {
      if (url.startsWith('/api/jav/')) throw new Error('离线');
      if (url.startsWith('/api/follow/authors')) return { items: [{ k: '作者', key: 'name:作者' }] };
      return { items: [{ id: 11, name: '本地作品' }] };
    });
    expect(groups.find(group => group.kind === 'asset')!.items).toHaveLength(1);
    expect(groups.find(group => group.kind === 'jav')!.items).toEqual([]);
    expect(groups.find(group => group.kind === 'author')!.items[0]!.href).toBe('/follow?author=name%3A%E4%BD%9C%E8%80%85');
    expect(groups.find(group => group.kind === 'release')!.items).toEqual([]);
    expect(groups.find(group => group.kind === 'performer')!.action).toBe('订阅新作');
    expect(groups.find(group => group.kind === 'author')!.items[0]!.subtitle).toBe('更新时间未取得');
  });

  it('作者名册先回来就先交出那一组，其余组照最终次序占位', async () => {
    let releaseItems: (value: unknown) => void = () => {};
    const updates: SuggestGroup[][] = [];
    const done = searchRecommendations(url => {
      if (url.startsWith('/api/follow/authors')) return Promise.resolve({ items: [{ k: '作者', key: 'name:作者', avatar: '', avatar_fallback: '' }] });
      if (url.startsWith('/api/items')) return new Promise(resolve => { releaseItems = resolve });
      return Promise.resolve({ items: [] });
    }, groups => updates.push(groups));
    await vi.waitFor(() => expect(updates.length).toBeGreaterThan(0));
    const early = updates.at(-1)!;
    expect(early.map(group => group.kind)).toEqual(pendingRecommendations().map(group => group.kind));
    expect(early.find(group => group.kind === 'author')!.pending).toBeUndefined();
    expect(early.find(group => group.kind === 'asset')!.pending).toBe(true);
    releaseItems({ items: [{ id: 11, name: '本地作品', creator: '作者' }] });
    const groups = await done;
    expect(groups.some(group => group.pending)).toBe(false);
    expect(groups.find(group => group.kind === 'asset')!.items[0]!.who).toBe('作者');
  });
});
