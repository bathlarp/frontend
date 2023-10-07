export type ColorTypes =
  | 'primary'
  | 'primary-dark'
  | 'background'
  | 'standout'
  | 'error'
  | 'warning'
  | 'success'
  | 'none';

export const svgFillMap: Record<ColorTypes, string> = {
  primary: 'fill-primary',
  'primary-dark': 'fill-primary-dark',
  background: 'fill-background',
  standout: 'fill-standout',
  success: 'fill-success',
  warning: 'fill-warning',
  error: 'fill-error',
  none: 'fill-none',
};

export const svgStrokeMap: Record<ColorTypes, string> = {
  primary: 'stroke-primary',
  'primary-dark': 'stroke-primary-dark',
  background: 'stroke-background',
  standout: 'stroke-standout',
  success: 'stroke-success',
  warning: 'stroke-warning',
  error: 'stroke-error',
  none: 'stroke-none',
};

export const textColorMap: Record<ColorTypes, string> = {
  primary: 'text-primary',
  'primary-dark': 'text-primary-dark',
  background: 'text-background',
  standout: 'text-standout',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-error',
  none: 'text-none',
};

export const backgroundColorMap: Record<ColorTypes, string> = {
  primary: 'bg-primary',
  'primary-dark': 'bg-primary-dark',
  background: 'bg-background',
  standout: 'bg-standout',
  success: 'bg-success',
  warning: 'bg-warning',
  error: 'bg-error',
  none: 'bg-none',
};

export const borderColorMap: Record<ColorTypes, string> = {
  primary: 'border-primary',
  'primary-dark': 'border-primary-dark',
  background: 'border-background',
  standout: 'border-standout',
  success: 'border-success',
  warning: 'border-warning',
  error: 'border-error',
  none: 'border-none',
};
