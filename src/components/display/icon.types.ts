import { FunctionComponent } from 'react';

import { ReactComponent as Account } from '../../assets/icons/account-circle-line.svg';
import { ReactComponent as Insurance } from '../../assets/icons/draft-line.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook-box-fill.svg';
import { ReactComponent as Meeting } from '../../assets/icons/file-list-3-line.svg';
import { ReactComponent as FirstAider } from '../../assets/icons/first-aid-kit-line.svg';
import { ReactComponent as MultidayGame } from '../../assets/icons/hotel-bed-fill.svg';
import { ReactComponent as SignIn } from '../../assets/icons/login-circle-fill.svg';
import { ReactComponent as Location } from '../../assets/icons/map-pin-line.svg';
import { ReactComponent as Edit } from '../../assets/icons/pencil-line.svg';
import { ReactComponent as ICMeal } from '../../assets/icons/restaurant-fill.svg';
import { ReactComponent as Search } from '../../assets/icons/search-line.svg';
import { ReactComponent as CharacterRef } from '../../assets/icons/shield-user-line.svg';
import { ReactComponent as Player } from '../../assets/icons/sip-line.svg';
import { ReactComponent as Monster } from '../../assets/icons/skull-2-line.svg';
import { ReactComponent as Rank } from '../../assets/icons/stock-line.svg';
import { ReactComponent as Gm } from '../../assets/icons/survey-line.svg';
import { ReactComponent as Game } from '../../assets/icons/sword-fill.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter-fill.svg';
import { ReactComponent as AttendanceSignUp } from '../../assets/icons/user-follow-fill.svg';
import { ReactComponent as Attending } from '../../assets/icons/user-line.svg';
import { ReactComponent as NotAttending } from '../../assets/icons/user-unfollow-line.svg';
import { ReactComponent as Committee } from '../../assets/icons/vip-crown-line.svg';
import { ColorTypes } from '../../themes/theme.types';

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
  | 'signin'
  | 'signup'
  | 'twitter';

type SVGProps = React.SVGProps<SVGSVGElement> & {
  title?: string | undefined;
};

interface IconDef {
  component: FunctionComponent<SVGProps>;
  defaultTitle: string;
  rotation?: string;
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
    component: Account,
    defaultTitle: 'Account icon',
  },
  attendance: {
    component: AttendanceSignUp,
    defaultTitle: 'Attendance sign-up icon',
  },
  attending: {
    component: Attending,
    defaultTitle: 'Attending icon',
  },
  characterref: {
    component: CharacterRef,
    defaultTitle: 'Character Ref icon',
  },
  committee: {
    component: Committee,
    defaultTitle: 'Committee icon',
  },
  edit: {
    component: Edit,
    defaultTitle: 'Edit details icon',
  },
  facebook: {
    component: Facebook,
    defaultTitle: 'Facebook icon',
  },
  firstaider: {
    component: FirstAider,
    defaultTitle: 'First Aider icon',
  },
  game: {
    component: Game,
    defaultTitle: 'Game icon',
  },
  gm: {
    component: Gm,
    defaultTitle: 'GM icon',
  },
  icmeal: {
    component: ICMeal,
    defaultTitle: 'IC meal icon',
  },
  insurance: {
    component: Insurance,
    defaultTitle: 'Insurance Responsible icon',
  },
  location: {
    component: Location,
    defaultTitle: 'Location icon',
  },
  meeting: {
    component: Meeting,
    defaultTitle: 'Meeting icon',
  },
  monster: {
    component: Monster,
    defaultTitle: 'Monster icon',
  },
  multidaygame: {
    component: MultidayGame,
    defaultTitle: 'Multi-day game (24 or 36 hour) icon',
  },
  notattending: {
    component: NotAttending,
    defaultTitle: 'Not attending icon',
  },
  player: {
    component: Player,
    defaultTitle: 'Player icon',
    rotation: 'rotate-180',
  },
  rank: {
    component: Rank,
    defaultTitle: 'Rank icon',
  },
  search: {
    component: Search,
    defaultTitle: 'Search icon',
  },
  signin: {
    component: SignIn,
    defaultTitle: 'Sign in icon',
  },
  signup: {
    component: SignIn,
    defaultTitle: 'Sign up icon',
    rotation: 'rotate-270',
  },
  twitter: {
    component: Twitter,
    defaultTitle: 'Twitter icon',
  },
};
