import './MyBookings.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
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

  const rem = async ({_id}) =>{
    console.log(_id)
    const response = await axios
      .delete(`/bookings/${_id}`)
      .then(res => {
    console.log(response);
    console.log(res.data);
    })
    

    const listChange= Resturaunts.filter(item => item._id !== _id);

    setRes(listChange)
  }

  return (
    <div>
      <h1 className='top'>My Bookings</h1>
      {Resturaunts.length > 0 && (
          <div className= 'lists'>
            {Resturaunts.map(res => (
              <div key={res["_id"]} className = "template">
                <div className="bookingsDescription">
                  <div class="columnLeft">
                    <div className = "itemControl"> Restaurant: <div className = "valueControl">{res["restaurant"]}</div></div>
                    <div className = "itemControl"> Location: <div className = "valueControl">{res["time"]}</div></div>
                  </div>
                  <div class="columnRight">
                    <Button className="delete" onClick = {() => rem(res["_id"])}>
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