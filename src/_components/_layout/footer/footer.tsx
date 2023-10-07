import { FunctionComponent } from 'react';

export const Footer: FunctionComponent = () => (
  <footer className="px-auto absolute bottom-0 flex min-w-full flex-col items-center justify-center bg-primary py-3 md:flex-row">
    <div className="mb-3 flex flex-col items-center justify-center text-xs font-bold text-standout md:mb-0 md:flex-row ">
      <span className="py-1 align-middle md:px-1">
        Copyright &copy; BathLARP 2009 - {new Date().getFullYear()}.
      </span>
      <span className="border-standout py-1 align-middle md:border-r md:pr-1">
        All rights reserved.
      </span>
    </div>
    {[
      { text: 'Terms and Conditions', href: '/terms', key: 'terms' },
      { text: 'Privacy Notice', href: '/privacy', key: 'privacy' },
      {
        text: 'Bug Tracker',
        href: 'https://github.com/bathlarp/frontend/issues',
        key: 'bug',
      },
    ].map(({ text, href, key }) => (
      <>
        <a
          href={href}
          key={key}
          className="border-standout py-1 text-xs font-bold text-standout last:border-r-0 md:border-r md:px-1"
        >
          {text}
        </a>
      </>
    ))}
  </footer>
);
