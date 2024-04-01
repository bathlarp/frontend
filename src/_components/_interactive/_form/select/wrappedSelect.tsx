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

import { Select, SelectProps } from './select';

export type WrappedSelectProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  helpText?: string;
} & Omit<SelectProps, 'name'>;

export const WrappedSelect = <TFormValues extends FieldValues>({
  name,
  rules,
  label,
  helpText,
  className,
  ...props
}: WrappedSelectProps<TFormValues>): JSX.Element => {
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
        <Select
          aria-invalid={hasError}
          className={classNames({
            [defaultErrorStyles]: hasError,
          })}
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
