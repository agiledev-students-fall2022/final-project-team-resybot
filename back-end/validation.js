<<<<<<< HEAD
<<<<<<< HEAD
const express = require('express')
require("dotenv").config({ silent: true })
const jwt = require('jsonwebtoken')
const Joi = require('joi');

// basic validation of registration
=======
=======
const express = require('express')
require("dotenv").config({ silent: true })
const jwt = require('jsonwebtoken')
>>>>>>> 0794272 (basic verification)
const Joi = require('joi');

<<<<<<< HEAD
// basic validating registration
>>>>>>> 210465c (working basic registration)
=======
// basic validation of registration
>>>>>>> 0794272 (basic verification)
const registerValidation = (data) => {
    const schema = Joi.object(
        {
            name: Joi.string().min(2).max(255).required(),
            email: Joi.string().min(3).max(255).required(),
            password: Joi.string().min(6).max(255).required(),
        }
    )
    return schema.validate(data)
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// basic validation of login 
=======
>>>>>>> 3ce3625 (basic login)
=======
// basic validation of login 
>>>>>>> 0794272 (basic verification)
const loginValidation = (data) => {
    const schema = Joi.object(
        {
            email: Joi.string().min(3).max(255).required(),
            password: Joi.string().min(6).max(255).required(),
        }
    )
    return schema.validate(data)
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0794272 (basic verification)
// veryifying our JWT
const verification = (req,res,next) =>{
    const token = req.header("auth-token")
    if(!token){
        return res.status(401).json({error: "protected data"})
    }
    try {
        const checkVerify = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = checkVerify
        next();
    }catch(err){
        res.status(400).json({error: "token not valid"})
    }
}

<<<<<<< HEAD
module.exports = {registerValidation, loginValidation, verification} 
=======

module.exports = { registerValidation}
>>>>>>> 210465c (working basic registration)
=======

module.exports = {registerValidation, loginValidation}
>>>>>>> 3ce3625 (basic login)
=======
module.exports = {registerValidation, loginValidation, verification} 
>>>>>>> 0794272 (basic verification)
