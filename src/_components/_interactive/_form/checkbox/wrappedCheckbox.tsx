import React from 'react';
import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  useFormContext,
  UseFormRegister,
} from 'react-hook-form';
import classNames from 'classnames';
import { get } from 'lodash';

import { defaultErrorStyles } from '../formConsts';
import { InputWrapper } from '../inputWrapper';

import { Checkbox, CheckboxProps } from './checkbox';

export type CheckboxOption = {
  label: string;
  value: string;
  className?: string;
  disabled?: boolean;
};

export type WrappedCheckboxProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  options: CheckboxOption[];
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
  helpText?: string;
} & Omit<CheckboxProps, 'name'>;

export const WrappedCheckbox = <TFormValues extends FieldValues>({
  name,
  options,
  rules,
  label,
  helpText,
  className,
  ...props
}: WrappedCheckboxProps<TFormValues>): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useFormContext<TFormValues>();

  const errorMessages = get(errors, name);
  const hasError = !!(errors && errorMessages);

  return (
    <div className={className} aria-live="polite">
      <InputWrapper<TFormValues>
        name={name}
        label={label}
        errors={errors}
        helpText={helpText}
        direction="after"
      >
        <div className="flex flex-col">
          {options.map((option) => (
            <Checkbox
              key={`${name}-${option.value}`}
              aria-invalid={hasError}
              className={classNames([
                {
                  [defaultErrorStyles]: hasError,
                },
                option.className,
              ])}
              label={option.label}
              value={option.value}
              {...props}
              {...(register && register(name, rules))}
              name={name}
              id={`${name}-${option.value}`}
            />
          ))}
        </div>
      </InputWrapper>
    </div>
  );
};
