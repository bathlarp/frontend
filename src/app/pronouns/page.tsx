import { HttpStatusCode } from 'axios';
import { redirect } from 'next/navigation';
import { Metadata } from 'next/types';

import { updateSessionRequest } from '@/_data/auth';
import { isError } from '@/_data/clientConfiguration';
import { getPronouns } from '@/_data/pronouns';

export const metadata: Metadata = { title: 'Pronouns' };

export default async function Pronouns() {
  let pronouns = await getPronouns();
  if (isError(pronouns)) {
    if (pronouns.error !== HttpStatusCode.Unauthorized) {
      redirect('/sign-in');
    }
    const token = await updateSessionRequest();
    if (isError(token)) {
      redirect('/sign-in');
    }
    pronouns = await getPronouns();
    if (isError(pronouns)) {
      redirect('/sign-in');
    }
  }

  return (
    <>
      <h1>Current system pronouns</h1>
      <ul>
        {pronouns.data.map((pronoun) => (
          <li key={pronoun.id}>{pronoun.attributes.objective_personal}</li>
        ))}
      </ul>
    </>
  );
}
