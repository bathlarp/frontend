import classes from  './App.module.scss';
import { Header } from './components/_layout/header/Header';

function App() {
  return (
    <main className={classes.App}>
      <Header onLogin={function (): void {
        throw new Error('Function not implemented.');
      } } onLogout={function (): void {
        throw new Error('Function not implemented.');
      } } onCreateAccount={function (): void {
        throw new Error('Function not implemented.');
      } } />
      <p>Hi!</p>
    </main>
  )
}

export default App
