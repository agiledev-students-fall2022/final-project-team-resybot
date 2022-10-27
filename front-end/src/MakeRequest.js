import './MakeRequest.css';
import React, { useEffect } from 'react'
import StandaloneRequest from './StandaloneRequest';
import { useLocation } from "react-router-dom";

const MakeRequest =() => {
const addRequests = async ({restaurant}) => {
    let item={"restaurant":restaurant.restaurant_name,"party_size":"test_size","time":"test_time","expiration_date":"test_date"}
    let result = await fetch("https://635740569243cf412f954e2c.mockapi.io/api/rb/Requests", {
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

const location = useLocation();
const { restaurant } = location.state;
    return (
    <div className = "makeRequest">
        <img src={restaurant.picture} alt="" className="requestpicture"/>
        <h1> Reservation at {restaurant.restaurant_name} </h1>
        <h2> {restaurant.address} </h2>
        <button> Select Request Lifetime </button>
        <button> Select Time </button>
        <button onClick = {addRequests({restaurant})}> Make Request </button>
    </div>
  )}
  export default MakeRequest;