const express = require('express')
const router = express.Router()
const axios = require('axios')
const assert = require('assert')
require("dotenv").config({ silent: true })
const bookingsSchema = require('../models/bookings')
const { bookings } = require('chai')
const { application } = require('express')
const { readSync } = require('fs')
const {verification} = require('../validation')
require("dotenv").config({ silent: true })

router.get("/", verification, async (req,res) => {
    //this should only display id by user once we implement user stuff
    //bookingsSchema.find()
    axios.get("https://api.resy.com/3/user/reservations", {
        headers: {
        "authorization": req.header("authorization"),
        "x-resy-auth-token": req.header("x-resy-auth-token")
      }
    })
    .then(apiResponse => {
        res.json(apiResponse.data)
    })
    .catch(error => {
            res.status(419).json({ error: "Token is not valid"});
      })
        
    })
/*
router.post("/", async (req,res) => {
        //this should only add by id
        apiResponse = {restaurant: req.body.restaurant, party_size: req.body.party_size, time: req.body.time, date: req.body.date, userid: req.body.userid}
        bookingsSchema.insertMany(apiResponse)
        .then(apiResponse =>{
            console.log("testing bookings")
            res.send(apiResponse)
        })
        .catch(err => {}) 
})
*/
router.delete("id", async (req,res) => {

    axios.post(`https://api.resy.com/3/cancel`, {
        headers: {
        "authorization": res.header("authorization"),
        "x-resy-auth-token": res.header("x-resy-auth-token")
        }
    })
    .then(apiResponse =>{
        console.log("Deleted")
    })
    .catch(err => {})
})


module.exports = router;