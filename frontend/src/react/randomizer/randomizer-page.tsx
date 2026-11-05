import { useState } from 'react';
import { apiGet, errorMessage } from '../../api';
import { Button } from '@/components/base/buttons/button';
import { Radio, RadioGroup } from '@/components/base/radio/radio';
import './randomizer.css';

type Mode = 'film' | 'clip' | 'actress';
type Pick = { id: number; name: string; cover_key?: string };

export function RandomizerPage({ openItem, openEntity }: {
  openItem(id: number): void; openEntity(kind: string, name: string): void;
}) {
  const [mode, setMode] = useState<Mode>('film');
  const [result, setResult] = useState<Pick | null>(null);
  const [drawn, setDrawn] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const draw = async () => {
    setBusy(true); setError('');
    try {
      const params = new URLSearchParams({ mode });
      if (result) params.set('exclude', String(result.id));
      const response = await apiGet<{ result: Pick | null }>(`/api/randomizer/draw?${params}`);
      setResult(response.result); setDrawn(true);
    } catch (cause) { setError(errorMessage(cause)) } finally { setBusy(false) }
  };
  return <main className="mx-auto flex w-full max-w-2xl flex-col gap-6 p-6" aria-label="Randomizer">
    <header className="flex flex-col gap-2"><h1 className="text-3xl font-semibold">Tonight's pick</h1>
      <p className="text-text-secondary">Pick a category and open your surprise.</p></header>
    <RadioGroup aria-label="Choose a draw" orientation="horizontal" className="flex-row flex-wrap gap-4" value={mode}
      onChange={value => { setMode(value as Mode); setResult(null); setDrawn(false); setError('') }}>
      <Radio value="film">Film</Radio><Radio value="clip">Clip</Radio><Radio value="actress">Actress</Radio>
    </RadioGroup>
    <section className="flex min-h-64 flex-col items-center justify-center gap-4 rounded-2xl border border-separator-border bg-background-secondary-default p-6 text-center" aria-live="polite">
      {result ? <div key={`${mode}-${result.id}`} className="randomizer-reveal flex flex-col items-center gap-4"><span className="text-text-secondary">Your pick</span>
        {mode === 'actress' || result.cover_key ? <img className="max-h-64 max-w-full rounded-xl object-contain" alt=""
          src={mode === 'actress' ? `/entity-image?kind=performer&id=${result.id}&thumb=1` : `/cover?code=${encodeURIComponent(result.cover_key || '')}&thumb=2`}
          onError={event => { event.currentTarget.style.display = 'none' }} /> : null}
        <strong className="text-2xl" data-i18n-ignore="">{result.name}</strong>
        <Button variant="secondary" onClick={() => mode === 'actress' ? openEntity('performer', result.name) : openItem(result.id)}>Open</Button></div>
        : <p>{drawn ? 'No matches in this category yet.' : 'Ready to draw?'}</p>}
      {error ? <p role="alert" className="text-text-error-primary">{error}</p> : null}
      <Button variant="primary" disabled={busy} onClick={() => void draw()}>{busy ? 'Drawing…' : result ? 'Draw again' : 'Open your pick'}</Button>
    </section>
    <p className="text-text-secondary">Mark videos as Film or Clip in their details to add them to a draw. Performers without known gender information may appear in Actress draws.</p>
  </main>;
}
