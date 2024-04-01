import classNames from 'classnames';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '@/_components/_layout/footer/footer';
import { Header } from '@/_components/_layout/header/header';

import '../_themes/root.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BathLARP',
  description: 'A website for BathLARP, a UK Bath-based fantasy LARP club',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames(inter.className, 'min-h-screen flex flex-col')}
      >
        <Header
          navElements={['Events', 'Club', 'System', 'World', 'Resources']}
        />
        <main className="flex-1 px-12 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
