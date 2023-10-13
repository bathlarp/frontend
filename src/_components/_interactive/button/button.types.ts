import {
  backgroundColorMap,
  borderColorMap,
  ColorTypes,
  textColorMap,
} from '../../../_themes/theme.types';

export type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>['type'];

export type ButtonTheme = 'primary' | 'secondary';

export type IconPosition = 'left' | 'right';

interface ButtonDef {
  border: string;
  background: string;
  text: string;
  icon: ColorTypes;
}

export const buttonMap: Record<ButtonTheme, ButtonDef> = {
  primary: {
    border: borderColorMap['primary-dark'],
    background: backgroundColorMap.primary,
    text: textColorMap.standout,
    icon: 'standout',
  },
  secondary: {
    border: borderColorMap.primary,
    background: backgroundColorMap.standout,
    text: textColorMap.primary,
    icon: 'primary',
  },
};
