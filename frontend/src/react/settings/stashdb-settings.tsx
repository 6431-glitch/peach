/* StashDB manual discovery; adapted from avonar69's peach-mitao/peach PR #145. */
import { useState, type FormEvent } from 'react';
import { Button } from '@/components/base/buttons/button';
import { Input } from '@/components/base/input/input';
import { Switch } from '@/components/base/switch/switch';
import { Chip } from '@/components/base/badges/chip';
import { confirmModal } from '@peach/legacy/ui';
import { apiGet, apiSend } from '../../api';
import { cardClass } from '../components/card';
import { Disclosure, ErrorText, Help, Section, Stack } from './section';
import { busyProps, useAction } from './use-action';

export interface StashDBPolicy { api_key_set: boolean; enabled: boolean }
type LibraryItem = { id: number; label: string };
type Candidate = { id: string; title: string; date: string; studio: string; url: string; reasons: string[] };
type Preview = { candidates: Candidate[]; truncated: boolean; revision: number };
type ReviewItem = LibraryItem & { preview: Preview };

export function StashDBSettings({ initial, receipt }: { initial: StashDBPolicy; receipt(message: string): void }) {
  const [policy, setPolicy] = useState(initial);
  const [key, setKey] = useState('');
  const [query, setQuery] = useState('');
  const [items, setItems] = useState<LibraryItem[]>([]);
  const [selected, setSelected] = useState<LibraryItem | null>(null);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchActor, setSearchActor] = useState('');
  const [searchStudio, setSearchStudio] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [preview, setPreview] = useState<Preview | null>(null);
  const [queue, setQueue] = useState<ReviewItem[]>([]);
  const action = useAction();
  function apply(item: LibraryItem, result: Preview, candidate: Candidate) {
    void confirmModal({
      title: 'Apply StashDB match', confirmLabel: 'Apply match',
      body: `${item.label} → ${candidate.title}. Replace this video's available title, date, studio, cast, and cover with the StashDB match?`,
      onConfirm: async () => {
        const outcome = await apiSend<{ image_errors: string[] }>('/api/configuration/stashdb/apply', { asset_id: item.id, candidate_id: candidate.id, revision: result.revision });
        setQueue(current => current.filter(entry => entry.id !== item.id));
        if (selected?.id === item.id) setPreview(null);
        receipt(outcome.image_errors.length ? 'Match applied, but some artwork could not be downloaded.' : 'StashDB match applied');
      },
    });
  }
  function save(event: FormEvent) {
    event.preventDefault();
    if (!key.trim()) return;
    void action.run('save', signal => apiSend<StashDBPolicy>('/api/configuration/stashdb/settings', { api_key: key.trim() }, 'POST', signal), saved => {
      setPolicy(saved); setKey(''); receipt('StashDB key saved');
    });
  }
  return <>
  <Section title="Metadata sources">
    <Stack><div className={cardClass({ variant: 'outlined', padding: 'none', className: 'flex flex-col overflow-hidden' })}>
      <div className="flex flex-col gap-2 border-b border-separator-border px-6 py-5 last:border-b-0 max-sm:px-4">
      <div className="flex min-w-0 flex-wrap items-center gap-2">
        <b className="text-body-medium text-text-primary">StashDB</b>
        <Chip variant="caption" color={policy.api_key_set ? 'lime' : 'neutral'}>{policy.api_key_set ? 'Configured' : 'Optional'}</Chip>
      </div>
      <Disclosure summary={policy.api_key_set ? 'Edit credentials' : 'Enter credentials'}>
      <form onSubmit={save} className="flex flex-col gap-3">
      <Help>Search StashDB for library videos and apply matches.</Help>
      <Switch aria-label="Search StashDB during metadata scans" isSelected={policy.enabled}
        isDisabled={!policy.api_key_set || Boolean(action.busy)} onChange={enabled =>
          void action.run('enable', signal => apiSend<StashDBPolicy>('/api/configuration/stashdb/settings', { enabled }, 'POST', signal),
            saved => { setPolicy(saved); receipt(enabled ? 'StashDB scan enabled' : 'StashDB scan disabled'); })} />
      <Help>During metadata scans, automatically apply only a unique match with an exact title, studio, and release date from the filename. Other candidates remain available for review.</Help>
      <Input label="StashDB API key" type="password" autoComplete="new-password" value={key} onChange={setKey}
        placeholder={policy.api_key_set ? 'Key saved; leave blank to keep it' : 'Enter your API key'} />
      <a href="https://guidelines.stashdb.org/docs/faq_getting-started/stashdb/accessing-stashdb/" target="_blank" rel="noreferrer">Get a StashDB API key</a>
      {action.error ? <ErrorText>{action.error}</ErrorText> : null}
    <div className="flex flex-wrap items-center gap-2">
      <Button type="submit" disabled={!key.trim()} {...busyProps(action.busy === 'save')}>Save key</Button>
      <Button type="button" variant="secondary" disabled={!policy.api_key_set} {...busyProps(action.busy === 'check')}
        onClick={() => void action.run('check', signal => apiSend<{ok: boolean}>('/api/configuration/stashdb/check', {}, 'POST', signal),
          result => { if (!result.ok) throw new Error('StashDB account access is unavailable.'); receipt('StashDB connection successful'); })}>Test connection</Button>
      <Button type="button" variant="secondary" disabled={!policy.api_key_set} {...busyProps(action.busy === 'remove')}
        onClick={() => void action.run('remove', signal => apiSend<StashDBPolicy>('/api/configuration/stashdb/settings', { api_key: '', enabled: false }, 'POST', signal),
          saved => { setPolicy(saved); setPreview(null); receipt('StashDB key removed'); })}>Remove key</Button>
    </div></form></Disclosure></div></div></Stack>
  </Section>
  <Section title="StashDB matches">
    <Stack>
      <Button type="button" variant="secondary" {...busyProps(action.busy === 'queue')}
        onClick={() => void action.run('queue', signal => apiGet<ReviewItem[]>('/api/configuration/stashdb/review', signal), setQueue)}>Show scan candidates</Button>
      {queue.map(item => <article key={item.id} className="flex flex-col gap-2 rounded-lg border border-separator-border p-3">
        <strong data-i18n-ignore="">{item.label}</strong>
        {item.preview.truncated ? <Help>Search results were truncated; verify the source carefully.</Help> : null}
        {item.preview.candidates.map(candidate => <div key={candidate.id} className="flex flex-wrap items-center gap-2">
          <a href={candidate.url} target="_blank" rel="noreferrer" data-i18n-ignore="">{candidate.title} · {candidate.studio} · {candidate.date}</a>
          <Button type="button" variant="secondary" disabled={Boolean(action.busy)} onClick={() => apply(item, item.preview, candidate)}>Apply selected match</Button>
        </div>)}
      </article>)}
      <h3 className="text-body-medium text-text-primary">Manual match</h3>
      <Help>Find a library video, then search StashDB and choose a match.</Help>
      <Input label="Find a library video" value={query} onChange={setQuery} />
      <Button type="button" variant="secondary" {...busyProps(action.busy === 'library')}
        onClick={() => void action.run('library', signal => apiGet<LibraryItem[]>(`/api/configuration/stashdb/library?query=${encodeURIComponent(query)}`, signal), setItems)}>Find videos</Button>
      {items.map(item => <div key={item.id} className="flex flex-wrap items-center gap-2">
        <span data-i18n-ignore="">{item.label}</span>
        <Button type="button" variant="secondary" disabled={!policy.api_key_set || Boolean(action.busy)}
          onClick={() => { setSelected(item); setSearchTitle(''); setSearchActor(''); setSearchStudio(''); setSearchDate(''); setPreview(null) }}>Manual match</Button>
      </div>)}
      {selected ? <div className="flex flex-col gap-2 rounded-lg border border-separator-border p-3">
        <strong data-i18n-ignore="">{selected.label}</strong>
        <Input label="Title" value={searchTitle} onChange={setSearchTitle} placeholder="Leave all fields blank to use video details" />
        <Input label="Actor (optional)" value={searchActor} onChange={setSearchActor} />
        <Input label="Producer / studio" value={searchStudio} onChange={setSearchStudio} />
        <Input label="Release date" value={searchDate} onChange={setSearchDate} placeholder="YYYY, YYYY/MM, or YYYY/MM/DD" />
        <Button type="button" variant="secondary" {...busyProps(action.busy === 'preview')}
          onClick={() => void action.run('preview', signal => apiSend<Preview>('/api/configuration/stashdb/preview', {
            asset_id: selected.id, search_fields: { title: searchTitle.trim(), actor: searchActor.trim(), studio: searchStudio.trim(), date: searchDate.trim() },
          }, 'POST', signal), result => { setPreview(result); setQueue(current => current.filter(item => item.id !== selected.id)) })}>Search StashDB</Button>
        {preview ? <div className="flex flex-col gap-2"><Help>{preview.truncated ? 'Some results were omitted. Refine the search before deciding.' : 'Review the source before using a match.'}</Help>
          {preview.candidates.length ? preview.candidates.map(candidate => <div key={candidate.id} className="flex flex-wrap items-center gap-2">
            <a href={candidate.url} target="_blank" rel="noreferrer" data-i18n-ignore="">{candidate.title} · {candidate.studio} · {candidate.date}</a>
            <Button type="button" variant="secondary" disabled={Boolean(action.busy)} onClick={() => apply(selected, preview, candidate)}>Apply selected match</Button>
          </div>) : <Help>No candidates found. Try another title.</Help>}</div> : null}
      </div> : null}
      {action.error ? <ErrorText>{action.error}</ErrorText> : null}
    </Stack>
  </Section></>;
}
