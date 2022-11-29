import './MyBookings.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
//const axios = require('axios')

const rem = async ({res, Resturaunts, setRes}) =>{
  console.log(res._id)
  const response = await axios
    .delete(`/bookings/${res._id}`)
    console.log(response);
  const listChange= Resturaunts.filter(item => item._id !== res._id);
  setRes(listChange)
}


const MyBookings = props => {
  const navigate = useNavigate();
  const [Resturaunts , setRes] = useState([])
  
  const fetchResy = async () => {
    axios.get("/bookings")
    .then( response => {
      const data = response.data
      setRes(data)
    }
    )
  }
  useEffect(() => {
    fetchResy()
  }, [])

  return (
    <div>
      <h1 className='top'>My Bookings</h1>
      {Resturaunts.length > 0 && (
          <div className= 'lists'>
            {Resturaunts.map(res => (
              <div key={res["_id"]} className = "template">
                <div className="bookingsDescription">
                  <div class="columnLeft">
                    <div className = "itemControl"> Restaurant: <div className = "valueControl">{res["resturaunt"]}</div></div>
                    <div className = "itemControl"> Location: <div className = "valueControl">{res["time"]}</div></div>
                  </div>
                  <div class="columnRight">
                  <Button onClick = {() => rem({res, Resturaunts, setRes})} className="delete">
                      Delete Booking
                    </Button>
                  </div>
                </div>  
              </div>))}
              <Button className = "newRequest" onClick = {() => navigate("/SearchRestaurant")}> New Reservation </Button>
          </div>
      )} 

    </div>
  )
}

export default MyBookings