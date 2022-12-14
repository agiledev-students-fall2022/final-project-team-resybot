import './Requests.css';
import React, { useEffect } from 'react'
import {Box} from '@mui/material';
import { useState } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

//const axios = require('axios')

const removeRequest =  async ({val, cartItems, setCartItems, navigate}) =>{
  console.log("deleting...")
  console.log(val._id)
  const response = await axios
    .delete(`${process.env.REACT_APP_BACKEND}/requests/${val._id}`, {
      headers: {
      "auth-token": JSON.parse(localStorage.getItem("user")).data.token,
      "owner": JSON.parse(localStorage.getItem("user")).data.id,
      }
    })
    console.log(response)
  const removed = cartItems.filter(item => item._id !== val._id)
  setCartItems(removed)
}

const fetchRequests = async ({setCartItems, cartItems, navigate}) => {
  axios.get(`${process.env.REACT_APP_BACKEND}/requests`, {
      headers: {
      "auth-token": JSON.parse(localStorage.getItem("user")).data.token,
      "owner": JSON.parse(localStorage.getItem("user")).data.id
      }
    })
    .then(response => {
      const data = response.data
      console.log()
      setCartItems(data)
    })
    .catch(error => {
      if(error.response.status === 401){
        localStorage.removeItem("user")
        localStorage.removeItem("resyUser")
        navigate("/login")
      }
    })
}

const Requests = () => {
const navigate = useNavigate();
const [cartItems, setCartItems] = useState([]);
useEffect(()=>{
    if(localStorage.getItem("user") === null){
      localStorage.removeItem("user")
      localStorage.removeItem("resyUser")
      navigate("/login")
    }
    else{
      fetchRequests({setCartItems, cartItems, navigate})
    }},[])
    return(
        <div>
            <h1 id="request_title"> Request History </h1>
            {cartItems.map(val => (
              <div className="requestsTemplate" key={val._id}>
               <Box className="requestsDescription">
                 <div class="requestsColumnLeft">
                    <div className = "requestsItemControl"> Restaurant: <div className = "requestsValueControl">{val.restaurant} </div></div>
                    <div className = "requestsItemControl"> Party Size: <div className = "requestsValueControl">{val.party_size}</div></div>
                    <div className = "requestsItemControl"> Time: <div className = "requestsValueControl">{val.time}</div></div>
                    <div className = "requestsItemControl"> Date: <div className = "requestsValueControl">{val.date}</div></div>      
                    <div className = "requestsItemControl"> Time to check: <div className = "requestsValueControl">{val.timeToCheck}</div></div>     
                </div>
                <div class="requestsColumnRight">  
                </div>
              </Box>
            </div> 
            ))}
        </div>
  )
}

  export default Requests;