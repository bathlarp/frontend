export type InputSize = 'medium' | 'large';

export const defaultStyles =
  'relative inline-flex w-full rounded leading-none transition-colors ease-in-out placeholder-gray-500 text-gray-700 bg-gray-50 border border-gray-300 hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:ring-blue-400 focus:ring-4 focus:ring-opacity-30';

export const sizeMap: { [key in InputSize]: string } = {
  medium: 'p-3 text-base',
  large: 'p-4 text-base',
};

export const emailPattern = {
  value: new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$', 'ig'),
  message: 'Enter a valid email address.',
};
