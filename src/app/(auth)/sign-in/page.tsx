import type { Metadata } from 'next';

import { SignInForm } from './SignInForm';

export const metadata: Metadata = {
  title: 'Sign in - BathLARP',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignIn() {
  return (
    <>
      <h1>Sign in</h1>
      <SignInForm />
    </>
  );
}
