import { PropsWithChildren } from 'react';
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AnyObjectSchema } from 'yup';

import { Button } from '../button/button';

type FormProps<TFormValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  onError?: SubmitErrorHandler<TFormValues>;
  onBack?: () => void;
  defaultValues?: DefaultValues<TFormValues>;
  submitLabel?: string;
  backLabel?: string;
  schema?: AnyObjectSchema; // Bug in yupResolver, currently with devs - should be ObjectSchema<TFormValues>
};

export const Form = <TFormValues extends FieldValues>({
  onSubmit,
  onError,
  onBack,
  defaultValues,
  schema,
  submitLabel = 'Submit',
  backLabel = 'Back',
  children,
}: PropsWithChildren<FormProps<TFormValues>>) => {
  const resolver = !!schema ? yupResolver(schema) : undefined;

  const methods = useForm<TFormValues>({
    defaultValues,
    criteriaMode: 'all',
    reValidateMode: 'onChange',
    mode: 'onChange',
    resolver,
  });

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises -- limitation of form handlers
    <form onSubmit={methods.handleSubmit(onSubmit, onError)} noValidate>
      <FormProvider {...methods}>
        <div className="flex flex-col gap-4">
          {children}
          <div className="mt-4 flex flex-row justify-between">
            {!!onBack && (
              <Button
                type="button"
                theme="secondary"
                label={backLabel}
                classes="mt-2"
              />
            )}
            <Button type="submit" label={submitLabel} />
          </div>
        </div>
      </FormProvider>
    </form>
  );
};
