import './SignUp.css'
import React, { useState } from 'react'
const SignUp = () => (
  <div className = "signUp">
      <br/>
      <h1 className = "signUp-header"> Sign Up </h1>
      <br/>
          <input type = "text"  placeholder = "Name"  id = "name"
          //onChange = {(e)=>setEmail(e.target.value)}
          className = "form-control"/>
          <br/>
          <input type = "text"  placeholder = "Email"  id = "email"
          //onChange = {(e)=>setEmail(e.target.value)}
          className = "form-control"/>
          <br/>

          <input type = "password"  placeholder = "Password" id = "password"
          //onChange = {(e)=>setPassword(e.target.value)}
          className = "form-control"/>
          <br/>
          <button /*onClick={SignUp}*/ className = "btn" type = "submit">Sign Up</button>
  </div>
);
export default SignUp;