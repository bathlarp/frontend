import { FunctionComponent } from 'react';

import { Header } from './components/_layout/header/header';

import classes from './app.module.scss';

export const App: FunctionComponent = () => (
    <main className={classes.App}>
      <Header
        onLogin={function login(): void {
          throw new Error('Function not implemented.');
        }}
        onLogout={function logout(): void {
          throw new Error('Function not implemented.');
        }}
        onCreateAccount={function create(): void {
          throw new Error('Function not implemented.');
        }}
      />
      <p>Hi!</p>
    </main>
);
