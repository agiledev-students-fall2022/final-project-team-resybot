import React, { useState } from 'react'
import axios  from 'axios';
import {Link, Location, useLocation} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Settings.css';

const Settings = (props) => {
  const [displayName, setDisplayName] = useState('')
  const [displayEmail, setDisplayEmail] = useState('')

  axios.get("/user", {
    headers: {
    "auth-token": JSON.parse(localStorage.getItem("user")).data.token,
    "_id": JSON.parse(localStorage.getItem("user")).data.id
    }
  })
  .then(response => {
    const data = response.data
    // console.log(data[0].name)
    setDisplayName(data[0].name)
    setDisplayEmail(data[0].email)

  })
  //comment out this line for tests for now, cause it will just keep logging u out on error throw 
  .catch(error => {
      // //this logs out the user if their token expires
      // localStorage.removeItem("user")
      // navigate("/login")
  })
  
  return (

   <div>
      <div className='info-container'>
        <div className='personal-information'>
          <h1> Personal Information </h1>
          <h2>  Hello {displayName}! </h2>
          <h2> Your email is {displayEmail}.</h2>
         
          
        </div>   
      </div>
      <div className='button-container'>
        <div className='sign-out'>
        <Button variant = "danger" size = "lg " >Sign Out</Button>
        </div>
             
      </div>
   </div>
  );
}

export default Settings;
