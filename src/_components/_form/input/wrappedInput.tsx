import React from 'react';
import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';
import classNames from 'classnames';
import { get } from 'lodash';

import { InputWrapper } from '../inputWrapper';

import { Input, InputProps } from './input';

export type WrappedInputProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
  helpText?: string;
} & Omit<InputProps, 'name'>;

export const WrappedInput = <TFormValues extends FieldValues>({
  name,
  id,
  register,
  rules,
  errors,
  label,
  helpText,
  className,
  ...props
}: WrappedInputProps<TFormValues>): JSX.Element => {
  const errorMessages = get(errors, name);
  const hasError = !!(errors && errorMessages);

  return (
    <div className={className} aria-live="polite">
      <InputWrapper
        name={name}
        id={id}
        label={label}
        errorMessages={errorMessages}
        helpText={helpText}
      >
        <Input
          name={name}
          id={id}
          aria-invalid={hasError}
          className={classNames({
            'transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 border-red-600 hover:border-red-600 focus:border-red-600 focus:ring-red-600':
              hasError,
          })}
          label={label}
          {...props}
          {...(register && register(name, rules))}
        />
      </InputWrapper>
    </div>
  );
};
