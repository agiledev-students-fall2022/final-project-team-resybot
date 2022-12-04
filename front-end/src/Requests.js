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
    .delete(`/requests/${val._id}`, {
      headers: {
      "auth-token": JSON.parse(localStorage.getItem("user")).data.token,
      "owner": JSON.parse(localStorage.getItem("user")).data.id
      }
    })
    console.log(response)
  const removed = cartItems.filter(item => item._id !== val._id)
  setCartItems(removed)
}

const fetchRequests = async ({setCartItems, cartItems, navigate}) => {
  axios.get("/requests", {
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
        localStorage.removeItem("user")
        navigate("/login")
    })
}

const Requests = () => {
const navigate = useNavigate();
const [cartItems, setCartItems] = useState([]);
    useEffect(()=>{
      fetchRequests({setCartItems, cartItems, navigate})
    },[])
    return(
        <div>
            <h1 id="request_title"> Requests </h1>
            {cartItems.map(val => (
              <div className="requestsTemplate" key={val._id}>
               <Box className="requestsDescription">
                 <div class="requestsColumnLeft">
                    <div className = "requestsItemControl"> Restaurant: <div className = "requestsValueControl">{val.restaurant} </div></div>
                    <div className = "requestsItemControl"> Party Size: <div className = "requestsValueControl">{val.party_size}</div></div>
                    <div className = "requestsItemControl"> Time: <div className = "requestsValueControl">{val.time}</div></div>
                    <div className = "requestsItemControl"> Date: <div className = "requestsValueControl">{val.date}</div></div>      
                </div>
                <div class="requestsColumnRight">
                  <Button onClick = {() => removeRequest({val, cartItems, setCartItems, navigate})} className="delete">
                    Delete 
                  </Button>
                </div>
              </Box>
            </div> 
            ))}
        </div>
  )
}

  export default Requests;