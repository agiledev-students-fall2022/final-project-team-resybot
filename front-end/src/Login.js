import './Login.css'
import React, { useState } from 'react'
const Login = (/*{Login, error}*/) => (
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
);
export default Login;