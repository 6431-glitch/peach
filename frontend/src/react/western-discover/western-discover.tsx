import { useEffect, useState } from 'react';
import { apiGet, errorMessage } from '../../api';
import { Button } from '@/components/base/buttons/button';

type Item = { id: string; title: string; url: string; image?: string; image_fallback?: string; date?: string; studio?: string; actors?: string[] };
type Result = { items: Item[]; has_more: boolean };
type HomeResult = { sections: { title: string; items: Item[] }[] };

export function WesternDiscover() {
  const [source, setSource] = useState('stashdb');
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
      <ReleaseSection source="stashdb" section="trending" title="Trending scenes" />
      <ReleaseSection source="stashdb" section="recent" title="Recently added scenes" />
      <ReleaseSection source="stashdb" section="releases" title="New releases" />
    </> : <DorcelSections />}
  </main>;
}

function DorcelSections() {
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
      <ReleaseCards items={section.items} source="dorcelvision" />
    </section>)}
  </>;
}

function ReleaseCards({ items, source }: { items: Item[]; source: string }) {
  return <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
    {items.map(item => <a key={item.id} href={item.url} target="_blank" rel="noreferrer" className="flex min-w-0 flex-col gap-2 overflow-hidden rounded-xl border border-separator-border p-3">
      {item.image ? <img src={item.image} alt="" loading="lazy" referrerPolicy="no-referrer" className={source === 'stashdb' ? 'aspect-video w-full rounded-lg object-contain' : 'aspect-[2/3] w-full rounded-lg object-contain'}
        onError={event => { if (item.image_fallback && event.currentTarget.src !== item.image_fallback) event.currentTarget.src = item.image_fallback }} /> : null}
      <strong data-i18n-ignore="">{item.title}</strong>
      <span className="text-text-secondary" data-i18n-ignore="">{[item.studio, item.date, item.actors?.join(', ')].filter(Boolean).join(' · ')}</span>
    </a>)}
  </div>;
}

function ReleaseSection({ source, section, title }: { source: string; section: string; title: string }) {
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
    <ReleaseCards items={items} source={source} />
    {busy ? <p role="status">Loading releases…</p> : null}
    {more ? <Button variant="secondary" disabled={busy} onClick={() => setPage(value => value + 1)}>Load more</Button> : null}
  </section>;
}
