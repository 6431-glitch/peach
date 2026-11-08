/* 界面文案的翻译入口（ADR-0156）。
 *
 * 源文是 `locales/zh-CN/<命名空间>.json`，英文在 `locales/en/`，两份由同一个 PR 维护；其他语言经 Weblate 回流。
 * 界面语言在模块求值时从本地偏好同步读出，整页只有这一份实例：导航词表这类模块在顶层就取译文，
 * 换语言靠整页重载，不做运行中切换。缺译文的键回落到 zh-CN。 */
import i18next from 'i18next';

import { SETTINGS_KEY } from '../settings-key';
import enNavigation from '../locales/en/navigation.json';
import enSettings from '../locales/en/settings.json';
import zhNavigation from '../locales/zh-CN/navigation.json';
import zhSettings from '../locales/zh-CN/settings.json';

export const INTERFACE_LANGUAGES = ['zh-CN', 'en'] as const;
export type InterfaceLanguage = typeof INTERFACE_LANGUAGES[number];
export const SOURCE_LANGUAGE: InterfaceLanguage = 'zh-CN';

export const resources = {
  'zh-CN': { navigation: zhNavigation, settings: zhSettings },
  en: { navigation: enNavigation, settings: enSettings },
} as const;

export const isInterfaceLanguage = (value: unknown): value is InterfaceLanguage =>
  INTERFACE_LANGUAGES.includes(value as InterfaceLanguage);

/** 本地偏好里存的界面语言；没存、存坏或不认识时用源语言。 */
export function storedInterfaceLanguage(storage: Pick<Storage, 'getItem'> | undefined = globalThis.localStorage): InterfaceLanguage {
  try {
    const saved = JSON.parse(storage?.getItem(SETTINGS_KEY) || '{}')?.interfaceLanguage;
    return isInterfaceLanguage(saved) ? saved : SOURCE_LANGUAGE;
  } catch {
    return SOURCE_LANGUAGE;
  }
}

/** 按给定语言建一份同步就绪的实例；页面用模块级那一份，测试用它比对各语言。 */
export function createTranslator(language: InterfaceLanguage) {
  const instance = i18next.createInstance();
  void instance.init({
    lng: language, fallbackLng: SOURCE_LANGUAGE, supportedLngs: [...INTERFACE_LANGUAGES],
    resources, ns: Object.keys(resources[SOURCE_LANGUAGE]), defaultNS: 'navigation',
    initAsync: false, returnNull: false, interpolation: { escapeValue: false },
  });
  return instance;
}

export const interfaceLanguage = storedInterfaceLanguage();
const translator = createTranslator(interfaceLanguage);
if (typeof document !== 'undefined') document.documentElement.lang = interfaceLanguage;

/** 取当前界面语言的译文，键写成 `命名空间:路径`。 */
export const t = translator.t.bind(translator);
