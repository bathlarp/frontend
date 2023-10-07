import React from 'react';

import { ColorTypes } from '../../../_themes/theme.types';

import Account from './icons/Account';
import Attendance from './icons/Attendance';
import Attending from './icons/Attending';
import CharacterRef from './icons/CharacterRef';
import Committee from './icons/Committee';
import Edit from './icons/Edit';
import Facebook from './icons/Facebook';
import FirstAider from './icons/FirstAider';
import Game from './icons/Game';
import Gm from './icons/Gm';
import IcMeal from './icons/IcMeal';
import Insurance from './icons/Insurance';
import Location from './icons/Location';
import Meeting from './icons/Meeting';
import Monster from './icons/Monster';
import MultidayGame from './icons/MultidayGame';
import NotAttending from './icons/NotAttending';
import Player from './icons/Player';
import Rank from './icons/Rank';
import Search from './icons/Search';
import SignIn from './icons/SignIn';

export type IconName =
  | 'account'
  | 'attendance'
  | 'attending'
  | 'characterref'
  | 'committee'
  | 'edit'
  | 'facebook'
  | 'firstaider'
  | 'game'
  | 'gm'
  | 'icmeal'
  | 'insurance'
  | 'location'
  | 'meeting'
  | 'monster'
  | 'multidaygame'
  | 'notattending'
  | 'player'
  | 'rank'
  | 'search'
  | 'signin';

interface IconDef {
  file: (props: SVGIconProps) => React.JSX.Element;
  defaultTitle: string;
  rotation?: string;
}

export interface SVGIconProps {
  className: string;
  title: string;
}

export const iconFillMap: Record<ColorTypes, string> = {
  primary: 'fill-primary',
  'primary-dark': 'fill-primary-dark',
  background: 'fill-background',
  standout: 'fill-standout',
  success: 'fill-success',
  warning: 'fill-warning',
  error: 'fill-error',
  none: 'fill-none',
};

export const iconStrokeMap: Record<ColorTypes, string> = {
  primary: 'stroke-primary',
  'primary-dark': 'stroke-primary-dark',
  background: 'stroke-background',
  standout: 'stroke-standout',
  success: 'stroke-success',
  warning: 'stroke-warning',
  error: 'stroke-error',
  none: 'stroke-none',
};

export const iconsMap: Record<IconName, IconDef> = {
  account: {
    file: Account,
    defaultTitle: 'Account icon',
  },
  attendance: {
    file: Attendance,
    defaultTitle: 'Attendance sign-up icon',
  },
  attending: {
    file: Attending,
    defaultTitle: 'Attending icon',
  },
  characterref: {
    file: CharacterRef,
    defaultTitle: 'Character Ref icon',
  },
  committee: {
    file: Committee,
    defaultTitle: 'Committee icon',
  },
  edit: {
    file: Edit,
    defaultTitle: 'Edit details icon',
  },
  facebook: {
    file: Facebook,
    defaultTitle: 'Facebook icon',
  },
  firstaider: {
    file: FirstAider,
    defaultTitle: 'First Aider icon',
  },
  game: {
    file: Game,
    defaultTitle: 'Game icon',
  },
  gm: {
    file: Gm,
    defaultTitle: 'GM icon',
  },
  icmeal: {
    file: IcMeal,
    defaultTitle: 'IC meal icon',
  },
  insurance: {
    file: Insurance,
    defaultTitle: 'Insurance Responsible icon',
  },
  location: {
    file: Location,
    defaultTitle: 'Location icon',
  },
  meeting: {
    file: Meeting,
    defaultTitle: 'Meeting icon',
  },
  monster: {
    file: Monster,
    defaultTitle: 'Monster icon',
  },
  multidaygame: {
    file: MultidayGame,
    defaultTitle: 'Multi-day game (24 or 36 hour) icon',
  },
  notattending: {
    file: NotAttending,
    defaultTitle: 'Not attending icon',
  },
  player: {
    file: Player,
    defaultTitle: 'Player icon',
    rotation: 'rotate-180',
  },
  rank: {
    file: Rank,
    defaultTitle: 'Rank icon',
  },
  search: {
    file: Search,
    defaultTitle: 'Search icon',
  },
  signin: {
    file: SignIn,
    defaultTitle: 'Sign in icon',
  },
};
