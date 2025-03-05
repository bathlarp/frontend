'use client';

import { useRouter } from 'next/navigation';
import { InferType, object, string } from 'yup';

import { Form } from '@/_components/_interactive/_form/form';
import { WrappedInput } from '@/_components/_interactive/_form/input/wrappedInput';
import { setToast } from '@/_components/_layout/toast/toastProvider';
import { loginRequest } from '@/_data/auth';

export const SignInForm = () => {
  const router = useRouter();
  const schema = object({
    username: string().email().required().max(25),
    password: string().required().max(40),
  });

  interface Login extends InferType<typeof schema> {}

  const onSubmit = async (data: Login) => {
    const error = await loginRequest(data.username, data.password);
    if (error) {
      setToast(
        'error',
        'Something went wrong - check your details and try again.',
      );
      return;
    }
    router.push('/');
  };

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
