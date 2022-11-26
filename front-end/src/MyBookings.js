import './MyBookings.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
//const axios = require('axios')


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

  function rem(id) {

    const listChange= Resturaunts.filter(item => item.id !== id);

    setRes(listChange)
  }

  return (
    <div>
      <h1 className='top'>My Bookings</h1>
      {Resturaunts.length > 0 && (
          <div className= 'lists'>
            {Resturaunts.map(res => (
              <div key={res["id"]} className = "template">
                <div className="bookingsDescription">
                  <div class="columnLeft">
                    <div className = "itemControl"> Restaurant: <div className = "valueControl">{res["restaurant"]}</div></div>
                    <div className = "itemControl"> Location: <div className = "valueControl">{res["location"]}</div></div>
                  </div>
                  <div class="columnRight">
                    <Button className="delete" onClick = {() => rem(res["id"])}>
                      Delete 
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