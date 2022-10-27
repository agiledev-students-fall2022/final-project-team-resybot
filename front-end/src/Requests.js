import './Requests.css';
import React, { useEffect } from 'react'
import mockData from './mockdata/requests.json'
import {Box} from '@mui/material';
const onAdd = ({setCartItems}) => {
    let list = mockData.map((val) => 
      <div className="template" key={val.id}>
          <Box className="description">
            <div className = "itemControl"> Restaurant: <div className = "valueControl">{val.restaurant} </div></div>
            <div className = "itemControl"> Party Size: <div className = "valueControl">{val.party_size}</div></div>
            <div className = "itemControl"> Expiration Date: <div className = "valueControl">{val.expiration_date}</div></div>
          </Box>
      </div> 
    )
    setCartItems(list)
  };


const Requests = ({cartItems,setCartItems}) => {
    useEffect(()=>{onAdd({setCartItems})})
    return(
        <div>
            <h1 id="request_title"> Requests </h1>
            <main>
                {cartItems}
            </main>
        </div>
  )}
  export default Requests;