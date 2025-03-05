'use client';

import { FunctionComponent } from 'react';
import Link from 'next/link';

import { logoutRequest } from '@/_data/auth';

interface AuthProps {
  isLoggedIn: boolean;
}

export const Auth: FunctionComponent<AuthProps> = ({ isLoggedIn }) => {
  return isLoggedIn ? (
    <Link href="/" onClick={() => void logoutRequest()}>
      Sign out
    </Link>
  ) : (
    <>
      <Link href="/sign-in">Sign in</Link>
      <span>/</span>
      <Link href="/sign-up">Sign up</Link>
    </>
  );
};
