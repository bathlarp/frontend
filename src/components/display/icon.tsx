import { FunctionComponent } from 'react';

import { ColorTypes } from '../../themes/theme.types';

import {
  iconFillMap, IconName, iconsMap, iconStrokeMap,
} from './icon.types';

interface IconProps {
  iconName: IconName;
  strokeColour?: ColorTypes;
  fillColour?: ColorTypes;
  incTitle?: boolean;
  classes?: string;
  title?: string;
}

export const Icon: FunctionComponent<IconProps> = ({
  iconName, strokeColour, fillColour, incTitle, classes, title,
}) => {
  const { component: IconComponent, defaultTitle, rotation } = iconsMap[iconName];

  const stroke = iconStrokeMap[strokeColour ?? 'none'];
  const fill = fillColour ? iconFillMap[fillColour] : '';

  return <>
    <IconComponent title={incTitle ? title ?? defaultTitle : undefined} className={`${stroke} ${fill} ${rotation ?? ''} ${classes ?? ''}`} />
  </>;
};
