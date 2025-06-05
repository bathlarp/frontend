'use server';

import { cache } from 'react';
import { SessionAttributes } from '@bathlarp/api-client';
import { HttpStatusCode } from 'axios';
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

export const getWithAuthCheck = async <T>(
  fn: () => Promise<Data<T> | DataError>,
): Promise<T> => {
  let result = await fn();
  if (isError(result)) {
    if (result.error !== HttpStatusCode.Unauthorized) {
      redirect('/sign-in');
    }
    const token = await updateSessionRequest();
    if (isError(token)) {
      redirect('/sign-in');
    }
    const session = await getIronSession<SessionAttributes>(
      cookies(),
      sessionOptions,
    );

    session.access_token = token.data.access_token;
    session.renewal_token = token.data.renewal_token;

    await session.save();
    result = await fn();
    if (isError(result)) {
      redirect('/sign-in');
    }
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
