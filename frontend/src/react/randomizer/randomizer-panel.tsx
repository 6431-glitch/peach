import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { ModalFrame } from '../components/modal-frame';
import { SettingsDialogClose } from '../components/settings-dialog-close';
import type { ShellActions } from '../router/shell-actions';
import { RandomizerPage } from './randomizer-page';

export function RandomizerPanel({ actions }: { actions: ShellActions }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const button = document.getElementById('randomizerBtn') as HTMLButtonElement | null;
    if (!button) return;
    button.hidden = location.pathname !== '/';
    const show = () => setOpen(true);
    button.addEventListener('click', show);
    return () => { button.removeEventListener('click', show); button.hidden = true };
  }, [location.pathname]);
  return <ModalFrame isOpen={open} onOpenChange={setOpen} width="form" label="Randomizer">
    <header className="flex items-center justify-end px-4 pt-4">
      <SettingsDialogClose label="Close randomizer" onPress={() => setOpen(false)} />
    </header>
    <RandomizerPage openItem={id => { setOpen(false); actions.openItem(id) }}
      openEntity={(kind, name) => { setOpen(false); actions.openEntity(kind, name) }} />
  </ModalFrame>;
}
