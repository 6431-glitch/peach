import { useEffect, useState } from 'react';
import { apiGet, apiSend, errorMessage } from '../../api';
import { Button } from '@/components/base/buttons/button';
import { ModalFrame } from '../components/modal-frame';

type Item = { id: string; title: string; url: string; image?: string; image_fallback?: string; date?: string; studio?: string; actors?: string[] };
type Result = { items: Item[]; has_more: boolean };
type HomeResult = { sections: { title: string; items: Item[] }[] };
type Detail = { title?: string; image?: string; cover?: string; date?: string; studio?: string; actors?: string[]; performers?: { name: string }[]; description?: string };
type Indexer = { key: string; name: string; enabled: boolean };
type Torrent = { id: string; name: string; uri: string; size: number; seeders: number; origins: string[] };

function DiscoveryDetail({ source, item, back }: { source: string; item: Item; back(): void }) {
  const [detail, setDetail] = useState<Detail | null>(null);
  const [error, setError] = useState('');
  const [downloading, setDownloading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    apiGet<Detail>(`/api/discover/detail?${new URLSearchParams({ source, id: item.id })}`, controller.signal)
      .then(setDetail).catch(cause => { if (!controller.signal.aborted) setError(errorMessage(cause)) });
    return () => controller.abort();
  }, [source, item.id]);
  const actors = detail?.actors || detail?.performers?.map(person => person.name) || item.actors || [];
  return <main className="mx-auto flex w-full max-w-6xl flex-col gap-5 p-6">
    <div><Button variant="secondary" onClick={back}>Back to Discover</Button></div>
    {error ? <p role="alert" className="text-text-error-primary">{error}</p> : null}
    <div className="flex flex-wrap items-start gap-6">
      {(detail?.image || detail?.cover || item.image) ? <img src={detail?.image || detail?.cover || item.image} alt="" referrerPolicy="no-referrer" className="max-h-120 max-w-full rounded-xl object-contain" /> : null}
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <h1 className="text-3xl font-semibold" data-i18n-ignore="">{detail?.title || item.title}</h1>
        <p className="text-text-secondary" data-i18n-ignore="">{[detail?.studio || item.studio, detail?.date || item.date].filter(Boolean).join(' · ')}</p>
        {actors.length ? <p data-i18n-ignore="">{actors.join(', ')}</p> : null}
        {detail?.description ? <p data-i18n-ignore="">{detail.description}</p> : null}
        <div><Button onClick={() => setDownloading(true)}>Download</Button></div>
      </div>
    </div>
    {downloading ? <DiscoveryDownload title={detail?.title || item.title} close={() => setDownloading(false)} /> : null}
  </main>;
}

function DiscoveryDownload({ title, close }: { title: string; close(): void }) {
  const [query, setQuery] = useState(title);
  const [indexers, setIndexers] = useState<Indexer[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [items, setItems] = useState<Torrent[]>([]);
  const [chosen, setChosen] = useState<Torrent | null>(null);
  const [category, setCategory] = useState('XXX');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [searched, setSearched] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    apiGet<{ indexers: Indexer[] }>('/api/configuration/indexers', controller.signal).then(result => {
      const enabled = result.indexers.filter(row => row.enabled); setIndexers(enabled); setSelected(enabled.map(row => row.key));
    }).catch(cause => { if (!controller.signal.aborted) setError(errorMessage(cause)) });
    return () => controller.abort();
  }, []);
  const search = async () => {
    setBusy(true); setError(''); setChosen(null); setSearched(false);
    try {
      const result = await apiGet<{ items: Torrent[]; error?: string; warnings?: string[] }>(`/api/discover/search?${new URLSearchParams({ query, indexers: selected.join(',') })}`);
      setItems(result.items); setSearched(true); setError(result.error || result.warnings?.join(' · ') || '');
    } catch (cause) { setError(errorMessage(cause)) } finally { setBusy(false) }
  };
  const submit = async () => {
    if (!chosen) return;
    setBusy(true); setError('');
    try { await apiSend('/api/qbittorrent/submit', { magnet: chosen.uri, category }, 'POST'); close() }
    catch (cause) { setError(errorMessage(cause)) } finally { setBusy(false) }
  };
  return <ModalFrame isOpen onOpenChange={open => { if (!open) close() }} width="form" label="Find a torrent">
    <div className="flex flex-col gap-4 p-5">
      <h2 className="text-xl font-semibold">Find a torrent</h2>
      <label className="flex flex-col gap-1">Search title<input className="rounded-lg border border-separator-border bg-background-secondary-default p-2" value={query} onChange={event => setQuery(event.target.value)} onKeyDown={event => { if (event.key === 'Enter') { event.preventDefault(); void search() } }} /></label>
      <fieldset className="flex flex-wrap gap-3"><legend>Indexers</legend>
        <label><input type="checkbox" checked={indexers.length > 0 && selected.length === indexers.length} onChange={event => setSelected(event.target.checked ? indexers.map(row => row.key) : [])} /> All</label>
        {indexers.map(row => <label key={row.key}><input type="checkbox" checked={selected.includes(row.key)} onChange={event => setSelected(current => event.target.checked ? [...current, row.key] : current.filter(key => key !== row.key))} /> {row.name}</label>)}
      </fieldset>
      <Button disabled={busy || !query.trim() || !selected.length} onClick={() => void search()}>Search</Button>
      {error ? <p role="alert" className="text-text-error-primary">{error}</p> : null}
      {searched && !items.length ? <p>No torrents found.</p> : null}
      <ul className="flex flex-col gap-3">{items.map(item => <li key={item.id} className="border-t border-separator-border pt-3"><button type="button" className="text-left" onClick={() => setChosen(item)} aria-pressed={chosen?.id === item.id}><strong>{item.name}</strong><span className="block text-text-secondary">{(item.size / 1024 ** 3).toFixed(2)} GiB · {item.seeders} seeders · {item.origins.join(', ')}</span></button></li>)}</ul>
      {chosen ? <><p>Selected: {chosen.name}</p><fieldset className="flex gap-4"><legend>qBittorrent category</legend>{['XXX', 'XXX 2'].map(value => <label key={value}><input type="radio" name="category" checked={category === value} onChange={() => setCategory(value)} /> {value}</label>)}</fieldset><Button disabled={busy} onClick={() => void submit()}>Add to qBittorrent</Button></> : null}
      <Button variant="secondary" onClick={close}>Close</Button>
    </div>
  </ModalFrame>;
}

export function WesternDiscover() {
  const [source, setSource] = useState('stashdb');
  const [selected, setSelected] = useState<Item | null>(null);
  if (selected) return <DiscoveryDetail source={source} item={selected} back={() => setSelected(null)} />;
  return <main className="mx-auto flex w-full max-w-6xl flex-col gap-5 p-6" aria-label="Discover">
    <h1 className="text-3xl font-semibold">Discover</h1>
    <p className="text-text-secondary">Browse new Western releases.</p>
    <nav aria-label="Discovery source" className="flex gap-5 overflow-x-auto pb-2">
      {([['stashdb', 'StashDB', 'S'], ['dorcelvision', 'DorcelVision', 'D']] as const).map(([value, label, icon]) =>
        <button key={value} type="button" aria-pressed={source === value} onClick={() => setSource(value)}
          className="flex shrink-0 items-center gap-2 rounded-full px-2 py-1 text-text-secondary aria-pressed:text-text-primary">
          <span className="flex size-10 items-center justify-center rounded-full bg-background-secondary-default text-sm" aria-hidden="true">{icon}</span>
          {label}
        </button>)}
    </nav>
    {source === 'stashdb' ? <>
      <ReleaseSection source="stashdb" section="trending" title="Trending scenes" open={setSelected} />
      <ReleaseSection source="stashdb" section="recent" title="Recently added scenes" open={setSelected} />
      <ReleaseSection source="stashdb" section="releases" title="New releases" open={setSelected} />
    </> : <DorcelSections open={setSelected} />}
  </main>;
}

function DorcelSections({ open }: { open(item: Item): void }) {
  const [sections, setSections] = useState<HomeResult['sections']>([]);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    apiGet<HomeResult>('/api/western-discover?source=dorcelvision', controller.signal)
      .then(result => setSections(result.sections))
      .catch(cause => { if (!controller.signal.aborted) setError(errorMessage(cause)) })
      .finally(() => { if (!controller.signal.aborted) setBusy(false) });
    return () => controller.abort();
  }, []);
  return <>
    {error ? <p role="alert" className="text-text-error-primary">{error}</p> : null}
    {busy ? <p role="status">Loading releases…</p> : null}
    {!busy && !error && !sections.length ? <p>No releases found.</p> : null}
    {sections.map(section => <section key={section.title} className="flex flex-col gap-3" aria-label={section.title}>
      <h2 className="text-xl font-semibold" data-i18n-ignore="">{section.title}</h2>
      <ReleaseCards items={section.items} source="dorcelvision" open={open} />
    </section>)}
  </>;
}

function ReleaseCards({ items, source, open }: { items: Item[]; source: string; open(item: Item): void }) {
  return <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
    {items.map(item => <button type="button" key={item.id} onClick={() => open(item)} className="flex min-w-0 flex-col gap-2 overflow-hidden rounded-xl border border-separator-border p-3 text-left">
      {item.image ? <img src={item.image} alt="" loading="lazy" referrerPolicy="no-referrer" className={source === 'stashdb' ? 'aspect-video w-full rounded-lg object-contain' : 'aspect-[2/3] w-full rounded-lg object-contain'}
        onError={event => { if (item.image_fallback && event.currentTarget.src !== item.image_fallback) event.currentTarget.src = item.image_fallback }} /> : null}
      <strong data-i18n-ignore="">{item.title}</strong>
      <span className="text-text-secondary" data-i18n-ignore="">{[item.studio, item.date, item.actors?.join(', ')].filter(Boolean).join(' · ')}</span>
    </button>)}
  </div>;
}

function ReleaseSection({ source, section, title, open }: { source: string; section: string; title: string; open(item: Item): void }) {
  const [items, setItems] = useState<Item[]>([]);
  const [page, setPage] = useState(1);
  const [more, setMore] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    const controller = new AbortController();
    setBusy(true); setError('');
    apiGet<Result>(`/api/western-discover?${new URLSearchParams({ source, section, page: String(page) })}`, controller.signal)
      .then(result => { setItems(previous => page === 1 ? result.items : [...previous, ...result.items]); setMore(result.has_more) })
      .catch(cause => { if (!controller.signal.aborted) setError(errorMessage(cause)) })
      .finally(() => { if (!controller.signal.aborted) setBusy(false) });
    return () => controller.abort();
  }, [source, section, page]);
  return <section className="flex flex-col gap-3" aria-label={title}>
    <h2 className="text-xl font-semibold">{title}</h2>
    {error ? <p role="alert" className="text-text-error-primary">{error}</p> : null}
    {!busy && !error && !items.length ? <p>No releases found.</p> : null}
    <ReleaseCards items={items} source={source} open={open} />
    {busy ? <p role="status">Loading releases…</p> : null}
    {more ? <Button variant="secondary" disabled={busy} onClick={() => setPage(value => value + 1)}>Load more</Button> : null}
  </section>;
}
