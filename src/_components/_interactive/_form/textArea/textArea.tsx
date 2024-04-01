import React, {
  DetailedHTMLProps,
  FC,
  forwardRef,
  InputHTMLAttributes,
} from 'react';
import classNames from 'classnames';

import { defaultStyles, InputSize, sizeMap } from '../formConsts';

export type TextAreaProps = {
  id: string;
  name: string;
  label: string;
  size?: InputSize;
  className?: string;
} & Omit<
  DetailedHTMLProps<
    InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
  'size'
>;

export const TextArea: FC<TextAreaProps> = forwardRef<
  HTMLTextAreaElement,
  TextAreaProps
>(
  (
    { id, name, label, size = 'medium', className = '', placeholder, ...props },
    ref,
  ) => {
    return (
      <textarea
        id={id}
        ref={ref}
        name={name}
        aria-label={label}
        placeholder={placeholder}
        className={classNames([defaultStyles, sizeMap[size], className])}
        {...props}
      />
    );
  },
);

TextArea.displayName = 'TextArea';
