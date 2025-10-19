'use server';

import { PronounsApi, PronounsResource } from '@bathlarp/api-client';
import { AxiosError } from 'axios';

import {
  buildAuthHeader,
  configuration,
  Data,
  DataError,
} from './clientConfiguration';

const pronounsApi = new PronounsApi(configuration);

export const getPronouns = async (
  accessToken: string,
): Promise<Data<PronounsResource[]> | DataError> => {
  const headers = buildAuthHeader(accessToken);

  try {
    const response = await pronounsApi.listPronouns({ headers });
    return { data: response.data.data ?? [] };
  } catch (err) {
    const error = err as AxiosError;
    return { error: error.status ?? error.message };
  }
};
