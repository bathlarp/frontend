'use server';

import { FunctionComponent } from 'react';
import Link from 'next/link';

import { getPronouns } from '@/_data/pronouns';

import { Icon } from '../../_display/icon/icon';

import { Auth } from './auth';
import BathLarpLogo from './BathLarpLogo';
import BathLarpSwordLogo from './BathLarpSword';

export const Header: FunctionComponent = async () => {
  const navElements = ['Events', 'Club', 'System', 'World', 'Resources'];

  const pronouns = await getPronouns();

  return (
    <header id="banner" className="w-full print:hidden">
      <BathLarpSwordLogo />
      <div className="grid grid-cols-[75px_1fr_20px] py-4 md:grid-cols-[12%_auto_30%]">
        <div></div>
        <Link href={'/'}>
          <BathLarpLogo />
        </Link>
        <div className="hidden md:ml-auto md:mr-4 md:flex md:flex-row md:gap-2">
          <Auth isLoggedIn={!!pronouns} />
        </div>
      </div>
      <nav
        id="sidebar"
        className="grid grid-cols-[75px_1fr_20px] bg-primary py-2 md:grid-cols-[12%_auto_30%]"
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
};
