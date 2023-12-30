import { PropsWithChildren } from 'react';
import { DeepMap, FieldError, FieldValues, Path } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { InputProps } from './input/input';

export type InputWrapperProps<TFormValues extends FieldValues> = {
  name: string;
  label: string;
  helpText?: string;
  errorMessages?: Partial<DeepMap<TFormValues, FieldError>>[Path<TFormValues>];
} & Omit<InputProps, 'name'>;

export const InputWrapper = <TFormValues extends FieldValues>({
  name,
  label,
  helpText,
  errorMessages,
  children,
}: PropsWithChildren<InputWrapperProps<TFormValues>>) => {
  return (
    <>
      <label aria-label={name} htmlFor={name}>
        {label}
        {helpText && <span>{helpText}</span>}
        {children}
      </label>
      <ErrorMessage
        errors={errorMessages}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment -- this is due to some dodgy type logic
        name={name as any}
        render={({ message }) => (
          <p className="mt-1 block text-left font-serif text-sm text-red-600">
            {message}
          </p>
        )}
      />
    </>
  );
};
