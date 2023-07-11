import { FunctionComponent } from 'react';

import { ColorTypes } from '../../themes/themeTypes';

import {
  iconFillMap, IconName, iconsMap, iconStrokeMap,
} from './iconTypes';

interface IconProps {
  iconName: IconName;
  strokeColour?: ColorTypes;
  fillColour?: ColorTypes;
  classNames?: string;
}

export const Icon: FunctionComponent<IconProps> = ({
  iconName, strokeColour, fillColour, classNames,
}) => {
  const icon = iconsMap[iconName];

  return <svg className={
    `${iconFillMap[fillColour ?? 'standout']} 
    ${strokeColour ? iconStrokeMap[strokeColour] ?? '' : ''} 
    ${icon.rotation ?? ''} ${classNames ?? ''}`}>
    <use href={icon.file} />
  </svg>;
};
