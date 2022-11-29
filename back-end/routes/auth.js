const express = require('express')
require("dotenv").config({ silent: true })
const jwt = require('jsonwebtoken')
const {hash, compare} = require('bcryptjs')
const {registerValidation, loginValidation} = require('../validation')

const userSchema = require('../models/user')
const { request } = require('chai')
const { application } = require('express')
const user = require('../models/user')
const router = express.Router()
require("dotenv").config({ silent: true })

router.post('/register', async (req,res) => {
    //validate user input
    const {err} = registerValidation(req.body)
    if(err) {
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
   //validate user input
   const {err} = loginValidation(req.body)
   if(err) {
       return res.status(400).json({error: error.details[0].message})
   }

   //if login info is valid find user
   const user = await userSchema.findOne({email: req.body.email})
   //else throw error
   if(!user) {
       return res.status(400).json({error: "not a registered email "})
   }
   // check password
   const correctPassword = await compare(req.body.password, user.password)
   if(!correctPassword){
        return res.status(400).json({error: "incorrect password"})
   }

   //create JWT with username and id
   const token = jwt.sign(
    {  
        name: user.name,
        id: user._id
    },
    process.env.TOKEN_SECRET
   )
   //attach to header
   res.header("auth-token", token).json({
        error: null,
        data: {token}
   })

})

module.exports = router;