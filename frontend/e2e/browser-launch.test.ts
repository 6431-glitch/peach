/* 真实浏览器启动契约：Windows 回环规避项与 Playwright 默认特性必须同时生效。 */
import assert from 'node:assert/strict';
import { it } from 'node:test';
import { chromium, type Browser } from 'playwright-core';
import { launch, requiredEnv } from './harness.ts';

async function disabledFeatures(browser: Browser): Promise<Set<string>> {
  const session = await browser.newBrowserCDPSession();
  try {
    const { arguments: args } = await session.send('Browser.getBrowserCommandLine');
    const value = args.filter(arg => arg.startsWith('--disable-features=')).at(-1);
    assert.ok(value, 'Chrome 必须公开实际启动的禁用特性');
    return new Set(value.slice('--disable-features='.length).replaceAll('"', '').split(','));
  } finally { await session.detach(); }
}

it('回环网络规避只用于 Windows，且保留当前 Playwright 的全部默认特性', async t => {
  // 只为本用例开启启动参数的只读协议观测，两个真实浏览器使用同一观测参数。
  const launchChromium = chromium.launch.bind(chromium);
  t.mock.method(chromium, 'launch', (options: Parameters<typeof chromium.launch>[0] = {}) =>
    launchChromium({ ...options, args: [...(options.args ?? []), '--enable-automation'] }));
  const baseline = await chromium.launch({ headless: true, executablePath: requiredEnv('PEACH_E2E_CHROME') });
  let expected: Set<string>;
  try { expected = await disabledFeatures(baseline); }
  finally { await baseline.close(); }
  if (process.platform === 'win32') expected.add('TcpPortRandomizationWin');
  const browser = await launch();
  try { assert.deepEqual(await disabledFeatures(browser), expected); }
  finally { await browser.close(); }
});
