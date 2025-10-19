import {
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';
import { get } from 'lodash';

import { InputWrapper } from '../inputWrapper';

import { MarkdownEditor } from './markdownEditor';

export type WrappedMarkdownEditorProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  label: string;
  rules?: RegisterOptions;
  className?: string;
  helpText?: string;
};

export const WrappedMarkdownEditor = <TFormValues extends FieldValues>({
  name,
  label,
  rules,
  className,
  helpText,
}: WrappedMarkdownEditorProps<TFormValues>) => {
  const {
    control,
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
        <Controller<TFormValues>
          name={name}
          control={control}
          rules={rules}
          render={({ field }) => (
            <MarkdownEditor {...field} hasError={hasError} markdown={''} />
          )}
        />
      </InputWrapper>
    </div>
  );
};
