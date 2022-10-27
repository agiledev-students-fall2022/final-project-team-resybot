import './MakeRequest.css';
import React, { useEffect } from 'react'
import StandaloneRequest from './StandaloneRequest';
import { useLocation } from "react-router-dom";
import RequestConfirmation from './RequestConfirmation';


const MakeRequest = () => {


    // const onAdd = () => {
    //     let data.push({"id":"${mockData.length + 1}","restaurant":"test","party_size":"test_size","expiration_date":"test_date"})
    // }
    const location = useLocation();
    const restaurant = location.state;

    return (
    <div className = "makeRequest">
        <img src={restaurant.picture} alt="" className="requestpicture"/>
        <h1> Reservation at {restaurant.restaurant_name} </h1>
        <h2> {restaurant.address} </h2>
        <button> Select Party Size </button>
        <button> Select Time </button>
        <button> Select Request Lifetime </button>
        <RequestConfirmation restaurant={restaurant}></RequestConfirmation>
    </div>
  )}
  export default MakeRequest;