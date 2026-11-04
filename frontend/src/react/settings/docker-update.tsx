/* Docker 一键更新（ADR-0140）：Watchtower 连接设置，以及点击后等新容器起来。
 *
 * 容器换不掉自己，Peach 只请同一 compose 里的 Watchtower 在后台拉镜像、重建容器。请求发出后
 * Peach 会断开一会儿；每 3 秒问一次运行版本，换成新版本就提示刷新，15 分钟没换就报告未完成。 */
import { useEffect, useRef, useState, type FormEvent } from 'react';

import { Button } from '@/components/base/buttons/button';
import { Input } from '@/components/base/input/input';

import { apiGet, apiSend } from '../../api';
import type { DockerUpdateState } from '../bundle';
import { CommandSteps, ErrorText, Footer, Help, Section, Stack } from './section';
import { busyProps, useAction } from './use-action';

const POLL = 3000;
const GIVE_UP = 15 * 60 * 1000;

export type DockerJob = { state: 'idle' | 'updating' | 'done' | 'timeout'; version?: string };

/** 点击「一键更新」之后的进度：发请求、等运行版本变化。 */
export function useDockerUpdate(currentVersion: string) {
  const [job, setJob] = useState<DockerJob>({ state: 'idle' });
  const action = useAction();
  const started = useRef(0);

  useEffect(() => {
    if (job.state !== 'updating') return undefined;
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout>;
    const poll = async () => {
      try {
        const next = await apiGet<{ runtime?: { version?: string } }>('/api/client-updates', controller.signal);
        const version = next.runtime?.version;
        if (!controller.signal.aborted && version && version !== currentVersion) {
          setJob({ state: 'done', version });
          return;
        }
      } catch {
        // 重建期间连不上是正常的，继续等。
      }
      if (controller.signal.aborted) return;
      if (Date.now() - started.current > GIVE_UP) setJob({ state: 'timeout' });
      else timer = setTimeout(poll, POLL);
    };
    timer = setTimeout(poll, POLL);
    return () => { controller.abort(); clearTimeout(timer); };
  }, [job.state, currentVersion]);

  const run = () => action.run('docker-update',
    (signal) => apiSend<{ state: string }>('/api/configuration/docker-update/run', {}, 'POST', signal),
    () => { started.current = Date.now(); setJob({ state: 'updating' }); });
  return { job, run, busy: action.busy === 'docker-update', error: action.error };
}

export function DockerUpdateProgress({ job }: { job: DockerJob }) {
  if (job.state === 'updating') {
    return <Help role="status">Watchtower 正在拉取新镜像并重建容器。期间 Peach 会断开一会儿，新版本启动后这里会提示刷新。</Help>;
  }
  if (job.state === 'done') return <Help role="status">已更新到 Peach {job.version}，刷新页面即可使用。</Help>;
  if (job.state === 'timeout') {
    return <Stack>
      <ErrorText>15 分钟内没有看到新版本启动。在 compose.yaml 所在目录查看 Watchtower 与 Peach 的日志：</ErrorText>
      <CommandSteps label="查看更新日志" steps={[{ text: 'Watchtower 的拉取与重建记录', command: 'docker compose logs watchtower' },
        { text: 'Peach 的启动与数据库迁移记录', command: 'docker compose logs peach' }]} />
    </Stack>;
  }
  return null;
}

/** Watchtower 的地址与令牌。令牌提交后清空草稿，页面上不留明文，回来的只有存没存过。 */
export function DockerUpdateSettings({ state, onSaved, receipt }: {
  state: DockerUpdateState; onSaved(next: DockerUpdateState): void; receipt(message: string): void;
}) {
  const [url, setUrl] = useState(state.url);
  const [token, setToken] = useState('');
  const action = useAction();

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void action.run('save', (signal) => apiSend<DockerUpdateState>('/api/configuration/docker-update', { url, token }, 'POST', signal),
      (next) => { setToken(''); setUrl(next.url); onSaved(next); receipt('已保存配置'); });
  };

  return (
    <Section title="一键更新" onSubmit={submit}>
      <Stack>
        <Help>用 compose 的 watchtower profile 启动 Watchtower 后，填同一个令牌，检查更新时就能在页面里更新。Watchtower 能管理宿主机上的容器，启用前先读 Docker 部署说明。</Help>
        <Input id="docker-update-url" label="Watchtower 地址" autoComplete="off" maxLength={512}
          value={url} onChange={setUrl} hint="同一 compose 里填 http://watchtower:8080。" />
        <Input id="docker-update-token" type="password" label="Watchtower 令牌" autoComplete="off" maxLength={512}
          value={token} onChange={setToken}
          hint={state.token_set ? '已保存，留空不改。' : '与宿主机 secrets/watchtower-token 文件的内容一致。'} />
        {state.rolling ? null : state.image_tag
          ? <Help>当前镜像标签是 {state.image_tag}，Watchtower 只会换同一标签的新镜像。把 .env 的 PEACH_VERSION 删掉或改成 edge 后才能一键更新。</Help>
          : <Help>容器里没有镜像标签，compose.yaml 可能还是旧版。换成仓库当前的 compose.yaml 后重建容器，才能一键更新。</Help>}
        {action.error ? <ErrorText>{action.error}</ErrorText> : null}
      </Stack>
      <Footer>
        <Button type="submit" {...busyProps(action.busy === 'save')}>保存配置</Button>
      </Footer>
    </Section>
  );
}
