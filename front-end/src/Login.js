import './Login.css'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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
    let result = await axios.post("user/login", {
      "email": email, "password": password
    })
    localStorage.setItem("user", JSON.stringify(result))
    //test for now
    navigate("/")
  }
  return (
  <div className = "login">
      <br/>
      <h1 className = "login-header"> Login </h1>
      <br/>
          <input type = "text"  placeholder = "Email"  id = "email"
          onChange = {(e)=>setEmail(e.target.value)}
          className = "form-control"/>
          <br/>

          <input type = "password"  placeholder = "Password" id = "password"
          onChange = {(e)=>setPassword(e.target.value)}
          className = "form-control"/>
          <br/>
          <button onClick={login} className = "btn" type = "submit">Login</button>
  </div>
  )};
export default Login;