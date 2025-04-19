import { Metadata } from 'next/types';

import { getWithAuthCheck } from '@/_data/common';
import { getPronouns } from '@/_data/pronouns';

export const metadata: Metadata = { title: 'Pronouns' };

export default async function Pronouns() {
  const pronouns = await getWithAuthCheck(getPronouns);

  return (
    <>
      <h1>Current system pronouns</h1>
      <ul>
        {pronouns.map((pronoun) => (
          <li key={pronoun.id}>
            {pronoun.attributes.subjective_personal}/
            {pronoun.attributes.possessive}/
            {pronoun.attributes.objective_personal}/
            {pronoun.attributes.possessive_determiner}/
            {pronoun.attributes.reflexive}
          </li>
        ))}
      </ul>
    </>
  );
}
