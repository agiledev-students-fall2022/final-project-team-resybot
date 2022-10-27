import './MakeRequest.css';
import React, { useEffect } from 'react'
import StandaloneRequest from './StandaloneRequest';


const MakeRequest =({cartItems,setCartItems}) => {
    const onAdd = () => {
        setCartItems([...cartItems,<StandaloneRequest/>])
    }
    
    return (
    <div className = "makeRequest">
        <h1 id="request_title"> Make Request </h1>
        <button onClick = {onAdd}> Add Request </button>
    </div>
  )}
  export default MakeRequest;