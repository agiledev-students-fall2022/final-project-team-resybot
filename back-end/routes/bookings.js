const express = require('express')
const router = express.Router()
const axios = require('axios')
const assert = require('assert')
require("dotenv").config({ silent: true })
const bookingsSchema = require('../models/bookings')
const { bookings } = require('chai')
const { application } = require('express')
require("dotenv").config({ silent: true })

router.get("/", async (req,res) => {
    //this should only display id by user once we implement user stuff
    //bookingsSchema.find()
    axios.get("https://api.resy.com/3/user/reservations", {
        headers: {
        "authorization": "ResyAPI api_key=\"VbWk7s3L4KiK5fzlO7JD3Q5EYolJI7n5\"",
        "x-resy-auth-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJleHAiOjE2NzM4MjkxODYsInVpZCI6MzczMzM4NzcsImd0IjoiY29uc3VtZXIiLCJncyI6W10sImV4dHJhIjp7Imd1ZXN0X2lkIjoxMjU0MTM5MDB9fQ.AZeARHcdxaJiIqHu8sraUDPAdYLGeicUmkob5rDDFglr5opobrpxjpx9JdBthNUMBPvIGyoDdh5lxh5-xB60_v-OAIC4vtUoVAF96U4C9omspI1evt2rjlyDiPu-unyVvODFD6IN79BJDDjAOAQk9F3xIUR0Ycd9gPDyW4EIkXnRbAEs"
      }
    })
    .then(apiResponse => {
        res.json(apiResponse.data.reservations)
    })
    .catch(err => {})
})

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
router.delete("id", async (req,res) => {
    axios.post(`https://staging-api.resy.com/3/cancel`, {
        headers: {
        "authorization": "ResyAPI api_key=\"VbWk7s3L4KiK5fzlO7JD3Q5EYolJI7n5\"",
        "x-resy-auth-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJleHAiOjE2NzM4MjkxODYsInVpZCI6MzczMzM4NzcsImd0IjoiY29uc3VtZXIiLCJncyI6W10sImV4dHJhIjp7Imd1ZXN0X2lkIjoxMjU0MTM5MDB9fQ.AZeARHcdxaJiIqHu8sraUDPAdYLGeicUmkob5rDDFglr5opobrpxjpx9JdBthNUMBPvIGyoDdh5lxh5-xB60_v-OAIC4vtUoVAF96U4C9omspI1evt2rjlyDiPu-unyVvODFD6IN79BJDDjAOAQk9F3xIUR0Ycd9gPDyW4EIkXnRbAEs"
        
      }
    })
    .then(apiResponse =>{
        console.log("Deleted")
    })
    .catch(err => {})
})


module.exports = router;