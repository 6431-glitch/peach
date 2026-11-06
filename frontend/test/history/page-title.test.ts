import { expect, it } from 'vitest';
import { mediaRouteLabel } from '../../src/history/page-title';

it('详情标签页优先显示番号，没有番号时保留文件名', () => {
  expect(mediaRouteLabel('/assets/1', { id: 1, display_code: ' DASD-911 ', code: 'DASD-00911', name: 'video.mp4' }))
    .toBe('DASD-911');
  expect(mediaRouteLabel('/assets/1', { id: 1, display_code: ' ', code: 'ABP-616', name: 'video.mp4' })).toBe('ABP-616');
  expect(mediaRouteLabel('/assets/1', { id: 1, name: '我的视频.mp4' })).toBe('我的视频.mp4');
  expect(mediaRouteLabel('/works/abw-032', null)).toBe('ABW-032');
});

it('换页及另一条详情读取期间不沿用上一条的身份', () => {
  expect(mediaRouteLabel('/assets/2', { id: 1, code: 'ABP-616' })).toBe('');
  expect(mediaRouteLabel('/tasks', { id: 1, code: 'ABP-616' })).toBe('');
  expect(mediaRouteLabel('/assets/1', null)).toBe('');
});
