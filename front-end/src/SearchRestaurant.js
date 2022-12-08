import React, {useState, useEffect} from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import './SearchRestaurant.css';
import {Link} from 'react-router-dom'
import axios from 'axios';
// const axios = require('axios')

const fetchRestaurant = async ({venueId, setRestaurant, setSearched}) => {
    console.log(typeof(partySize))
    axios.get("/search", {
        headers: {
            "venueId": venueId,
            "authorization": JSON.parse(localStorage.getItem("resyUser")).authorization,
            "xresytoken": JSON.parse(localStorage.getItem("resyUser")).xresyauthtoken
        }
    })
    .then(apiResponse => {
        const restaurant = apiResponse.data
        setRestaurant(restaurant)
        setSearched(true)
      }
    )
}
 
const SearchRestaurant = (props) => {
    const [venueId, setVenueID] = useState("");
    const [restaurant, setRestaurant] = useState([]);
    const [searched, setSearched] = useState(false)
    const [templateId, setTemplateId] = useState("");
    let content = <h2>No Result</h2>

    if (searched){
        content = <div className="searchResult">
            <Link to="/makerequest" state={{ data: restaurant }}> 
                <div className="entry">
                    <div className="details">
                        <h3>{JSON.parse(JSON.stringify(restaurant.at(0))).venue.name}</h3>
                        <h5>{JSON.parse(JSON.stringify(restaurant.at(0))).venue.type}, {JSON.parse(JSON.stringify(restaurant.at(0))).venue.location.neighborhood}, {JSON.parse(JSON.stringify(restaurant.at(0))).venue.location.name}</h5>
                    </div>
                </div>
            </Link> 
        </div>
    }

    return (
        <div className="search">
            <div className="input">
                <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                label="Venue ID"
                onChange={(event) => {setVenueID(event.target.value)}}
                />
            </div>
            <div className="venueButton">
                <Button variant="outlined" onClick={() => fetchRestaurant({venueId, setRestaurant, setSearched})}>
                    Enter
                </Button>
            </div>
            <div className="venueDetails">
                {content}
            </div>   
        </div>
    );
};
export default SearchRestaurant

