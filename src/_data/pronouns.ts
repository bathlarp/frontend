'use server';

import {
  PronounsApi,
  PronounsResource,
  SessionAttributes,
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

const pronounsApi = new PronounsApi(configuration);

export const getPronouns = async (): Promise<
  Data<PronounsResource[]> | DataError
> => {
  const session = await getIronSession<SessionAttributes>(
    cookies(),
    sessionOptions,
  );

  const headers = buildAuthHeader(session.access_token);

  try {
    const response = await pronounsApi.listPronouns({ headers });
    return { data: response.data.data ?? [] };
  } catch (err) {
    const error = err as AxiosError;
    return { error: error.status ?? error.message };
  }
};
