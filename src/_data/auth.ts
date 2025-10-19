'use server';

import {
  CreateSessionRequest,
  SessionAttributes,
  SessionsApi,
  UpdateSessionRequest,
} from '@bathlarp/api-client';
import { AxiosError } from 'axios';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

import {
  buildAuthHeader,
  configuration,
  Data,
  DataError,
  sessionOptions,
} from './clientConfiguration';

const sessionApi = new SessionsApi(configuration);

export const loginRequest = async (
  email: string,
  password: string,
): Promise<Data<string> | DataError> => {
  const request: CreateSessionRequest = {
    data: {
      attributes: { email, password },
      type: 'session',
    },
  };

  const session = await getIronSession<SessionAttributes>(
    cookies(),
    sessionOptions,
  );

  try {
    const response = await sessionApi.createSession(request);
    const data = response.data.data?.attributes;
    if (!data) {
      return { error: 'Missing data' };
    }
    session.access_token = data.access_token;
    session.renewal_token = data.renewal_token;
    session.access_expiry = data.access_expiry;

    await session.save();
    return { data: 'OK' };
  } catch (err) {
    const error = err as AxiosError;
    return { error: error.message };
  }
};

export const updateSessionRequest = async (): Promise<
  Data<SessionAttributes> | DataError
> => {
  const request: UpdateSessionRequest = {
    data: {
      id: '543d23f5-a711-4ae1-928d-277ca36177be',
      type: 'session',
    },
  };

  const session = await getIronSession<SessionAttributes>(
    cookies(),
    sessionOptions,
  );

  if (!session?.renewal_token) {
    return { error: 'SessionError' };
  }
  const headers = buildAuthHeader(session.renewal_token);

  try {
    const response = await sessionApi.updateSession(request, { headers });
    const data = response.data.data?.attributes;
    if (!data) {
      return { error: 'Missing data' };
    }
    return { data };
  } catch (err) {
    const error = err as AxiosError;
    return { error: error.status ?? error.message };
  }
};

export const logoutRequest = async (): Promise<Data<string> | DataError> => {
  const session = await getIronSession<SessionAttributes>(
    cookies(),
    sessionOptions,
  );

  const headers = buildAuthHeader(session.access_token);

  try {
    await sessionApi.deleteSession({ headers });
    session.destroy();
    return { data: 'OK' };
  } catch (err) {
    const error = err as AxiosError;
    return { error: error.message };
  }
};
