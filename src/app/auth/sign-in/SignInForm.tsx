'use client';

import { InferType, object, string } from 'yup';

import { Form } from '@/_components/_interactive/_form/form';
import { WrappedInput } from '@/_components/_interactive/_form/input/wrappedInput';

export const SignInForm = () => {
  const schema = object({
    username: string().required().max(25),
    password: string().required().max(40),
  });

  interface Login extends InferType<typeof schema> {}

  const onSubmit = (data: Login) => console.log(data);

  return (
    <Form<Login> onSubmit={onSubmit} schema={schema}>
      <WrappedInput name={'username'} label={'Username'} id={'username'} />
      <WrappedInput
        name={'password'}
        label={'Password'}
        id={'password'}
        type={'password'}
      />
    </Form>
  );
};
