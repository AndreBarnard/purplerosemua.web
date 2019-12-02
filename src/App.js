import React from 'react';
import logo from './Images/PurpleRoseMUA_CapeTown_Makeup_Artist.jpg';
import logoInstagram from './Images/instagram.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This site is under construction - Coming Soon!!!</p>
        <a
          className="App-link"
          href="https://www.instagram.com/purplerosemuacpt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoInstagram} className="instagram-logo" alt="instagram" />
        </a>
      </header>
    </div>
  );
}

export default App;
