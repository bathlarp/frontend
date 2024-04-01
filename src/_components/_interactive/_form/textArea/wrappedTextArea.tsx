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

import { TextArea, TextAreaProps } from './textArea';

export type WrappedTextAreaProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
  helpText?: string;
} & Omit<TextAreaProps, 'name'>;

export const WrappedTextArea = <TFormValues extends FieldValues>({
  name,
  rules,
  label,
  helpText,
  className,
  ...props
}: WrappedTextAreaProps<TFormValues>): JSX.Element => {
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
        <TextArea
          aria-invalid={hasError}
          className={classNames({
            [defaultErrorStyles]: hasError,
          })}
          label={label}
          {...props}
          {...(register && register(name, rules))}
          name={name}
          id={name}
        />
      </InputWrapper>
    </div>
  );
};
