import React from 'react'
import './Header.css'
import logo from './images/resyBotLogo.png'
import Sidebar from './Sidebar'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className = "header" id = "outercontainer">
      <Sidebar className = "sideBar" pageWrapID={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <Link to ="/" className = "header-logo">
          <img src= {logo} alt = "Logo" />
       </Link>
    </div>
  </div>
)
export default Header;