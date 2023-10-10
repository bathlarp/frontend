import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

type InputProps<T extends FieldValues> = {
  field: Path<T>;
  register: UseFormRegister<T>;
  required: boolean;
  label: string;
  helpText?: string;
  errors?: FieldError;
  type:
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
    | 'hidden';
};

export const Input = <T extends FieldValues>({
  field,
  label,
  helpText,
  register,
  required,
  type,
  errors,
}: InputProps<T>) => (
  <>
    <label aria-label={field}>
      {label}
      {helpText && <span>{helpText}</span>}
      <input
        aria-labelledby={field}
        type={type}
        {...register(field, { required })}
      />
    </label>
    {errors?.type === 'required' && <p role="alert">{label} is required</p>}
    {errors && errors.type !== 'required' && (
      <p role="alert">{errors.message}</p>
    )}
  </>
);
