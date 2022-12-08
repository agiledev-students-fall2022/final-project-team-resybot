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
    const [timeToCheck, setTimeToCheck] = useState("")
    const navigate = useNavigate();

    const addRequests = async (restaurant) => {
      const name = JSON.parse(JSON.stringify(restaurant.data.at(0))).venue.name
      const venue_id = JSON.parse(JSON.stringify(restaurant.data.at(0))).venue.id.resy
      console.log(name)
      console.log(venue_id)
      //test for now
      console.log(timeToCheck)
      console.log(JSON.parse(localStorage.getItem("resyUser")).authorization)
      console.log(JSON.parse(localStorage.getItem("resyUser")).xresyauthtoken)
      let result = await axios.post("/requests", {"restaurant":name, "venue_id":venue_id,"party_size":partySize,"time": time,"date":date,"timeToCheck":timeToCheck},{
          headers: {
          "auth-token": JSON.parse(localStorage.getItem("user")).data.token,
          "owner": JSON.parse(localStorage.getItem("user")).data.id,
          "authorization": JSON.parse(localStorage.getItem("resyUser")).authorization,
          "x-resy-auth-token": JSON.parse(localStorage.getItem("resyUser")).xresyauthtoken
          }
        })
      result = await result;
      let path = "/requests"; 
      navigate(path);
    };
    const showRestaurant = (restaurant) =>{
      return(
      <div>
        <h1> Reservation at {JSON.parse(JSON.stringify(restaurant.data.at(0))).venue.name} </h1>
        <h2> {JSON.parse(JSON.stringify(restaurant.data.at(0))).venue.type}, {JSON.parse(JSON.stringify(restaurant.data.at(0))).venue.location.neighborhood}, {JSON.parse(JSON.stringify(restaurant.data.at(0))).venue.location.name} </h2>
      </div>
      )
    }
    const today = new Date()
    const formattedToday = "" + today.getFullYear() + "-" + ("0" + (today.getMonth() + 1)).slice(-2) + "-" + ("0" + (today.getDate())).slice(-2)
    const formattedTodayYear = "" + (today.getFullYear() + 1) + "-" + ("0" + (today.getMonth() + 1)).slice(-2) + "-" + ("0" + (today.getDate())).slice(-2)
    const location = useLocation();
    const restaurant = location.state;
    return (
    <div className = "makeRequest">
        {showRestaurant(restaurant)}
        <br/>
        <h3 className = "header3Control">Party Size</h3>
        <input type = "number"  placeholder = "Party Size"  id = "time"
        onChange = {(e)=>setPartySize(e.target.value)} 
        className = "form-control"/>
        <h3 className = "header3Control">Time of reservation</h3>
        <input type = "time"  placeholder = "Time of Reservation"  id = "time"
        onChange = {(e)=>setTime(e.target.value)}
        className = "form-control"/>
        <h3 className = "header3Control">Date of reservation</h3>
        <input type = "date"  placeholder = "Date of Reservation"  id = "date"
        onChange = {(e)=>setDate(e.target.value)} min = {formattedToday} max = {formattedTodayYear}
        className = "form-control"/>
        <h3 className = "header3Control">Time to make reservation</h3>
        <input type = "time"  placeholder = "Time to Check"  id = "timeToCheck"
        onChange = {(e)=>setTimeToCheck(e.target.value)}
        className = "form-control"/>
        <Button onClick={() => addRequests(restaurant)} className  = "makeRequest"> Make Request </Button> 
    </div>
  )}
  export default MakeRequest;