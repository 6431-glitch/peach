import { useEffect, useState } from 'react';
import { Button } from '@/components/base/buttons/button';
import { Input } from '@/components/base/input/input';
import { Select, SelectItem } from '@/components/base/select/select';
import { ApiError, apiGet, apiSend, errorMessage } from '../../api';
import { Disclosure } from './section';

type Settings = { url: string; username: string; password_set: boolean };
type ConnectionState = 'idle' | 'ok' | 'error';
const connectionError = (cause: unknown) => {
  if (cause instanceof ApiError && cause.body && typeof cause.body === 'object') {
    const detail = (cause.body as { detail?: unknown }).detail;
    if (typeof detail === 'string') return detail;
  }
  return errorMessage(cause);
};

export function QbittorrentSettings() {
  const [scheme, setScheme] = useState('http');
  const [host, setHost] = useState('');
  const [port, setPort] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [saved, setSaved] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<ConnectionState>('idle');
  const change = (update: () => void) => { update(); setStatus('idle'); setMessage(''); setError('') };
  useEffect(() => {
    const controller = new AbortController();
    apiGet<Settings>('/api/qbittorrent/settings', controller.signal).then(data => {
      if (data.url) {
        const parsed = new URL(data.url);
        setScheme(parsed.protocol.slice(0, -1)); setHost(parsed.hostname); setPort(parsed.port);
      }
      setUsername(data.username); setSaved(data.password_set);
    }).catch(cause => { if (!controller.signal.aborted) setError(connectionError(cause)) });
    return () => controller.abort();
  }, []);
  const run = async (test: boolean) => {
    setBusy(true); setError(''); setMessage('');
    try {
      const url = `${scheme}://${host.trim()}${port.trim() ? `:${port.trim()}` : ''}`;
      const data = await apiSend<Settings | { ok: boolean }>(test ? '/api/qbittorrent/check' : '/api/qbittorrent/settings', { url, username, password }, 'POST');
      setStatus('ok');
      if (!test && 'password_set' in data) { setSaved(data.password_set); setPassword('') }
      setMessage(test ? 'Connection successful.' : 'Connection saved.');
    } catch (cause) { setStatus('error'); setError(connectionError(cause)) } finally { setBusy(false) }
  };
  return <section className="rounded-xl border border-separator-border p-4" aria-label="qBittorrent">
    <Disclosure summary={<span className="font-semibold">qBittorrent {saved ? '· Configured' : '· Not configured'}</span>}>
      <div className="flex flex-col gap-3 py-3">
        <p className="text-text-secondary">Send selected magnets to the qBittorrent default download folder.</p>
        <div className="gap-2" style={{ display: 'grid', gridTemplateColumns: 'minmax(76px, 1fr) minmax(0, 3fr) minmax(62px, 1fr)', alignItems: 'end' }}>
          <Select aria-label="Protocol" selectedKey={scheme} onSelectionChange={key => { if (key) change(() => setScheme(String(key))) }}>
            <SelectItem id="http">HTTP</SelectItem><SelectItem id="https">HTTPS</SelectItem>
          </Select>
          <Input aria-label="Host" placeholder="Host" value={host} onChange={value => change(() => setHost(value))} />
          <Input aria-label="Port" placeholder={scheme === 'https' ? '443' : '80'} value={port} onChange={value => change(() => setPort(value))} inputMode="numeric" />
        </div>
        <div className="gap-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', alignItems: 'end' }}>
          <Input label="Username" value={username} onChange={value => change(() => setUsername(value))} autoComplete="off" />
          <Input label="Password" type="password" value={password} onChange={value => change(() => setPassword(value))} autoComplete="new-password" placeholder={saved ? 'Saved; leave blank to keep' : ''} />
        </div>
        {error ? <p role="alert" className="text-text-error-primary">{error}</p> : null}
        {message ? <p role="status">{message}</p> : null}
        <div className="flex flex-wrap justify-end gap-2">
          <Button variant="secondary" disabled={busy} onClick={() => void run(true)}>Test connection {status === 'ok' ? '✓' : status === 'error' ? '✕' : ''}</Button>
          <Button disabled={busy} onClick={() => void run(false)}>Save</Button>
        </div>
      </div>
    </Disclosure>
  </section>;
}
