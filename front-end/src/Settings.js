import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer'
import {Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Settings.css';

const Settings = (props) => {
  return (
   <div>
      <div className='info-container'>
        <div className='personal-information'>
          <h1> Personal Information </h1>
          <h2> TO BE FILLED AFTER WORKING ON EDIT INFORMATION! </h2>
        </div>   
      </div>
      <div className='button-container'>
        <div className = "d-grid gap-2">
          <Link to = "/EditInformation">
            <Button variant = "secondary" size = "lg " >Edit Information</Button>
          </Link>     
          <Button variant = "secondary" size = "lg " >Sign Out</Button>
        </div>
      </div>
   </div>
  );
}

export default Settings;
