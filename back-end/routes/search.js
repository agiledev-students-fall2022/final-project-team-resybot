const express = require('express')
const router = express.Router()
const axios = require('axios')
const assert = require('assert')
require("dotenv").config({ silent: true })
const { bookings } = require('chai')
const { application } = require('express')
const {verification} = require('../validation')

const todaysDate = new Date();
todaysDate.setHours(0,0,0,0)

router.get("/", verification, async (req,res) => {
    const venueId = req.header('venueId')
    const xresytoken = req.headers.xresytoken
    const authorization = req.headers.authorization

    axios
        .get(`https://api.resy.com/4/find?lat=0&long=0&day=${"" + todaysDate.getFullYear() + "-" + ("0" + (todaysDate.getMonth() + 1)).slice(-2) + "-" + ("0" + (todaysDate.getDate())).slice(-2)}&party_size=2&venue_id=${venueId}`, {
            headers: {
            "authorization": authorization,
            "x-resy-auth-token": xresytoken
          }
        })
        .then(apiResponse => {
            // console.log(JSON.parse(JSON.stringify(result.at(0))).slots)
            const result = apiResponse.data.results.venues
            res.json(result)
        })
        .catch(err => {
            if(err.response.status === 400){
                res.status(400).json({ error: "Invalid User Input"});
            }
            if(err.response.status === 401){
                res.status(400).json({ error: "Invalid User Token"});
            }
            if(err.response.status === 419){
                res.status(419).json({ error: "Invalid Token"});
            }
        }) 
})
module.exports = router;
