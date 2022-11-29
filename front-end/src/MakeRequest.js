import './MakeRequest.css';
import React, { useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from 'reactstrap';
import axios from 'axios';
//const axios = require('axios')

const MakeRequest = () => {
    const [partySize, setPartySize] = useState(0);
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const navigate = useNavigate();

    const addRequests = async ({restaurant}) => {
      console.log(JSON.parse(localStorage.getItem("user")).data.token)
      let result = await axios.post("/requests", {},{
          headers: {
          "auth-token": JSON.parse(localStorage.getItem("user")).data.token
          },
          "restaurant":restaurant.restaurant_name,"party_size":partySize,"time": time,"date":date,/*fornow*/"userid":"1"
        })
      result = await result;
      let path = "/requests"; 
      navigate(path);
    };
    const showRestaurant = ({restaurant}) =>{
      return(
      <div>
        <img src={restaurant.picture} alt="" className="requestpicture"/>
        <h1> Reservation at {restaurant.restaurant_name} </h1>
        <h2> {restaurant.address} </h2>
      </div>
      )
    }

    const location = useLocation();
    const restaurant = location.state;
    return (
    <div className = "makeRequest">
        {showRestaurant(restaurant)}
        <input type = "number"  placeholder = "Party Size"  id = "party-size"
        onChange = {(e)=>setPartySize(e.target.value)}
        className = "form-control"/>
        <input type = "time"  placeholder = "Time"  id = "time"
        onChange = {(e)=>setTime(e.target.value)}
        className = "form-control"/>
        <input type = "date"  placeholder = "Date"  id = "date"
        onChange = {(e)=>setDate(e.target.value)}
        className = "form-control"/>
        <Button onClick={() => addRequests(restaurant)} className  = "makeRequest"> Make Request </Button> 
    </div>
  )}
  export default MakeRequest;