import './Requests.css';
import React, { useEffect } from 'react'
import mockData from './mockdata/requests.json'
import {Box} from '@mui/material';
import { useState } from 'react';

const showRequests = ({setCartItems, data}) => {
  let list = data.map((val) => 
    <div className="template" key={val.id}>
        <Box className="description">
          <div className = "itemControl"> Restaurant: <div className = "valueControl">{val.restaurant} </div></div>
          <div className = "itemControl"> Party Size: <div className = "valueControl">{val.party_size}</div></div>
          <div className = "itemControl"> Expiration Date: <div className = "valueControl">{val.expiration_date}</div></div>
          <div className = "itemControl"> Time: <div className = "valueControl">{val.time}</div></div>
        </Box>
    </div> 
  )
  setCartItems(list)
};

const fetchRequests = async ({setCartItems}) => {
    const response =  await fetch("https://635740569243cf412f954e2c.mockapi.io/api/rb/Requests")
    const data = await response.json()
    showRequests({setCartItems,data})
}
const Requests = () => {
const [cartItems, setCartItems] = useState([]);
    useEffect(()=>{fetchRequests({setCartItems})},[])
    return(
        <div>
            <h1 id="request_title"> Requests </h1>
            <main>
                {cartItems}
            </main>
        </div>
  )
}

  export default Requests;