import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/tictactoe/game'
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
Amplify.configure(awsconfig);

function App({ signOut, user }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello {user.username}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Game/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={signOut}>Sign out</button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);;
