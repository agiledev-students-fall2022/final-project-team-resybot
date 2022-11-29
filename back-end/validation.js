
const express = require('express')
require("dotenv").config({ silent: true })
const jwt = require('jsonwebtoken')
const Joi = require('joi');

// basic validating registration
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

// basic validation of login 
const loginValidation = (data) => {
    const schema = Joi.object(
        {
            email: Joi.string().min(3).max(255).required(),
            password: Joi.string().min(6).max(255).required(),
        }
    )
    return schema.validate(data)
}
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

module.exports = {registerValidation, loginValidation, verification} 
