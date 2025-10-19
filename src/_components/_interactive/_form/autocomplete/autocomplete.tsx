import { FC, forwardRef, useState } from 'react';
import { Combobox } from '@headlessui/react';

import { defaultStyles } from '../formConsts';

export type AutoCompleteOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type AutoCompleteProps = {
  name: string;
  options: AutoCompleteOption[];
  hasError: boolean;
  onChange: (value: string) => void;
  value: string;
};

export const AutoComplete: FC<AutoCompleteProps> = forwardRef<
  HTMLDivElement,
  AutoCompleteProps
>(({ name, options, hasError, onChange, value }, ref) => {
  const [query, setQuery] = useState('');

  const filterOptions =
    query === ''
      ? options
      : options.filter((option) => {
          return option.label.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div aria-invalid={hasError} ref={ref}>
      <Combobox value={value} onChange={onChange} name={name} nullable>
        <Combobox.Input
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(value: string) => {
            return options.find((o) => o.value === value)?.label ?? '';
          }}
          className={defaultStyles}
        />
        <Combobox.Options className="absolute z-50 overflow-scroll bg-standout">
          {filterOptions.map((option) => (
            <Combobox.Option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              className="w-full"
            >
              {({ active, selected }) => (
                <span
                  className={`block w-full px-2 py-1${
                    active ? ' bg-background' : ''
                  }${selected ? ' bg-primary font-black text-standout' : ''}${
                    option.disabled ? ' text-gray-500 line-through' : ''
                  }`}
                >
                  {option.label}
                </span>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
});

AutoComplete.displayName = 'AutoComplete';
