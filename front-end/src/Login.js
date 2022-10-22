import './Login.css'
import React, { useState } from 'react'
const Login = (/*{Login, error}*/) => (
  <div className = "login">
      <h1 className = "login-header"> Login </h1>
      <div className = "login-formgroup">
        <label>
          email: 
          <input type = "text"  name = "email"  id = "email"/>
        </label>
      </div>
      <div className = "login-formgroup">
        <label>
          Password:
          <input type = "text"  name = "password" id = "password"/>
        </label>
      </div>
      <input type = "submit" value="Login" />
  </div>
);
export default Login;