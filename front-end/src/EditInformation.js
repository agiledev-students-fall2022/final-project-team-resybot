import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import {Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './EditInformation.css';

const EditInformation = () => {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    
    const handleChange = (e) => {
        setFname(e.target.value)
        setLname(e.target.value)
    }

    return (
    <div >
        <h1>React Form Handling</h1>
        <form>
        <label>
            First Name: 
            <input type="text" value={fname} onChange={handleChange} />
        </label>
        <label>
             Last Name: 
            <input type="text" value={lname} onChange={handleChange} />
        </label>
        </form>
        <h5>First name: {fname}</h5>
        <h5>Last name: {lname}</h5>
        <Link to = "/Settings">
            <Button variant = "secondary" size = "lg " >Save Changes</Button>
        </Link> 
    </div>
    );
}

export default EditInformation;
