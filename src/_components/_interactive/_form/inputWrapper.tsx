import { PropsWithChildren } from 'react';
import { FieldErrors, FieldValues, Path } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

export type InputWrapperProps<TFormValues extends FieldValues> = {
  name: string;
  label: string;
  direction?: 'above' | 'below' | 'before' | 'after';
  helpText?: string;
  errors?: FieldErrors<FieldValues>[Path<TFormValues>];
};

export const InputWrapper = <TFormValues extends FieldValues>({
  name,
  label,
  direction = 'above',
  helpText,
  errors: errorMessages,
  children,
}: PropsWithChildren<InputWrapperProps<TFormValues>>) => {
  let wrapperClasses = '';
  let labelClasses = '';

  switch (direction) {
    case 'above':
      wrapperClasses = 'flex flex-col';
      labelClasses = 'mb-2';
      break;
    case 'below':
      wrapperClasses = 'flex flex-col-reverse';
      labelClasses = 'mt-2';
      break;
    case 'before':
      wrapperClasses = 'flex flex-row items-center justify-start';
      labelClasses = 'mr-2';
      break;
    case 'after':
      wrapperClasses = 'flex flex-row-reverse items-center justify-end';
      labelClasses = 'ml-2';
      break;
  }

  return (
    <>
      <div className={wrapperClasses}>
        <label aria-label={name} htmlFor={name} className={labelClasses}>
          {label}
        </label>
        {children}
      </div>
      {helpText && <p className="text-sm">{helpText}</p>}
      <ErrorMessage
        errors={errorMessages}
        name={name}
        render={({ messages }) =>
          messages && (
            <ul className="list-inside list-disc">
              {Object.entries(messages).map(([type, message]) => (
                <li className="text-sm text-error" key={type}>
                  {message}
                </li>
              ))}
            </ul>
          )
        }
      />
    </>
  );
};
