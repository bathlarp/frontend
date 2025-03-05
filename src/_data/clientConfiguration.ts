import { Configuration } from '@bathlarp/api-client';
import { SessionOptions } from 'iron-session';

export const configuration = new Configuration({
  basePath: process.env.API_BASE_PATH,
});

const authCookie = 'bathlauth';

export const sessionOptions: SessionOptions = {
  cookieName: authCookie,
  password: process.env.AUTH_KEY,
  ttl: 2592000,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'development' ? false : true,
  },
};

export const buildAuthHeader = (token: string) => {
  return {
    Authorization: `Bearer ${token}`,
  };
};

export type Data<T> = {
  data: T;
};

export type DataError = {
  error: string | number;
};

export const isError = <T>(input: Data<T> | DataError): input is DataError => {
  return (input as DataError).error !== undefined;
};
