import './MyBookings.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
//import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const MyBookings = props => {

  const [Resturaunts , setRes] = useState([])
  
  const fetchResy = async () => {
    const response = await fetch("https://api.mockaroo.com/api/c2496c90?count=10&key=459f4720")
    const stuff = await response.json()
    setRes(stuff)
  }
  //try
  useEffect(() => {
    fetchResy()
  }, [])


  return (
    <div>
      {Resturaunts.length > 0 && (
          <ul className= 'lists'>
            {Resturaunts.map(res => (
              <li key={res["id"]}>
                <p className='asd'>
                  <Link to="/makerequest" className="btn btn-primary">{res["Resturant name"]}</Link>
                  location {res["location"]}
                </p>
                
              </li>))}

          </ul>
      )} 

    </div>
  )


/*
  
  return (
    <div className="MyBookings">
      <h1>Current Bookings</h1>
      <main className='list'>
        <p> <Button variant="contained">Reservation #1</Button> Indian place</p>
        <p> <Button variant="contained">Reservation #2</Button> Kosher place</p>
        <p> <Button variant="contained">Reservation #3</Button> Mexican place</p>
        <p> <Button variant="contained">Reservation #4</Button> Burger joint</p>
      </main>
      <bottom className='bottom'>
      <Link to="/makerequest" className="btn btn-primary">New Reservation</Link>
      </bottom>
    </div>
     //<button onclick="location.href = 'www.google.com';" id="myButton" class="btn btn-primary btn-lg btn-block">Make a new reservation</button>
  )
  */
}

export default MyBookings