'use client';

import { useRouter } from 'next/navigation';
import { InferType, object, string } from 'yup';

import { WrappedCheckbox } from '@/_components/_interactive/_form/checkbox/wrappedCheckbox';
import { Form } from '@/_components/_interactive/_form/form';
import { WrappedInput } from '@/_components/_interactive/_form/input/wrappedInput';
import { setToast } from '@/_components/_layout/toast/toastProvider';
import { signUpRequest } from '@/_data/account';

export const SignUpForm = () => {
  const router = useRouter();

  const schema = object({
    email: string().required().email(),
    password: string().required().min(8).max(40),
    isOverEighteen: string().required(),
    isCodeOfConduct: string().required(),
  });

  interface Register extends InferType<typeof schema> {}

  const onSubmit = async (data: Register) => {
    if (data.isCodeOfConduct === 'yes' && data.isOverEighteen === 'yes') {
      const signUp = await signUpRequest(data);
      if (!!signUp.data) {
        setToast('success', signUp.data);
        router.push('/');
      }
      if (!!signUp.error) {
        setToast('error', signUp.error);
      }
    }
  };

  return (
    <Form<Register> onSubmit={onSubmit} schema={schema}>
      <WrappedInput
        name={'email'}
        label={'Email'}
        id={'email'}
        type={'email'}
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
