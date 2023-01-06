import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>React Weather App</h1>
        <footer>
          Coded by{' '}
          <a
            href="https://www.morenatirana.com"
            rel="noreferrer"
            target="_blank"
          >
            Morena Tirana
          </a>{' '}
          with{' '}
          <a
            href="https://github.com/MorenaTirana/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub code source
          </a>
        </footer>
      </div>
    </div>
  );
}
