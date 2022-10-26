import './Login.css'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
      if (localStorage.getItem('user')){
        //test for now, should reroute to / next sprint
        navigate("/login")
      }
  }, [])
  async function login(){
    console.warn(email, password)
    let item={email, password}
    let result = await fetch("https://635740569243cf412f954e2c.mockapi.io/api/rb/user", {
      method: 'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":'application/json'
      },
      body:JSON.stringify(item)
    })
    result = await result.json();
    //localStorage.setItem("user", JSON.stringify(result))
    //test for now
  
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
          //onChange = {(e)=>setPassword(e.target.value)}
          className = "form-control"/>
          <br/>
          <button onClick={login} className = "btn" type = "submit">Login</button>
  </div>
  )};
export default Login;