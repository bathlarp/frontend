import {
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';
import { get } from 'lodash';

import { InputWrapper } from '../inputWrapper';

import { AutoComplete, AutoCompleteOption } from './autocomplete';

export type WrappedAutoCompleteProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  options: AutoCompleteOption[];
  label: string;
  rules?: RegisterOptions;
  className: string;
  helpText?: string;
  nullable?: boolean;
  multiSelect?: boolean;
};

export const WrappedAutoComplete = <TFormValues extends FieldValues>({
  name,
  options,
  label,
  rules,
  className,
  helpText,
}: WrappedAutoCompleteProps<TFormValues>) => {
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
            <AutoComplete {...field} options={options} hasError={hasError} />
          )}
        />
      </InputWrapper>
    </div>
  );
};
