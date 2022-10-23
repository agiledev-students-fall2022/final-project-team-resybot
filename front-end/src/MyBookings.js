import './MyBookings.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const MyBookings = props => {
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
      <Link to="/Requests" className="btn btn-primary">New Reservation</Link>
      </bottom>
    </div>
     //<button onclick="location.href = 'www.google.com';" id="myButton" class="btn btn-primary btn-lg btn-block">Make a new reservation</button>
  )
}

export default MyBookings