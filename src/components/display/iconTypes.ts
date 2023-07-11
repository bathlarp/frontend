import account from '../../assets/icons/account-circle-fill.svg';
import facebook from '../../assets/icons/facebook-box-fill.svg';
import sword from '../../assets/icons/sip-line.svg';
import { ColorTypes } from '../../themes/themeTypes';

export type IconName = 'account' | 'facebook' | 'player';

export interface IconDef {
  file: string;
  title: string;
  rotation?: string;
}

export const iconFillMap: Record<ColorTypes, string> = {
  primary: 'fill-primary',
  'primary-dark': 'fill-primary-dark',
  background: 'fill-background',
  standout: 'fill-standout',
  notice: 'fill-notice',
  warning: 'fill-warning',
  error: 'fill-error',
};

export const iconStrokeMap: Partial<Record<ColorTypes, string>> = {
  primary: 'stroke-primary',
  'primary-dark': 'stroke-primary-dark',
  background: 'stroke-background',
  standout: 'stroke-standout',
  notice: 'stroke-notice',
  warning: 'stroke-warning',
  error: 'stroke-error',
};

export const iconsMap: Record<IconName, IconDef> = {
  account: {
    file: account,
    title: 'Account icon',
  },
  facebook: {
    file: facebook,
    title: 'Facebook icon',
  },
  player: {
    file: sword,
    title: 'Facebook icon',
    rotation: 'rotate-180',
  },
};
