import './Requests.css';
import React, { useEffect } from 'react'
import {Box} from '@mui/material';
import { useState } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
//const axios = require('axios')

const removeRequest =  async ({val, cartItems, setCartItems}) =>{
  console.log(val._id)
  const response = await axios
    .delete(`/requests/${val._id}`)
    console.log(response)
  const removed = cartItems.filter(item => item._id !== val._id)
  setCartItems(removed)
}

const fetchRequests = async ({setCartItems, cartItems}) => {
    axios.get("/requests")
    .then( response => {
      const data = response.data
      setCartItems(data)
    }
    )
}
const Requests = () => {
const [cartItems, setCartItems] = useState([]);
    useEffect(()=>{fetchRequests({setCartItems, cartItems})},[])
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
                  <Button onClick = {() => removeRequest({val, cartItems, setCartItems})} className="delete">
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