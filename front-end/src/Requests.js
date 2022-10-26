import './Requests.css';
import React, { useEffect } from 'react'
import StandaloneRequest from './StandaloneRequest';


const Requests = ({cartItems,setCartItems}) => {
    useEffect(()=>{})
    return(
        <div className = "Cart">
            <h1> Requests </h1>
            <main>
                {cartItems}
                <button onClick = {() => setCartItems([...cartItems,<StandaloneRequest/>])}> Add Request </button>
            </main>
        </div>
  )}
  export default Requests;