import React from 'react';
import {
  FieldValues,
  Path,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';
import classNames from 'classnames';
import { get } from 'lodash';

import { defaultErrorStyles } from '../formConsts';
import { InputWrapper } from '../inputWrapper';

import { Input, InputProps } from './input';

export type WrappedInputProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  helpText?: string;
} & Omit<InputProps, 'name'>;

export const WrappedInput = <TFormValues extends FieldValues>({
  name,
  rules,
  label,
  helpText,
  className,
  ...props
}: WrappedInputProps<TFormValues>): JSX.Element => {
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
      >
        <Input
          aria-invalid={hasError}
          className={classNames(
            {
              [defaultErrorStyles]: hasError,
            },
            'max-w-96',
          )}
          label={label}
          {...register(name, rules)}
          {...props}
          name={name}
          id={name}
        />
      </InputWrapper>
    </div>
  );
};
