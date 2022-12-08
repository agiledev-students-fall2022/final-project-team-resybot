import React, { useState } from 'react'
import axios  from 'axios';
import {useNavigate} from "react-router-dom";
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Settings.css';

const Settings = () => {
    const navigate = useNavigate()
    const [displayName, setDisplayName] = useState('')
    const [displayEmail, setDisplayEmail] = useState('')
    const [resyAuthToken, setResyAuthToken] = useState('')
    const [authorization, setAuthorization] = useState('')
    let content = <h2> Your resy info is stored! </h2>

    // getting data from MongoDB
    axios.get("/user", {
      headers: {
      "auth-token": JSON.parse(localStorage.getItem("user")).data.token,
      "_id": JSON.parse(localStorage.getItem("user")).data.id
      }
    })
    .then(response => {
      const data = response.data
      setDisplayName(data[0].name)
      setDisplayEmail(data[0].email)
    })
    //comment out this line for tests for now, cause it will just keep logging u out on error throw 
    .catch(error => {
        // //this logs out the user if their token expires
        if(error.response.status === 401){
        localStorage.removeItem("user")
        localStorage.removeItem("resyUser")
        navigate("/login")
        }
    })

    // setting localStorage item
    const buttonClick = (e) => {
      let resyObj = {
        "xresyauthtoken": resyAuthToken,
        "authorization": authorization
      }
      localStorage.setItem('resyUser', JSON.stringify(resyObj))
  }   

    if (!localStorage.getItem('resyUser')){
      content = <Form>
      <Form.Group controlId= 'x-resy-auth-token' className = 'form-container'>
        <Form.Control
              type = "text"
              placeholder='Enter x-resy-auth-token'
              value = {resyAuthToken}
              onChange = {(e) => setResyAuthToken(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId= 'authorization' className = 'form-container'>
        <Form.Control
              type = "text"
              placeholder='Enter authorization'
              value = {authorization}
              onChange = {(e) => setAuthorization(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Button variant = "secondary" size = "lg " type = "submit" onClick={buttonClick}>Save Resy Information</Button>
    </Form>
    }
    else{
      content = <Form>
      <h2> Your resy info is stored! </h2>
      <Form.Group controlId= 'x-resy-auth-token' className = 'form-container'>
        <Form.Control
              type = "text"
              placeholder='Update x-resy-auth-token'
              value = {resyAuthToken}
              onChange = {(e) => setResyAuthToken(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId= 'authorization' className = 'form-container'>
        <Form.Control
              type = "text"
              placeholder='Update authorization'
              value = {authorization}
              onChange = {(e) => setAuthorization(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Button variant = "secondary" size = "lg " type = "submit" onClick={buttonClick}>Update Resy Information</Button>
    </Form>
    }
    return (
    <div>
        <div className='info-container'>
          <div className='personal-information'>
            <h1>  Hello {displayName}! </h1>
            <h2> Email: {displayEmail}.</h2>
            {content}
          </div>   
        </div>
    </div>
    );
  }
export default Settings;
