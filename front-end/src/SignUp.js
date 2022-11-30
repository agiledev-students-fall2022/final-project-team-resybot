import './SignUp.css'
import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function signUp(){
    console.warn(name,email,password)
    let result = await axios.post("user/register", {
      "name": name, "email": email, "password": password, 
    })
    console.warn(JSON.stringify(result))
    navigate("/login")
  }
  return(
  <div className = "signUp">
      <br/>
      <h1 className = "signUp-header"> Sign Up </h1>
      <br/>
          <input type = "text"  placeholder = "Name"  id = "name"
          onChange = {(e)=>setName(e.target.value)}
          className = "form-control"/>
          <br/>
          <input type = "text"  placeholder = "Email"  id = "email"
          onChange = {(e)=>setEmail(e.target.value)}
          className = "form-control"/>
          <br/>
          <input type = "password"  placeholder = "Password" id = "password"
          onChange = {(e)=>setPassword(e.target.value)}
          className = "form-control"/>
          <br/>
          <button onClick={signUp} className = "signUp" type = "submit">Sign Up</button>
  </div>
)};
export default SignUp;