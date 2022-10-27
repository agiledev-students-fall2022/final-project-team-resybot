import React from 'react';
import Popup from 'reactjs-popup';
import './RequestConfirmation.css';
import { useCallback } from 'react';

const RequestConfirmation = (props) => {
  const restaurant = props.restaurant
  const addRequests = async ({restaurant}) => {
    let item={"restaurant":restaurant.restaurant_name,"party_size":"test_size","expiration_date":"test_date"}
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

return(
    <Popup trigger={<button>MakeRequest</button>} position="center center">
      {close => (
        <div className='popup_wrapper'>
            <h1>Are you sure you want to make this request?</h1>
            <div className='button_wrapper'>
                <button onClick = {addRequests(restaurant)} className='popupbutton'>
                    Yes
                </button>
                <button className='popupbutton' onClick={close}>
                    No
                </button>
            </div>
        </div>
      )}
    </Popup>
  )};
export default RequestConfirmation