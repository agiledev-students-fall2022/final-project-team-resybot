import './MakeRequest.css';
import React, { useEffect } from 'react'
import StandaloneRequest from './StandaloneRequest';


const MakeRequest =({cartItems,setCartItems}) => {
    const onAdd = () => {
        setCartItems([...cartItems,<StandaloneRequest/>])
    }
    useEffect(()=>{})
    return (
    <div className = "makeRequest">
        <button onClick = {onAdd}> Add Request </button>
    </div>
  )}
  export default MakeRequest;