const express = require('express')
const cookieParser = require('cookie-parser')
const {verify} = require('jsonwebtoken')
const jwt = require('jsonwebtoken')
const {hash, genSalt, compare} = require('bcryptjs')
const {registerValidation, loginValidation, verification} = require('../validation')

const userSchema = require('../models/user')
const { request } = require('chai')
const { application } = require('express')
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
    const salt = await genSalt(10)
    const hashpswd = await hash(req.body.password, salt)

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

router.post("/login", async (req, res) => {
    //validate user login info
    const { error } = loginValidation(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message })
    }
    //if login info is valid find the user
    const user = await userSchema.findOne({ email: req.body.email })
    if (!user) {
        return res.status(400).json({ error: "Email not found" })
    }
    const correctPassword = await compare(req.body.password, user.password);
    if (!correctPassword) {
        return res.status(400).json({ error: "Password is wrong" })
    }

    //create JWT with username and id
    const token = jwt.sign
    (
        {
            name: user.name,
            id: user._id
        },
        process.env.TOKEN_SECRET 
    );

    res.header("auth-token", token).json({
        token,
        id: user._id
    })
})

router.get("/", verification, async (req,res) => {
    userSchema.find({"_id": req.header('_id')})
    .then(apiResponse => {res.send(apiResponse)})
    .catch(err => {})
}) 



module.exports = router;
