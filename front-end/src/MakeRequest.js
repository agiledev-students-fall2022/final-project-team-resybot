import './MakeRequest.css';
import React, { useState , useEffect } from 'react'
import { useLocation } from "react-router-dom";

const MakeRequest = () => {
    useEffect(() => {
    }, [])
    const [partySize, setPartySize] = useState(0);
    const [time, setTime] = useState("");
    const [expiration_date, setExpirationDate] = useState("");

    const addRequests = async ({restaurant},partySize,time,expiration_date) => {
      console.log(partySize)
      console.log(time)
      console.log(expiration_date)
      let item={"restaurant":restaurant.restaurant_name,"party_size":partySize,"time": time,"expiration_date":expiration_date}
      let result = await fetch("https://635740569243cf412f954e2c.mockapi.io/api/rb/Requests", {
          method: 'POST',
          headers:{
              "Content-Type":"application/json",
              "Accept":'application/json'
          },
          body:JSON.stringify(item)
          })
      result = await result.json();
    };

    const location = useLocation();
    const restaurant = location.state;

    return (
    <div className = "makeRequest">
        <img src={restaurant.picture} alt="" className="requestpicture"/>
        <h1> Reservation at {restaurant.restaurant_name} </h1>
        <h2> {restaurant.address} </h2>
        <input type = "number"  placeholder = "Party Size"  id = "party-size"
        onChange = {(e)=>setPartySize(e.target.value)}
        className = "form-control"/>
        <input type = "time"  placeholder = "Time"  id = "time"
        onChange = {(e)=>setTime(e.target.value)}
        className = "form-control"/>
        <input type = "date"  placeholder = "Expiration Date"  id = "expiration-date"
        onChange = {(e)=>setExpirationDate(e.target.value)}
        className = "form-control"/>
        <button onClick={() => addRequests({restaurant},partySize,time,expiration_date)}> Make Request </button> 
    </div>
  )}
  export default MakeRequest;