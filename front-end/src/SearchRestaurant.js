import React, {useState, useEffect} from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import './SearchRestaurant.css';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
// const axios = require('axios')

const fetchRestaurant = async ({venueId, setRestaurant, setSearched, setTemplateId, setInvalid, navigate}) => {
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
        setTemplateId(JSON.parse(JSON.stringify(restaurant.at(0))).venue.default_template)
      }
    )
    .catch(error => {
      if(error.response.status === 401){
        localStorage.removeItem("user")
        localStorage.removeItem("resyUser")
        navigate("/login")
      }
      if(error.response.status === 400){
        console.log("Invalid Input")
        setInvalid(true)
      }
    })
}
 
const SearchRestaurant = (props) => {
    const navigate = useNavigate();
    const [venueId, setVenueID] = useState("");
    const [restaurant, setRestaurant] = useState([]);
    const [searched, setSearched] = useState(false)
    const [invalid, setInvalid] = useState(false)
    const [templateId, setTemplateId] = useState("");
    let content = <h2>Please Input Data</h2>

    if (searched){
        if(invalid){
            content = <h2>Input is Invalid</h2>
        }
        if(restaurant.length === 0){
            content = <h2>No Results</h2>
        }
        else{
            content = <div className="searchResult">
            <Link to="/makerequest" state={{ data: restaurant }}> 
                <div className="entry">
                    <div className="details">
                        <h3>{JSON.parse(JSON.stringify(restaurant.at(0))).venue.name}</h3>
                        <h5>{JSON.parse(JSON.stringify(restaurant.at(0))).venue.type}, {JSON.parse(JSON.stringify(restaurant.at(0))).venue.location.neighborhood}, {JSON.parse(JSON.stringify(restaurant.at(0))).venue.location.name}</h5>
                        <a>{JSON.parse(JSON.stringify(restaurant.at(0)))["templates"][templateId]["content"]["en-us"]["about"]["body"]}</a>
                    </div>
                </div>
            </Link> 
        </div>
        }
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
                <Button variant="outlined" onClick={() => fetchRestaurant({venueId, setRestaurant, setSearched, setTemplateId, setInvalid, navigate})}>
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

