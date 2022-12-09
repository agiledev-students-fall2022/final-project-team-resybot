import './SignUp.css'
import React, { useState, useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function signUp(){
    console.warn(name,email,password)
    let result = await axios.post(`${process.env.REACT_APP_BACKEND}/user/register`, {
      "name": name, "email": email, "password": password, 
    })
    console.warn(JSON.stringify(result))
    navigate("/login")
  }
  return(
  <div className = "signUp">
      <h1 className = "signUp-header"> Sign Up </h1>
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
          <button onClick={signUp} className = "signUpButton" type = "submit">Sign Up</button>
          <div className = "to-SignUpBlock">
            Already have an account?  
            <Link to = "/login"  className = "to-SignUp"> 
              Login
            </Link>
          </div>
  </div>
)};
export default SignUp;