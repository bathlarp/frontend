import React, { FunctionComponent, MouseEventHandler } from 'react';

import { Icon } from '../../display/icon/icon';
import { IconName } from '../../display/icon/icon.types';

import { buttonMap, ButtonTheme, ButtonType } from './button.types';

interface ButtonProps {
  label: string;
  id?: string;
  iconName?: IconName;
  theme?: ButtonTheme;
  type?: ButtonType;
  ariaLabel?: string;
  classes?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FunctionComponent<ButtonProps> = ({
  label,
  id,
  iconName,
  theme,
  type,
  ariaLabel,
  classes,
  onClick,
}) => {
  const { text, border, background, icon } = buttonMap[theme ?? 'primary'];

  let iconComponent = <></>;
  if (iconName) {
    iconComponent = (
      <Icon
        iconName={iconName}
        classes="w-6 h-6 self-center"
        fillColour={icon}
      ></Icon>
    );
  }

  return (
    <>
      <button
        id={id}
        className={`${
          classes ?? ''
        } ${text} ${border} ${background} flex h-8 w-full justify-center gap-2 rounded-2xl border-2 px-6 text-lg drop-shadow-md hover:brightness-75 active:brightness-50 sm:w-fit sm:min-w-[200px]`}
        type={type ?? 'button'}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {iconComponent}
        <span>{label}</span>
      </button>
    </>
  );
};
