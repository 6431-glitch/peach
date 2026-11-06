/* 首次设置与配置页共用的选择字段和固定前后缀输入。 */
import type { ReactNode } from 'react';
import { Radio } from 'react-aria-components';
import { Input, type InputProps } from '@/components/base/input/input';
import { Label } from '@/components/base/input/label';
import { SEGMENT, SEGMENTED_TRACK, SegmentedRadioGroup } from './segmented';
import { cx } from '@/utils/cx';

export function ConfigurationChoice({ id, label, value, onChange, options, isDisabled, isInvalid, children }: {
  id: string; label: string; value: string; onChange(value: string): void;
  options: readonly { value: string; label: string }[];
  isDisabled?: boolean; isInvalid?: boolean; children?: ReactNode;
}) {
  const labelId = `${id}-label`;
  return <div className="flex flex-col gap-1.5">
    <Label id={labelId} elementType="span">{label}</Label>
    <SegmentedRadioGroup id={id} aria-labelledby={labelId} orientation="horizontal" className={SEGMENTED_TRACK}
      value={value} onChange={onChange} isDisabled={isDisabled} isInvalid={isInvalid}>
      {options.map(option => <Radio key={option.value} value={option.value} className={SEGMENT}>{option.label}</Radio>)}
    </SegmentedRadioGroup>
    {children}
  </div>;
}

export function ConfigurationInput({ prefix, suffix, unit, fieldClassName, ...props }: Omit<InputProps, 'leadingAddon' | 'trailingIcon'> & {
  prefix?: string; suffix?: string; unit?: string;
}) {
  const Suffix = () => <span aria-hidden={unit ? true : undefined} className={cx('shrink-0 text-body-regular text-text-secondary',
    unit ? 'flex h-full items-center border-l border-border-button-default px-2' : 'pr-1')}>{unit || suffix}</span>;
  return <Input {...props}
    fieldClassName={cx(unit && 'border border-border-button-default py-0 pr-0 [&>div]:h-full', fieldClassName)}
    leadingAddon={prefix ? <span className="shrink-0 pl-1 text-body-regular text-text-secondary">{prefix}</span> : undefined}
    trailingIcon={unit || suffix ? Suffix : undefined} />;
}
