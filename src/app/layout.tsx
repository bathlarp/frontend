import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '@/_components/_layout/footer/footer';
import { Header } from '@/_components/_layout/header/header';

import '../_themes/root.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header
          navElements={['Events', 'Club', 'System', 'World', 'Resources']}
        />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
