import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer'
import {Link, Location, useLocation} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Settings.css';

const Settings = (props) => {
  const {state} = useLocation()
  // console.log(state)
  // console.log(state.displayName)

  let displayName;
  if (state === null  || state.displayName === "") {
    displayName = <h2>Name: John Doe</h2>
  } else {
    displayName = <h2> Name: {state.displayName} </h2>
  }

  let displayResyBotEmail;
  if (state === null  || state.displayResyBotEmail === "") {
    displayResyBotEmail = <h2>ResyBot Email: testresybot@gmail@gmail.com</h2>
  } else {
    displayResyBotEmail = <h2> ResyBot Email: {state.displayResyBotEmail} </h2>
  }

  let displayResyEmail;
  if ( state === null  || state.displayResyEmail === "") {
    displayResyEmail = <h2>Resy Email: testresy@gmail.com</h2>
  } else {
    displayResyEmail = <h2> Resy Email: {state.displayResyEmail} </h2>
  }

  return (

   <div>
      <div className='info-container'>
        <div className='personal-information'>
          <h1> Personal Information </h1>
          {displayName}
          {displayResyBotEmail}
          {displayResyEmail}
        </div>   
      </div>
      <div className='button-container'>
        <div>
        <Link to = "/EditInformation">
            <Button variant = "secondary" size = "lg " >Edit Information</Button>
          </Link> 
        </div>
        <div className='sign-out'>
        <Button variant = "danger" size = "lg " >Sign Out</Button>
        </div>
             
      </div>
   </div>
  );
}

export default Settings;
