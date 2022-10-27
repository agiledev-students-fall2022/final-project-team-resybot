import './MakeRequest.css';
import React, { useEffect } from 'react'
import StandaloneRequest from './StandaloneRequest';
import mockData from './mockdata/requests.json'


const MakeRequest =({cartItems,setCartItems}) => {
    const onAdd = () => {
    let list =  mockData
        list.push({"id":"${mockData.length + 1}","restaurant":"test","party_size":"test_size","expiration_date":"test_date"})
    }
    
    return (
    <div className = "makeRequest">
        <h1 id="request_title"> Make Request </h1>
        <button onClick = {onAdd}> Add Request </button>
    </div>
  )}
  export default MakeRequest;