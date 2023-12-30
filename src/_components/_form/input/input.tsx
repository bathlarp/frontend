import React, {
  DetailedHTMLProps,
  FC,
  forwardRef,
  InputHTMLAttributes,
} from 'react';
import classNames from 'classnames';

import { defaultStyles, InputSize, sizeMap } from '../formConsts';

export type InputType =
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'month'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
  | 'hidden';

export type InputProps = {
  id: string;
  name: string;
  label: string;
  type?: InputType;
  size?: InputSize;
  className?: string;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'size'
>;

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      name,
      label,
      type = 'text',
      size = 'medium',
      className = '',
      placeholder,
      ...props
    },
    ref,
  ) => {
    return (
      <input
        id={id}
        ref={ref}
        name={name}
        type={type}
        aria-label={label}
        placeholder={placeholder}
        className={classNames([defaultStyles, sizeMap[size], className])}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';
