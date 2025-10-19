import type { Metadata } from 'next';

import { SignUpForm } from './SignUpForm';

export const metadata: Metadata = {
  title: 'Sign up - BathLARP',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignUp() {
  return (
    <>
      <h1>Sign up</h1>
      <SignUpForm />
    </>
  );
}
