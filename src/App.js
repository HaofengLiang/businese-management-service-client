import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/appBar/AppBar';
import { Outlet } from 'react-router-dom';

// AWS Amplify for Authentication:
// import { Amplify, Auth } from 'aws-amplify';
// import awsconfig from './aws-exports';
// import { withAuthenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';
// Amplify.configure(awsconfig);

function signOutHandler() {
  console.log("Sign out!");
};

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Outlet/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;;
