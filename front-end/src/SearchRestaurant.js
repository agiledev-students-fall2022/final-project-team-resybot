import React, {useState, useEffect} from "react";
import TextField from "@mui/material/TextField";
import './SearchRestaurant.css';
import x from "./mockdata/MockRestaurantData.json";
import {Link} from 'react-router-dom'

const fetchRestaurants = async ({setRestaurants}) => {
    const response =  await fetch("/search")
    const data = await response.json()
    setRestaurants(data)
}

const SearchRestaurant = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [restaurants, setRestaurants] = useState([]);

    useEffect(()=>{fetchRestaurants({setRestaurants})},[])
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
                    restaurants 
                    .filter((val) => {
                        if(searchTerm == ""){
                            return val;
                        }
                        else if(val.restaurant_name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val;
                        }
                    })
                    .map((val) => {
                        return(
                            <Link to="/makerequest" state={{ restaurant: val }}> 
                            <div className="entry" key={val.id}>
                                <img src={val.picture} alt="" className="picture"/>
                                <div className="details">
                                    <h3>{val.restaurant_name}</h3>
                                    <h5>{val.location}, {val.type}</h5>
                                </div>
                                <div className="rating">
                                    <h6>{val.rating}/5 ({val.no_reviews} reviews)</h6>
                                </div>
                            </div>
                            </Link> 
                        )
                    })
                }
            </div>   
        </div>
    );
};
export default SearchRestaurant
