import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Welcome! - BathLARP',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NewUser() {
  return (
    <>
      <h1>Welcome!</h1>
      <p>
        Congratulations on joining BathLARP. Now you have an account set up,
        here are some things you want to do:
      </p>
      <ol>
        <li>
          If you haven&apos;t already, email the Committee on{' '}
          <Link href="mailto:committee@bathlarp.co.uk">
            committee@bathlarp.co.uk
          </Link>{' '}
          and let them know you exist as a real person. This will get you added
          as a full member with access to all website functionality.
        </li>
        <li>
          Fill out your profile - we will need some basic medical and contact
          details before your first game.
        </li>
        <li>
          Read through the Getting Started guides and start thinking about a
          character.
        </li>
      </ol>
      <p>
        <Link href={'/sign-in'}>Sign in to get started!</Link>
      </p>
    </>
  );
}
