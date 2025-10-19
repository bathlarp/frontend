import React, { FunctionComponent } from 'react';

import { ColorTypes } from '../../../_themes/theme.types';

import { iconFillMap, IconName, iconsMap, iconStrokeMap } from './icon.types';

interface IconProps {
  iconName: IconName;
  strokeColour?: ColorTypes;
  fillColour?: ColorTypes;
  classes?: string;
  title?: string;
  incTitle?: boolean;
}

export const Icon: FunctionComponent<IconProps> = ({
  iconName,
  strokeColour,
  fillColour,
  classes,
  title,
  incTitle,
}) => {
  const { file: Component, rotation, defaultTitle } = iconsMap[iconName];

  const stroke = iconStrokeMap[strokeColour ?? 'none'];
  const fill = fillColour ? iconFillMap[fillColour] : '';

  return (
    <>
      <Component
        title={incTitle ? title ?? defaultTitle : ''}
        className={`${stroke} ${fill} ${rotation ?? ''} ${classes ?? ''}`}
      />
    </>
  );
};
