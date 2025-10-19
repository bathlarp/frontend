'use server';

import { cache } from 'react';
import { SessionAttributes } from '@bathlarp/api-client';
import { Mutex } from 'async-mutex';
import { add } from 'date-fns';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { updateSessionRequest } from './auth';
import {
  Data,
  DataError,
  isError,
  sessionOptions,
} from './clientConfiguration';

const tokenRenewalMutex = new Mutex();

export const getWithAuthCheck = async <T>(
  fn: (accessToken: string) => Promise<Data<T> | DataError>,
): Promise<T> => {
  if (tokenRenewalMutex.isLocked()) {
    await tokenRenewalMutex.waitForUnlock();
  }

  const session = await getIronSession<SessionAttributes>(
    cookies(),
    sessionOptions,
  );

  if (add(new Date(session.access_expiry!), { seconds: 30 }) <= new Date()) {
    try {
      await tokenRenewalMutex.acquire();
      const token = await updateSessionRequest();
      if (isError(token)) {
        session.destroy();
        redirect('/sign-in');
      }
      session.access_token = token.data.access_token;
      session.renewal_token = token.data.renewal_token;

      await session.save();
    } finally {
      tokenRenewalMutex.release();
    }
  }

  const result = await fn(session.access_token);
  if (isError(result)) {
    redirect('/sign-in');
  }

  return result.data;
};

export const verifySession = cache(async () => {
  const session = await getIronSession<SessionAttributes>(
    cookies(),
    sessionOptions,
  );

  if (!session?.access_token) {
    redirect('/sign-in');
  }

  // ToDo: Replace with actual auth verification.
  return { isAuth: true, userId: 'Judith' };
});
