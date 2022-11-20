const express = require('express')
const router = express.Router()
const axios = require('axios')
const requestSchema = require('../models/request')
const { request } = require('chai')
require("dotenv").config({ silent: true })

router.get("/", async (req,res) => {
    //this should only display id by user once we implement user stuff
    requestSchema.find()
    .then(apiResponse => {res.send(apiResponse)})
    .catch(err => {})
})

router.post("/", async (req,res) => {
        //this should only add by id
        apiResponse = {restaurant: req.body.restaurant, party_size: req.body.party_size, time: req.body.time, date: req.body.date, userid: req.body.userid}
        requestSchema.insertMany(apiResponse)
        .then(apiResponse =>{
            res.send(apiResponse)
        })
        .catch(err => {}) 
})

//this still isnt integrated and doesnt work
router.delete("/", async (req,res) => {
    console.log(req.body.id)
    try{
        axios
        .delete(`${process.env.API_BASE_URL+process.env.REQUEST}?&key=${process.env.API_KEY}`,{
            params: {id: req.params.id}
        })
        .then(apiResponse =>{
            res.json(apiResponse.data)
        })
    } catch (error) {
        console.log(error.response)
    }
})

module.exports = router;