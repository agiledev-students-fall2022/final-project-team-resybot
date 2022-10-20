import './MyBookings.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'reactstrap';


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
        <Button type = "button" class="btn btn-primary btn-lg btn-block">Make a new reservation</Button>
      </bottom>
    </div>
  )
}

export default MyBookings