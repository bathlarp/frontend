import { FunctionComponent } from 'react';
import Link from 'next/link';

import { Icon } from '../../../_components/display/icon/icon';

import BathLarpLogo from './BathLarpLogo';
import BathLarpSwordLogo from './BathLarpSword';

interface HeaderProps {
  navElements: string[];
}

export const Header: FunctionComponent<HeaderProps> = ({ navElements }) => (
  <header id="banner" className="w-full print:hidden">
    <BathLarpSwordLogo />
    <div className="grid grid-cols-header-small py-4 md:grid-cols-header">
      <div></div>
      <BathLarpLogo />
      <div></div>
    </div>
    <nav
      id="sidebar"
      className="grid grid-cols-header-small bg-primary py-2 md:grid-cols-header"
    >
      <div></div>
      <div>
        {navElements?.map((nav) => (
          <Link
            href="#"
            key={nav}
            className="hidden md:mr-8 md:inline md:text-xl md:font-bold md:text-standout"
          >
            {nav}
          </Link>
        ))}
      </div>
      <div className="hidden md:ml-auto md:mr-4 md:flex md:flex-row">
        <Link href={'https://www.facebook.com/bathlarp'}>
          <Icon iconName={'facebook'} fillColour="standout" classes="h-8" />
        </Link>
      </div>
    </nav>
  </header>
);
