import './Requests.css';
import React, { useEffect } from 'react'
import mockData from './mockdata/requests.json'
import {Box} from '@mui/material';
const onAdd = ({setCartItems}) => {
    let list = mockData.map((val) => 
      <div className="template" key={val.id}>
          <Box className="description">
            <div className = "itemControl">{val.restaurant}</div>
            <div className = "itemControl">{val.party_size}</div>
            <div className = "itemControl">{val.expiration_date}</div>
          </Box>
      </div> 
    )
    setCartItems(list)
  };


const Requests = ({cartItems,setCartItems}) => {
    useEffect(()=>{onAdd({setCartItems})})
    return(
        <div className = "Cart">
            <h1> Requests </h1>
            <main>
                {cartItems}
            </main>
        </div>
  )}
  export default Requests;