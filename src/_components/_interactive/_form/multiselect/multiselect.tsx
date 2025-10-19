import { FC, forwardRef, useState } from 'react';
import { Combobox } from '@headlessui/react';

import { Icon } from '../../../_display/icon/icon';
import { defaultStyles } from '../formConsts';

export type MultiselectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type MultiselectProps = {
  name: string;
  options: MultiselectOption[];
  hasError: boolean;
  onChange: (value: (string | number)[]) => void;
  value: (string | number)[];
};

export const Multiselect: FC<MultiselectProps> = forwardRef<
  HTMLDivElement,
  MultiselectProps
>(({ name, options, hasError, onChange, value }, ref) => {
  const [query, setQuery] = useState('');

  const filterOptions =
    query === ''
      ? options
      : options.filter((option) => {
          return option.label.toLowerCase().includes(query.toLowerCase());
        });

  const removeFromMultiselect = (item: string | number) => {
    const newList = value.filter((val) => val !== item);
    onChange(newList);
  };

  return (
    <div aria-invalid={hasError} ref={ref}>
      <Combobox value={value} onChange={onChange} name={name} nullable multiple>
        <Combobox.Input
          onChange={(event) => setQuery(event.target.value)}
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
      {value.length > 0 && (
        <div className="flex flex-wrap">
          {value.map((val: string | number) => {
            const option = options.find((o) => o.value === val);
            if (!option) {
              return <></>;
            }
            return (
              <div
                key={val}
                className="mr-2 mt-2 flex items-center rounded-full bg-primary px-2 text-standout"
              >
                <span className="mr-2">{option.label}</span>
                <button onClick={() => removeFromMultiselect(val)}>
                  <Icon
                    iconName={'close'}
                    fillColour={'standout'}
                    classes="h-5"
                  />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
});

Multiselect.displayName = 'Multiselect';
