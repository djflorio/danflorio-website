import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">DAN FLORIO</h1>
      <a className="navbar__link" href="/">coding</a>
      <a className="navbar__link" href="http://www.danfloriomusic.com" target="_blank">music</a>
      <a className="navbar__link" href="/">resume</a>
      <a className="navbar__link" href="/">contact</a>
    </nav>
  );
}

export default NavBar;