const express = require('express')
const router = express.Router()
const axios = require('axios')
const requestSchema = require('../models/request')
const { request } = require('chai')
require("dotenv").config({ silent: true })

router.get("/", async (req,res) => {
    //only display the stuff per user
    requestSchema.find()
    .then(apiResponse => {res.send(apiResponse)})
    .catch(err => {})
})

router.post("/", async (req,res) => {
    try{
    axios
        .post(`${process.env.API_BASE_URL+process.env.REQUEST}?&key=${process.env.API_KEY}`,{ restaurant: req.body.restaurant, party_size: req.body.party_size, time: req.body.time, date: req.body.date})
        .then(apiResponse =>{
            res.json(apiResponse.data)
        })
    } catch (error) {
        console.log(error.response)
    }
})

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