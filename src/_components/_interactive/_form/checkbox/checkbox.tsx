import { DetailedHTMLProps, FC, forwardRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import { defaultStyles } from '../formConsts';

export type CheckboxProps = {
  id: string;
  name: string;
  label: string;
  className?: string;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'size'
>;

export const Checkbox: FC<CheckboxProps> = forwardRef<
  HTMLInputElement,
  CheckboxProps
>(({ id, name, label, className = '', ...props }, ref) => {
  return (
    <div className="flex flex-row items-center justify-start">
      <input
        id={id}
        ref={ref}
        type={'checkbox'}
        name={name}
        aria-label={label}
        className={classNames([defaultStyles, className])}
        {...props}
      />
      <label aria-label={name} htmlFor={name} className="ml-2">
        {label}
      </label>
    </div>
  );
});

Checkbox.displayName = 'Checkbox';
