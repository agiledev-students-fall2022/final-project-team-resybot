import './Requests.css';
import React, { useEffect } from 'react'
import mockData from './mockdata/requests.json'
import {Box} from '@mui/material';






const Requests = ({cartItems,setCartItems,fetchRequests}) => {
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