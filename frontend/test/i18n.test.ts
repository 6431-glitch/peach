import { readFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

import { createTranslator, resources, storedInterfaceLanguage, INTERFACE_LANGUAGES, SOURCE_LANGUAGE } from '../src/i18n';
// @ts-expect-error 检查脚本是纯 ESM，没有类型声明
import { BASELINE, countLiterals, scan } from '../scripts/i18n-literals.mjs';

const frontend = resolve(__dirname, '..');
const locales = join(frontend, 'src/locales');

type Tree = { [key: string]: string | Tree };
const flatten = (tree: Tree, prefix = ''): Record<string, string> => Object.fromEntries(Object.entries(tree).flatMap(
  ([key, value]) => typeof value === 'string' ? [[prefix + key, value]] : Object.entries(flatten(value, `${prefix}${key}.`))));
const read = (language: string, ns: string) => flatten(JSON.parse(readFileSync(join(locales, language, `${ns}.json`), 'utf8')));
const namespaces = (language: string) => readdirSync(join(locales, language)).map((name) => name.replace(/\.json$/, '')).sort();
const placeholders = (text: string) => [...text.matchAll(/\{\{\s*([^},\s]+)[^}]*\}\}/g)].map((match) => match[1]).sort();
/* 复数键按 i18next v4：中文只有 `_other`，英文另有 `_one`；比键时折成同一个基名。 */
const base = (key: string) => key.replace(/_(zero|one|two|few|many|other)$/, '');

/** TBX 里每条术语：中文词、英文写法、是不是禁用写法。 */
function glossary() {
  const doc = new DOMParser().parseFromString(readFileSync(join(locales, 'glossary/en.tbx'), 'utf8'), 'application/xml');
  return [...doc.querySelectorAll('termEntry')].map((entry) => {
    const lang = (code: string) => [...entry.querySelectorAll('langSet')].find((set) => set.getAttribute('xml:lang') === code);
    const target = lang('en')?.querySelector('tig');
    return {
      id: entry.getAttribute('id') || '',
      zh: lang('zh-CN')?.querySelector('term')?.textContent?.trim() || '',
      en: target?.querySelector('term')?.textContent?.trim() || '',
      forbidden: target?.querySelector('termNote[type="administrativeStatus"]')?.textContent?.trim() === 'forbidden',
    };
  });
}

describe('界面文案的语言资源', () => {
  it('每种语言的命名空间齐全，英文与源文的键一一对应', () => {
    expect(namespaces('en')).toEqual(namespaces(SOURCE_LANGUAGE));
    for (const ns of namespaces(SOURCE_LANGUAGE)) {
      const zh = Object.keys(read(SOURCE_LANGUAGE, ns)).map(base);
      const en = Object.keys(read('en', ns)).map(base);
      expect([...new Set(en)].sort(), ns).toEqual([...new Set(zh)].sort());
    }
  });

  it('入口登记的资源就是目录里的全部文件', () => {
    for (const language of INTERFACE_LANGUAGES) {
      expect(Object.keys(resources[language]).sort(), language).toEqual(namespaces(language));
    }
  });

  it('译文的插值占位和源文一致', () => {
    for (const ns of namespaces(SOURCE_LANGUAGE)) {
      const zh = read(SOURCE_LANGUAGE, ns), en = read('en', ns);
      for (const [key, text] of Object.entries(en)) {
        const source = zh[key] ?? zh[`${base(key)}_other`] ?? '';
        expect(placeholders(text), `${ns}:${key}`).toEqual(placeholders(source));
      }
    }
  });

  it('译文不用术语表里禁用的写法', () => {
    const banned = glossary().filter((term) => term.forbidden);
    const hits: string[] = [];
    for (const ns of namespaces(SOURCE_LANGUAGE)) {
      const zh = read(SOURCE_LANGUAGE, ns), en = read('en', ns);
      for (const [key, text] of Object.entries(en)) {
        const source = zh[key] ?? zh[`${base(key)}_other`] ?? '';
        for (const term of banned) {
          const word = new RegExp(`\\b${term.en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
          if (source.includes(term.zh) && word.test(text)) hits.push(`${ns}:${key}「${source}」→ ${text}：${term.zh} 不写 ${term.en}`);
        }
      }
    }
    expect(hits).toEqual([]);
  });

  it('术语表每条都有中文词和英文写法，条目编号不重复', () => {
    const terms = glossary();
    expect(terms.length).toBeGreaterThan(0);
    expect(terms.filter((term) => !term.zh || !term.en)).toEqual([]);
    expect(new Set(terms.map((term) => term.id)).size).toBe(terms.length);
  });
});

describe('界面语言', () => {
  it('从本地偏好同步读出，没存或不认识时用源语言', () => {
    const storage = (value: string | null) => ({ getItem: () => value });
    expect(storedInterfaceLanguage(storage(JSON.stringify({ interfaceLanguage: 'en' })))).toBe('en');
    expect(storedInterfaceLanguage(storage(JSON.stringify({ interfaceLanguage: 'fr' })))).toBe('zh-CN');
    expect(storedInterfaceLanguage(storage('{坏掉'))).toBe('zh-CN');
    expect(storedInterfaceLanguage(storage(null))).toBe('zh-CN');
  });

  it('英文取英文，缺的键回落到源文', () => {
    const en = createTranslator('en');
    expect(en.t('navigation:sidebar.home')).toBe('Home');
    en.addResource('zh-CN', 'navigation', 'onlySource', '仅源文');
    expect(en.t('navigation:onlySource')).toBe('仅源文');
    expect(createTranslator('zh-CN').t('navigation:manage.configuration')).toBe('Peach 配置');
  });
});

describe('写死的中文文案只减不增', () => {
  it('逐个文件不超过基线，基线外的文件没有中文文案', () => {
    const baseline: Record<string, number> = JSON.parse(readFileSync(BASELINE, 'utf8'));
    const raised = Object.entries(scan() as Record<string, number>)
      .filter(([file, count]) => count > (baseline[file] ?? 0))
      .map(([file, count]) => `${file}: ${count}（基线 ${baseline[file] ?? 0}）`);
    expect(raised, '新文案写进 src/locales/<语言>/*.json，用 t() 取；抽走后跑 node scripts/i18n-literals.mjs --write 收紧基线').toEqual([]);
  }, 60_000);

  it('计数认字符串、模板和 JSX 文字，不认注释、对象键、导入路径和 console', () => {
    const source = [
      "// 注释里的中文",
      "import x from './中文路径';",
      "const a = { 键: '值' };",
      "const b = `模板${x}`;",
      "console.warn('日志');",
      "const c = <b>正文</b>;",
      "const d = 'plain';",
    ].join('\n');
    expect(countLiterals('sample.tsx', source)).toBe(3);
  });
});
