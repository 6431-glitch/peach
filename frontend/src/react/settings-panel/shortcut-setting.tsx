/* 「SFW 快捷键」一行：显示当前绑定，点「更改」后按下新的组合键记下来。
 *
 * 录制期间在 window 捕获阶段收走每一次按键：同一下不能再落到壳的全局监听里切 SFW、关设置弹层
 * 或触发播放器快捷键。Esc 取消，焦点离开按钮也取消。规则与显示见 `../../keyboard-shortcut.ts`。 */
import { useEffect, useState } from 'react';
import { Button } from '@/components/base/buttons/button';
import { Kbd } from '@/components/base/kbd/kbd';
import { DEFAULT_SFW_SHORTCUT, formatShortcut, recordShortcut, serializeShortcut, type Shortcut } from '../../keyboard-shortcut';

export function ShortcutSetting({ current, onChange }: { current: Shortcut; onChange(shortcut: Shortcut | null): void }) {
  const [recording, setRecording] = useState(false);
  const [problem, setProblem] = useState('');
  useEffect(() => {
    if (!recording) return undefined;
    const keydown = (event: KeyboardEvent) => {
      event.preventDefault();
      event.stopPropagation();
      if (event.key === 'Escape' && !event.ctrlKey && !event.altKey && !event.shiftKey && !event.metaKey) {
        setRecording(false); setProblem(''); return;
      }
      const result = recordShortcut(event);
      if (result.state === 'invalid') setProblem(result.problem);
      if (result.state === 'done') { onChange(result.shortcut); setRecording(false); setProblem('') }
    };
    window.addEventListener('keydown', keydown, true);
    return () => window.removeEventListener('keydown', keydown, true);
  }, [recording, onChange]);
  const custom = serializeShortcut(current) !== DEFAULT_SFW_SHORTCUT;
  const hint = recording ? (problem || '按下新的组合键，Esc 取消') : '不在输入框里时按下，即可开关 SFW 模式。';
  return (
    <div data-setting-row="">
      <span><b>SFW 快捷键</b><small id="sfwShortcutDescription" aria-live="polite">{hint}</small></span>
      <div data-setting-shortcut="" className="peach-react">
        <Kbd aria-label={`当前快捷键 ${formatShortcut(current)}`}>{formatShortcut(current)}</Kbd>
        {custom && !recording ? (
          <Button variant="secondary" size="small" onClick={() => onChange(null)}>恢复默认</Button>
        ) : null}
        <Button variant={recording ? 'secondary' : 'primary'} size="small" aria-describedby="sfwShortcutDescription"
          onClick={() => { setRecording(!recording); setProblem('') }}
          onBlur={() => { setRecording(false); setProblem('') }}>
          {recording ? '取消' : '更改'}
        </Button>
      </div>
    </div>
  );
}
