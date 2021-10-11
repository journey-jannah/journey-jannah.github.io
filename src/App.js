import logo from './logo.svg';
import './App.css';
import React from 'react'
import ReactGA from 'react-ga';
ReactGA.initialize('UA-175593078-2');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://myj2j.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is a template page, no purpose, but just meant for branding purposes.
        </a>
      </header>
    </div>
  );
}

export default App;
