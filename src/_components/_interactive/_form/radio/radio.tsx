import { DetailedHTMLProps, FC, forwardRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import { defaultStyles } from '../formConsts';

export type RadioProps = {
  id: string;
  name: string;
  label: string;
  className?: string;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'size'
>;

export const Radio: FC<RadioProps> = forwardRef<HTMLInputElement, RadioProps>(
  ({ id, name, label, className = '', ...props }, ref) => {
    const radioStyles = 'rounded-full mr-2';
    return (
      <div className="flex flex-row items-center justify-start">
        <input
          id={id}
          ref={ref}
          type={'radio'}
          name={name}
          aria-label={label}
          className={classNames([defaultStyles, radioStyles, className])}
          {...props}
        />
        <label aria-label={name} htmlFor={name}>
          {label}
        </label>
      </div>
    );
  },
);

Radio.displayName = 'Radio';
