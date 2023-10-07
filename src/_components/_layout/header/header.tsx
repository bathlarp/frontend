import { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Icon } from '../../../_components/display/icon/icon';

import Name from './bathlarp_logo.svg';
import Sword from './bathlarp_sword.svg';

interface HeaderProps {
  navElements: string[];
}

export const Header: FunctionComponent<HeaderProps> = ({ navElements }) => (
  <header id="banner" className="w-full print:hidden">
    <Image
      src={Sword}
      alt={'Club sword logo linked to homepage'}
      className="absolute ml-4 mt-4"
      height={160}
    />
    <div className="grid grid-cols-header py-4">
      <div></div>
      <Link href={'/'} className="invert-colours">
        <Image
          src={Name}
          alt={'Club name logo linked to homepage'}
          height={86}
        />
      </Link>
      <div></div>
    </div>
    <nav id="sidebar" className="grid grid-cols-header bg-primary py-2">
      <div></div>
      <div className="flex flex-row justify-between">
        {navElements?.map((nav) => (
          <Link href="#" key={nav} className="text-xl font-bold text-standout">
            {nav}
          </Link>
        ))}
      </div>
      <div className="ml-auto mr-4 flex flex-row">
        <Link href={'https://www.facebook.com/bathlarp'}>
          <Icon iconName={'facebook'} fillColour="standout" classes="h-8" />
        </Link>
      </div>
    </nav>
  </header>
);
