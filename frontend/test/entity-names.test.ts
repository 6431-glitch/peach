import { beforeEach, describe, expect, it } from 'vitest';
import {
  entityDisplayName, nameFallback, nameLanguage, registerNameWriting, registerNameWritings,
  setNameLanguage, type NameWriting,
} from '../src/core/entity-names';

const writing: NameWriting = {
  id: 1, kind: 'performer', canonical_name: '枫花恋', zh_cn: '枫花恋', ja: '楓カレン',
};

beforeEach(() => { registerNameWritings([]); setNameLanguage('zh-CN') });

describe('实体名称的只读显示投影', () => {
  it('切换显示语言保留原始名称、身份和来源对象', () => {
    const original = { ...writing };
    registerNameWritings([original]);
    expect(entityDisplayName('performer', '枫花恋', 1)).toBe('枫花恋');
    setNameLanguage('ja');
    expect(entityDisplayName('performer', '枫花恋', 1)).toBe('楓カレン');
    expect(original).toEqual(writing);
  });

  it('同一身份下其他艺名不会被替换为当前统称，人物与创作者分开索引', () => {
    registerNameWriting(writing);
    setNameLanguage('ja');
    expect(entityDisplayName('performer', '田中柠檬', 1)).toBe('田中柠檬');
    expect(entityDisplayName('creator', '枫花恋', 1)).toBe('枫花恋');
  });

  it('缺少已核对的写法时保留原名并给出对应提示', () => {
    registerNameWriting({ ...writing, zh_cn: null });
    expect(entityDisplayName('performer', '枫花恋', 1)).toBe('枫花恋');
    expect(nameFallback('performer', '枫花恋', 1)).toBe('暂无已核对的中文写法，保留当前名称');
    setNameLanguage('ja');
    expect(nameFallback('performer', '枫花恋', 1)).toBe('');
    expect(nameFallback('studio', '原名')).toBe('');
  });

  it('刷新资料集合清除过期名称，但保留用户的语言偏好', () => {
    registerNameWritings([writing]);
    setNameLanguage('ja');
    registerNameWritings([]);
    expect(nameLanguage()).toBe('ja');
    expect(entityDisplayName('performer', '枫花恋', 1)).toBe('枫花恋');
  });
});
