import './Requests.css';
import React, { useEffect } from 'react'
import StandaloneRequest from './StandaloneRequest';


const Requests = ({cartItems}) => {
    useEffect(()=>{})
    return(
        <div className = "Cart">
            <h1> Requests </h1>
            <main>
                {cartItems}
            </main>
        </div>
  )}
  export default Requests;