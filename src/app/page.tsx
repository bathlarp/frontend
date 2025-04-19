import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Fantasy Live Action roleplay in Bath, UK',
  keywords: ['larp', 'live action roleplay', 'Bath'],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    locale: 'en-GB',
  },
  metadataBase: new URL(process.env.DOMAIN ?? ''),
};

export default function Home() {
  return <></>;
}
