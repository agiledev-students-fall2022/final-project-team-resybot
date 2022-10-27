import React from 'react';
import Popup from 'reactjs-popup';
import './RequestConfirmation.css';

const RequestConfirmation = () => (
    <Popup trigger={<button>MakeRequest</button>} position="center center">
      {close => (
        <div className='popup_wrapper'>
            <h1>Are you sure you want to make this request?</h1>
            <div className='button_wrapper'>
                <button className='popupbutton' onClick={close}>
                    Yes
                </button>
                <button className='popupbutton' onClick={close}>
                    No
                </button>
            </div>
        </div>
      )}
    </Popup>
  );
export default RequestConfirmation