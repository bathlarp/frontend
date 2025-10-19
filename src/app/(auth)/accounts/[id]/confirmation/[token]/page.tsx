import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { Loader } from '@/_components/_display/loader/loader';
import { confirmRequest } from '@/_data/account';

export const metadata: Metadata = {
  title: 'Confirming account - BathLARP',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function VerifyEmail({
  params: { id, token },
}: {
  params: { id: string; token: string };
}) {
  const confirmed = await confirmRequest(id, token);
  if (confirmed.data) {
    redirect('/new-user');
  }

  return (
    <>
      {!confirmed.data && !confirmed.error && (
        <>
          <h1>Confirming...</h1>
          <Loader overlay={false} />
        </>
      )}
      {!!confirmed.error && (
        <>
          <h1>Sorry, something seems to have gone wrong</h1>
          <p>
            Please get in contact with the Committee - it may be that
            you&apos;ve already confirmed your account.
          </p>
        </>
      )}
    </>
  );
}
