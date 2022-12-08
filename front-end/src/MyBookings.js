import './MyBookings.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
//const axios = require('axios')

const rem = async ({res, Resturaunts, setRes}) =>{
  console.log(res._id)
  const auth = JSON.parse(localStorage.getItem("resyUser")).authorization
  const xresy = JSON.parse(localStorage.getItem("resyUser")).xresyauthtoken
  const response = await axios
    .delete(`/bookings/${res["reservation_id"]}`,{
      headers:{
        "authorization": auth,
        "x-resy-auth-token": xresy
      }
    })
    console.log(response);
  const listChange= Resturaunts.filter(item => item._id !== res._id);
  setRes(listChange)
}


const MyBookings = props => {
  const navigate = useNavigate();
  const [Resturaunts , setRes] = useState([])
  const [isLoading, setLoading] = useState(true)
  const auth = JSON.parse(localStorage.getItem("resyUser")).authorization
  const xresy = JSON.parse(localStorage.getItem("resyUser")).xresyauthtoken
  
  useEffect(() => {
    fetchResy()
  }, [])
  
  const fetchResy = () => {
    axios.get("/bookings",{
      headers:{
        "authorization": auth,
        "x-resy-auth-token": xresy
      }
       
    })
    .then( response => {
      const data = response.data
      setRes(data)
      setLoading(false)
    }
    )
    .catch(error => {
      if(error.response.status === 419){
        localStorage.removeItem("resyUser")
        navigate("/settings")
      }
    })
  }

  let idd = null
  let name = null

  if (isLoading) {
    return (
      <div  className="loadingContainer">
        <a>Loading</a>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1 className='top'>My Bookings</h1>
        {Resturaunts.reservations.length > 0 && (
            <div className= 'lists'>
              {Resturaunts.reservations.map(res => (
                <div key={res["reservation_id"]} className = "template">
                  <div className="bookingsDescription">
                    <div class="columnLeft">
                      <div className = "itemControl"> Venue ID: <div className = "valueControl">{idd = res["venue"]["id"]}</div></div>
                      <div className = "itemControl"> Name: <div className = "valueControl">{Resturaunts["venues"][idd]["name"]}</div></div>
                      <div className = "itemControl"> Cancellation Policy: <div className = "valueControl">{res["cancellation_policy"]}</div></div>
                      <div className = "itemControl"> Date: <div className = "valueControl">{res["day"]}</div></div>
                      <div className = "itemControl"> Party Size <div className = "valueControl">{res["num_seats"]}</div></div>
                    </div>
                    <div class="columnRight">
                    <Button onClick = {() => rem({res, Resturaunts, setRes})} className="delete">
                        Cancel Booking
                      </Button>
                    </div>
                  </div>  
                </div>
                ))}
                <Button className = "newRequest" onClick = {() => navigate("/SearchRestaurant")}> New Reservation </Button>
            </div>
        )} 
      </div>
    )
  }
}

export default MyBookings