import './SignUp.css'
import React, { useState } from 'react'
const SignUp = (/*{SignUp, error}*/) => (
  <form className = "signUp">
      <h1 className = "signUp-header"> Sign Up </h1>
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
export default SignUp;