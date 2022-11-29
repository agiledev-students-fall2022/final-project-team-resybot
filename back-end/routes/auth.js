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

    //check if already registered
    const emailExists = await User.findOne({ email: req.body.email });

    if (emailExists) {
        return res.status(400).json({ error: "Email already exists" });
    }

    //hash password
    const generatedsalt = await bcrypt.genSalt(10);
    const hashpswd = await bcrypt.hash(req.body.password, generatedsalt);

    //create user o bject and save it in Mongo (via try-catch)
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        hashpswd
    });

    try {
        const savedUser = await user.save(); 
        res.json({ error: null, data: savedUser._id });
    } catch (error) {
        res.status(400).json({ error });
    }

});

router.post("/login", async (req, res) => {

    //validate user login info
    const { error } = loginValidation(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({ error: "user not found" });
    }

    //check for password correctness
    const correctPassword = await bcrypt.compare(req.body.password, user.password);
    if (!correctPassword) {
        return res.status(400).json({ error: "Password is incorrect" })
    }

router.post("/login", async (req,res) => {

    res.header("auth-token", generatedtoken).json({
        error: null,
        data: { generatedtoken }
    });
})
