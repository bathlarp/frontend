import React, { FunctionComponent } from 'react';

import { ColorTypes, svgFillMap, svgStrokeMap } from '../../../themes/theme.types';

import {
  IconName, iconsMap,
} from './icon.types';

interface IconProps {
  iconName: IconName;
  strokeColour?: ColorTypes;
  fillColour?: ColorTypes;
  incTitle?: boolean;
  classes?: string;
  title?: string;
  role?: React.AriaRole;
}

export const Icon: FunctionComponent<IconProps> = ({
  iconName, strokeColour, fillColour, incTitle, classes, title, role,
}) => {
  const { component: IconComponent, defaultTitle, rotation } = iconsMap[iconName];

  const stroke = svgStrokeMap[strokeColour ?? 'none'];
  const fill = fillColour ? svgFillMap[fillColour] : '';

  return <>
    <IconComponent role={role ?? undefined} title={incTitle ? title ?? defaultTitle : undefined} className={`${stroke} ${fill} ${rotation ?? ''} ${classes ?? ''}`} />
  </>;
};
