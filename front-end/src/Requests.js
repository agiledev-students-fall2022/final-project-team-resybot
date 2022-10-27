import './Requests.css';
import React, { useEffect } from 'react'
import StandaloneRequest from './StandaloneRequest';
import mockData from './mockdata/requests.json'
const onAdd = ({setCartItems}) => {
    let list = mockData.map((val) => 
      <div className="template" key={val.id}>
          <div className="description">
              <p>{val.restaurant}</p>
              <p>{val.party_size}</p>
              <p>{val.expiration_date}</p>
          </div>
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