import {
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';
import { get } from 'lodash';

import { InputWrapper } from '../inputWrapper';

import { Multiselect, MultiselectOption } from './multiselect';

export type WrappedMultiselectProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  options: MultiselectOption[];
  label: string;
  rules?: RegisterOptions;
  className: string;
  helpText?: string;
  nullable?: boolean;
  multiSelect?: boolean;
};

export const WrappedMultiselect = <TFormValues extends FieldValues>({
  name,
  options,
  label,
  rules,
  className,
  helpText,
}: WrappedMultiselectProps<TFormValues>) => {
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
            <Multiselect {...field} options={options} hasError={hasError} />
          )}
        />
      </InputWrapper>
    </div>
  );
};
