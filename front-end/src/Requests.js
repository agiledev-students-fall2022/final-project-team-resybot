import './Requests.css';
import React, { useEffect } from 'react'
import {Box} from '@mui/material';
import { useState } from 'react';
import { Button } from 'reactstrap';

const showRequests = ({setCartItems, data}) => {
  let list = data.map((val) => 
    <div className="requestsTemplate" key={val.id}>
        <Box className="requestsDescription">
          <div class="requestsColumnLeft">
            <div className = "requestsItemControl"> Restaurant: <div className = "requestsValueControl">{val.restaurant} </div></div>
            <div className = "requestsItemControl"> Party Size: <div className = "requestsValueControl">{val.party_size}</div></div>
            <div className = "requestsItemControl"> Time: <div className = "requestsValueControl">{val.time}</div></div>
            <div className = "requestsItemControl"> Date: <div className = "requestsValueControl">{val.date}</div></div>      
          </div>
          <div class="requestsColumnRight">
            {/*doesn't do anything yet*/}
            <Button className="delete">
                Delete 
            </Button>
          </div>
        </Box>
    </div> 
  )
  setCartItems(list)
};

const fetchRequests = async ({setCartItems}) => {
    const response =  await fetch("/requests")
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