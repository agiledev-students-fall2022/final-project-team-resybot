import React from 'react';
import './Header.css';
import logo from './resyBotLogo.png'
import hamburger from './hamburger.png'
const Header = () => (
  <div className = "header">
    <div className = "header-logo">
      <img src= {logo} alt = "Logo" />
    </div>
    <div className = "header-hamburger">
      <img src={hamburger} alt= "header-hamburger" />
    </div>
  </div>
)
export default Header;