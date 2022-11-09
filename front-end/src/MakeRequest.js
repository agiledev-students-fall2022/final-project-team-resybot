import './MakeRequest.css';
import React, { useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

const MakeRequest = () => {
    const [partySize, setPartySize] = useState(0);
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const navigate = useNavigate();

    const addRequests = async ({restaurant}) => {
        let result = await axios.post("/requests", {
          "restaurant":restaurant.restaurant_name,"party_size":partySize,"time": time,"date":date
          })
        result = await result;
        let path = "/requests"; 
        navigate(path);
      };

    const location = useLocation();
    const restaurant = location.state;
    return (
    <div className = "makeRequest">
        <img src={restaurant.picture} alt="" className="requestpicture"/>
        <h1> Reservation {restaurant.restaurant_name} </h1>
        <h2> {restaurant.address} </h2>
        <input type = "number"  placeholder = "Party Size"  id = "party-size"
        onChange = {(e)=>setPartySize(e.target.value)}
        className = "form-control"/>
        <input type = "time"  placeholder = "Time"  id = "time"
        onChange = {(e)=>setTime(e.target.value)}
        className = "form-control"/>
        <input type = "date"  placeholder = "Date"  id = "date"
        onChange = {(e)=>setDate(e.target.value)}
        className = "form-control"/>
        <button onClick={() => addRequests(restaurant)} > Make Request </button> 
    </div>
  )}
  export default MakeRequest;