import './Login.css'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = (/*{Login, error}*/) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  useEffect(() => {
      if (localStorage.getItem('user-info')){
        history.push("/add")
      }
  }, [])
  return (
  <form className = "login">
      <h1 className = "login-header"> Login </h1>
        <label>
          Email: 
          <input type = "text"  name = "email"  id = "email"/>
        </label>
        <label>
          Password:
          <input type = "text"  name = "password" id = "password"/>
        </label>
      <input type = "submit" name = "submit" value="Login" />
  </form>
)};
export default Login;