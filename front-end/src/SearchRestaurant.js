import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import './SearchRestaurant.css';
import data from "./mockdata/MockRestaurantData.json";

const SearchRestaurant = (props) => {
    const [searchTerm, setSearchTerm] = useState("");

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
                    data 
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
                        <div className="entry" key={val.id}>
                            <img src={val.picture} alt="" className="picture"/>
                            <div className="details">
                                <h3>{val.restaurant_name}</h3>
                                <h5>{val.location}, {val.type}</h5>
                            </div>
                            <div className="rating">
                                <h6>{val.rating}({val.no_reviews})</h6>
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
