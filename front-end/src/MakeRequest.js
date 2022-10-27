import './MakeRequest.css';
import React, { useEffect } from 'react'
import StandaloneRequest from './StandaloneRequest';
import { useLocation } from "react-router-dom";
import SelectTime from './SelectTime';
import RequestConfirmation from './RequestConfirmation';


const MakeRequest = (props) => {
// const addRequests = async () => {
//     let item={"id":"${mockData.length + 1}","restaurant":"test","party_size":"test_size","expiration_date":"test_date"}
//     let result = await fetch("https://635740569243cf412f954e2c.mockapi.io/api/rb/Requests", {
//         method: 'POST',
//         headers:{
//             "Content-Type":"application/json",
//             "Accept":'application/json'
//         },
//         body:JSON.stringify(item)
//         })
//     result = await result.json();
// }

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
        <SelectTime></SelectTime>
        <RequestConfirmation></RequestConfirmation>
    </div>
  )}
  export default MakeRequest;