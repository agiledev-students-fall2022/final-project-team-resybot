import React, {useState} from "react";
import { useEffect } from 'react'
import TextField from "@mui/material/TextField";
import './SearchRestaurant.css';

const SearchRestaurant = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [restauraunts , setRestaurants] = useState([])

    const fetchRestauraunts = async () => {
        const response = await fetch("https://635740569243cf412f954e2c.mockapi.io/api/rb/Restaurants")
        const data = await response.json()
        setRestaurants(data)
    } 
    //try
    useEffect(() => {
        fetchRestauraunts()
    }, [])

    return (
        <div className="search">
            <div className="input">
                <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                label="Search"
                onChange={(event) => {setSearchTerm(event.target.value)}}
                />
            </div>
            <div className="filter">
                {
                    restauraunts 
                    .filter((entry) => {
                        if(searchTerm == ""){
                            return entry;
                        }
                        else if(entry.restaurant_name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return entry;
                        }
                    })
                    .map((entry) => {
                        return(
                        <div className="entry" key={entry.id}>
                            <img src={entry.picture} alt="restaurant image" className="picture"/>
                            <div className="restaurant_details">
                                <h3>{entry.restaurant_name}</h3>
                                <h5>{entry.location}</h5>
                                <h5>{entry.type}</h5>
                            </div>
                            <div className="rating">
                                <h6>{entry.rating}({entry.no_reviews})</h6>
                            </div>
                        </div> 
                        )
                    })
                }
            </div>   
        </div>
    );
};
export default SearchRestaurant
