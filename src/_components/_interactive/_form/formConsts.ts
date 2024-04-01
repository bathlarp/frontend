export const defaultStyles =
  'relative inline-flex rounded leading-none transition-colors ease-in-out placeholder-gray-500 text-gray-700 bg-gray-50 border border-gray-300 hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:ring-blue-400 focus:ring-4 focus:ring-opacity-30';

export const defaultErrorStyles =
  'transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 border-error hover:border-error focus:border-error focus:ring-error';

export type InputSize = 'medium' | 'large';
export const sizeMap: { [key in InputSize]: string } = {
  medium: 'p-3 text-base',
  large: 'p-4 text-base',
};
