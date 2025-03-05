'use server';

import {
  AccountsApi,
  CreateAccountAttributes,
  CreateAccountConfirmationRequest,
  CreateAccountRequest,
} from '@bathlarp/api-client';
import { AxiosError } from 'axios';

import { configuration } from './clientConfiguration';

const accountsApi = new AccountsApi(configuration);

export const signUpRequest = async (data: CreateAccountAttributes) => {
  const request: CreateAccountRequest = {
    data: {
      attributes: data,
      type: 'account',
    },
  };
  try {
    const response = await accountsApi.createAccount(request);
    return { data: response.data.data?.attributes.next_step };
  } catch (err) {
    const error = err as AxiosError;
    return { error: error.message };
  }
};

export const confirmRequest = async (id: string, token: string) => {
  const request: CreateAccountConfirmationRequest = {
    data: {
      attributes: { token },
      type: 'account-confirmation',
    },
  };
  try {
    const response = await accountsApi.createAccountConfirmation(id, request);
    return { data: response.data.data?.id };
  } catch (err) {
    const error = err as AxiosError;
    return { error: error.message };
  }
};
