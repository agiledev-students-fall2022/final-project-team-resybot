import React from 'react';
import './Header.css';
import logo from './resyBotLogo.png'
import Sidebar from './Sidebar';
const Header = () => (
  <div className = "header" id = "outercontainer">
      <Sidebar className = "sideBar" pageWrapID={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <div className = "header-logo">
          <img src= {logo} alt = "Logo" />
       </div>
    </div>
  </div>
)
export default Header;