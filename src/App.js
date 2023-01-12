import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div class="home">
        <a href="index.html">
          <img src="/img/home.png" />
        </a>
      </div>
      <div className="container">
        <Weather defaultCity="Stockholm" />
        <footer>
          Coded by{' '}
          <a
            href="https://www.morenatirana.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Morena Tirana
          </a>{' '}
          with{' '}
          <a
            href="https://github.com/MorenaTirana/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub code source
          </a>
        </footer>
      </div>
    </div>
  );
}
