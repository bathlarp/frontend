import { DetailedHTMLProps, FC, forwardRef, SelectHTMLAttributes } from 'react';
import classNames from 'classnames';

import { defaultStyles } from '../formConsts';

export type SelectOption = {
  value: string;
  label: string;
  className?: string;
  disabled?: boolean;
};

export type SelectGroup = {
  label: string;
  options: SelectOption[];
};

export type SelectProps = {
  id: string;
  name: string;
  label: string;
  options: SelectGroup[];
  className?: string;
} & DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

export const Select: FC<SelectProps> = forwardRef<
  HTMLSelectElement,
  SelectProps
>(({ id, name, label, options, className = '', ...props }, ref) => {
  return (
    <select
      id={id}
      ref={ref}
      name={name}
      aria-label={label}
      className={classNames([defaultStyles, className])}
      {...props}
    >
      {options.length === 1 &&
        options.map((group) =>
          group.options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className={option.className}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          )),
        )}
      {options.length > 1 &&
        options.map((group) => (
          <optgroup label={group.label} key={group.label}>
            {group.options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className={option.className}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </optgroup>
        ))}
    </select>
  );
});

Select.displayName = 'Select';
