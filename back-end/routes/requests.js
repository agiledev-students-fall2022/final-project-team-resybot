const express = require('express')
const router = express.Router()
const axios = require('axios')
require("dotenv").config({ silent: true })

router.get("/",(req,res) => {
    //do stuff in here
    axios
        .get(`${process.env.API_BASE_URL+process.env.REQUEST}?&key=${process.env.API_KEY}`)
        .then(apiResponse => {
            res.json(apiResponse.data)
        })
})

router.post("/", async (req,res) => {
    //do stuff in here
    try{
        const resp = await axios
        .post(`${process.env.API_BASE_URL+process.env.REQUEST}?&key=${process.env.API_KEY}`,{ restaurant: req.body.restaurant, party_size: req.body.party_size, time: req.body.time, date: req.body.date})
        .then(apiResponse =>{
            res.json(apiResponse.data)
        })
    } catch (error) {
        console.log("error")
        console.log(error.response)
    }
})

module.exports = router;