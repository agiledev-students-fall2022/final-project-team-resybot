const express = require('express')
const router = express.Router()
const requestSchema = require('../models/request')
const { request } = require('chai')
const {verification} = require('../validation')
const {runBot,helperBookingBot} = require('../bot')
require("dotenv").config({ silent: true })


router.get("/", verification, async (req,res) => {
    //this should only display id by user once we implement user stuff
    requestSchema.find({"owner": req.header('owner')})
    .then(apiResponse => {res.send(apiResponse)})
    .catch(err => {})
})

router.post("/", verification, async (req,res) => {
    //this should only add by id
    apiResponse = {restaurant: req.body.restaurant, party_size: req.body.party_size, time: req.body.time, date: req.body.date, owner: req.header('owner'), timeToCheck:req.body.timeToCheck}
    let date = new Date(req.body.date)
    const time = req.body.time
    const party_size = req.body.party_size
    const venue_id = req.body.venue_id
    const timeToCheck = req.body.timeToCheck
    const xresyauthtoken = req.header("x-resy-auth-token")
    const authorization = req.header("authorization")
    console.log(date,time,party_size,venue_id,timeToCheck)
    requestSchema.insertMany(apiResponse)
    .then(apiResponse =>{
        res.send(apiResponse)
        runBot(date,time,party_size,venue_id,timeToCheck,xresyauthtoken,authorization)
    })
    .catch(err => {}) 
})

module.exports = router;