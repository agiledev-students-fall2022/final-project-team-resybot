import './Login.css'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
      if (localStorage.getItem('user')){
        navigate("/")
      }
  }, [])
  async function login(){
    console.warn(email, password)
    console.log(`${process.env.REACT_APP_BACKEND}/user/login`)
    let result = await axios.post(`${process.env.REACT_APP_BACKEND}/user/login`, {
      "email": email, "password": password
    })
    localStorage.setItem("user", JSON.stringify(result))
    //test for now
    navigate("/settings")
  }
  return (
  <div className = "login">
      <h1 className = "login-header"> Login </h1>
      <div>
          <input type = "text"  placeholder = "Email"  id = "email"
          onChange = {(e)=>setEmail(e.target.value)}
          className = "form-control"/>
          <br/>

          <input type = "password"  placeholder = "Password" id = "password"
          onChange = {(e)=>setPassword(e.target.value)}
          className = "form-control"/>
          <br/>
          <button onClick={login} className = "loginButton" type = "submit">Continue</button>
          <br/>
          <div className = "to-SignUpBlock">
            Don't have an account?  
            <Link to = "/signup"  className = "to-SignUp"> 
              Sign Up
            </Link>
          </div>
      </div>
  </div>
  )};
export default Login;