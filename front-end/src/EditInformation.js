import React, { useState } from 'react'
import {Button, Form} from 'react-bootstrap'
import {Link } from "react-router-dom";
import {useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './EditInformation.css';

const EditInformation = () => {
    const [name, setName] = useState("")
    const [resyBotEmail, setresyBotEmail] = useState("")
    const [resyEmail, setresyEmail] = useState("")
    const [resyBotPassword, setresyBotPassword] = useState("")
    const [resyPassword, setresyPassword] = useState("")
    const [resyBotConfirmPassword, setresyBotConfirmPassword] = useState("")
    const [resyConfirmPassword, setresyConfirmPassword] = useState("")

    let navigate = useNavigate();
    const buttonClick = (e) => {
        if (resyBotPassword != resyBotConfirmPassword) {
            alert("ResyBot Passwords don't match!")
            e.preventDefault();
        } else if (resyPassword != resyConfirmPassword){
            alert("Resy Passwords don't match!")
            e.preventDefault();
        } else {
            let path = '/settings';
            navigate(path, {state : displayInfo})
        }
    }

    let displayInfo = {
        displayName: name,
        displayResyBotEmail: resyBotEmail,
        displayResyEmail: resyEmail,
    }


    return (
     <div >
    <h1>Edit Information</h1>
    <div>
        <div className = "profileContainer">
            <Form>
                <Form.Group controlId = "name" className='form-container'>
                    <Form.Label> Name </Form.Label>
                    <Form.Control
                     type = "text"
                     placeholder='Enter Name'
                     value = {name}
                     onChange = {(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId = "ResyBot Email" className='form-container'>
                    <Form.Label> ResyBot Email </Form.Label>
                    <Form.Control
                     type = "text"
                     placeholder='Enter ResyBot Email'
                     value = {resyBotEmail}
                     onChange = {(e) => setresyBotEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group  className='form-container' controlId = "ResyBot Password">
                    <Form.Label> ResyBot Password </Form.Label>
                    <Form.Control
                     type = "password"
                     placeholder='Enter ResyBot Password'
                     value = {resyBotPassword}
                     onChange = {(e) => setresyBotPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group  className='form-container' controlId = "Confirm ResyBot Password">
                    <Form.Label> Confirm ResyBot Password </Form.Label>
                    <Form.Control
                     type = "password"
                     placeholder='Confirm ResyBot Password'
                     value = {resyBotConfirmPassword}
                     onChange = {(e) => setresyBotConfirmPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group  className='form-container' controlId = "Resy Email">
                    <Form.Label> Resy Email </Form.Label>
                    <Form.Control
                     type = "text"
                     placeholder='Enter Resy Email'
                     value = {resyEmail}
                     onChange = {(e) => setresyEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group  className='form-container' controlId = "Resy Password">
                    <Form.Label> Resy Password </Form.Label>
                    <Form.Control
                     type = "password"
                     placeholder='Enter Resy Password'
                     value = {resyPassword}
                     onChange = {(e) => setresyPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group  className='form-container' controlId = "Confirm Resy Password">
                    <Form.Label> Confirm Resy Password </Form.Label>
                    <Form.Control
                     type = "password"
                     placeholder='Confirm Resy Password'
                     value = {resyConfirmPassword}
                     onChange = {(e) => setresyConfirmPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button variant = "secondary" size = "lg " type = "submit" onClick={buttonClick}>Save Changes</Button>
            </Form>
        </div>
    </div>
</div>

    );
}

export default EditInformation;
