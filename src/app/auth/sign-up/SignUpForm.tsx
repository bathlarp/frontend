'use client';

import { array, InferType, object, string } from 'yup';

import { WrappedCheckbox } from '@/_components/_interactive/_form/checkbox/wrappedCheckbox';
import { Form } from '@/_components/_interactive/_form/form';
import { WrappedInput } from '@/_components/_interactive/_form/input/wrappedInput';

export const SignUpForm = () => {
  const schema = object({
    username: string().required().max(25),
    displayName: string().required().max(25),
    password: string().required().max(40),
    isOverEighteen: array().required(),
    isCodeOfConduct: array().required(),
  });

  interface Register extends InferType<typeof schema> {}

  const onSubmit = (data: Register) => console.log(data);

  return (
    <Form<Register> onSubmit={onSubmit} schema={schema}>
      <WrappedInput name={'username'} label={'Username'} id={'username'} />
      <WrappedInput
        name={'displayName'}
        label={'Display name'}
        id={'displayName'}
      />
      <WrappedInput
        name={'password'}
        label={'Password'}
        id={'password'}
        type={'password'}
      />
      <WrappedCheckbox
        name={'isOverEighteen'}
        options={[{ label: 'I am over 18', value: 'yes' }]}
        label={''}
        id={'isOverEighteen'}
      />
      <WrappedCheckbox
        name={'isCodeOfConduct'}
        options={[
          {
            label: 'I agree to abide by the BathLARP Code of Conduct',
            value: 'yes',
          },
        ]}
        label={''}
        id={'isCodeOfConduct'}
      />
    </Form>
  );
};
