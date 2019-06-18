import React from 'react';
import logo from '../images/beermug.png';

const Header = () => {
  return (
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
      <h1>Beer Belly - Brewery Directory</h1>
    </header>
  );
}

export default Header;
