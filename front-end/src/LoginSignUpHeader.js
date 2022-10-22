import React from 'react';
import './LoginSignUpHeader.css'
import logo from './images/resyBotLogo.png'
import {useLocation, Link} from 'react-router-dom'

const LoginSignUpHeader = (props) => {
  const location = useLocation();
  return (
  <div className = "loginSignUpHeader">
     <Link to = {location.pathname} className = "header-logo"> 
        <img src= {logo} alt = "Logo" />
     </Link> 
  </div>
)
}

export default LoginSignUpHeader;