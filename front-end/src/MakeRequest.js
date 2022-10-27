import './MakeRequest.css';
import React, { useEffect } from 'react'
import StandaloneRequest from './StandaloneRequest';


const MakeRequest =() => {
const addRequests = async () => {
    let item={"id":"${mockData.length + 1}","restaurant":"test","party_size":"test_size","expiration_date":"test_date"}
    let result = await fetch("https://635740569243cf412f954e2c.mockapi.io/api/rb/Request", {
        method: 'POST',
        headers:{
            "Content-Type":"application/json",
            "Accept":'application/json'
        },
        body:JSON.stringify(item)
        })
    result = await result.json();
}

    // const onAdd = () => {
    //     let data.push({"id":"${mockData.length + 1}","restaurant":"test","party_size":"test_size","expiration_date":"test_date"})
    // }

    return (
    <div className = "makeRequest">
        <h1 id="request_title"> Make Request </h1>
        <button onClick = {addRequests}> Add Request </button>
    </div>
  )}
  export default MakeRequest;