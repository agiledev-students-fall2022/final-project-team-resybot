
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const User = require('../models/user');
const { registerValidation, loginValidation } = require('../validation');

router.post("/register", async (req, res) => {

const userSchema = require('../models/user')
const { request } = require('chai')
const { application } = require('express')
const { createSearchParams } = require('react-router-dom')
const user = require('../models/user')
const router = express.Router()
require("dotenv").config({ silent: true })

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    //check if already registered
    const emailExists = await User.findOne({ email: req.body.email });

    if (emailExists) {
        return res.status(400).json({ error: "Email already exists" });
    }

    //hash password
    const generatedsalt = await bcrypt.genSalt(10);
    const hashpswd = await bcrypt.hash(req.body.password, generatedsalt);

    //create user 
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

})


router.post("/login", async (req,res) => {
   //validate user input
   const {err} = registerValidation(req.body)
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

    //create authentication token with username and id
    const token = jwt.sign(
        {
            name: user.name,
            id: user._id
        },
        process.env.TOKEN_SECRET
    );

    res.header("auth-token", token).json({
        error: null,
        data: { token }
    })
})

module.exports = router