const express = require('express')
const cookieParser = require('cookie-parser')
const {verify} = require('jsonwebtoken')
const {hash} = require('bcryptjs')
const {registerValidation} = require('../validation')

const userSchema = require('../models/user')
const { request } = require('chai')
const { application } = require('express')
const user = require('../models/user')
const { createSearchParams } = require('react-router-dom')
const router = express.Router()
require("dotenv").config({ silent: true })

router.post('/register', async (req,res) => {
    //validate user input
    const {error} = registerValidation(req.body)
    if(error) {
        return res.status(400).json({error: error.details[0].message})
    }

    //check if the email is already registered
    const emailExist = await userSchema.findOne({email: req.body.email})
    if(emailExist){
        return res.status(400).json({error: "email already registered"})
    }
    //hash the password
    const hashpswd = await hash(req.body.password, 10)

    //create a user
    const userObject = new userSchema({
        name: req.body.name,
        email: req.body.email,
        password: hashpswd
    })
    try {
        const savedUser = await userObject.save()
        res.json({error : null, data: savedUser._id});
    } catch (err) {
        res.status(400).json({err})
    }
})

router.post("/login", async (req,res) => {

})

module.exports = router;