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
        "x-resy-auth-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJleHAiOjE2NzI4ODEwNjksInVpZCI6MzY2MzUzMTMsImd0IjoiY29uc3VtZXIiLCJncyI6W10sImV4dHJhIjp7Imd1ZXN0X2lkIjoxMjM5OTE4MDR9fQ.AfJq4ME6M1M3HA0nnQpPmFcNp17mycGffXjrhv6imhk5SDooFaESSB8k-HVo1HD97CghYbCsU-yKorj6YtrRC0C6AHHX44T3Z5gE50l6eZcKapbKkcCJyORErfbuNTT-qT_9mFn1AD0vBlCXiRincANK8HitwRKBppXxWG2hz5YitLls"
      }
    })
    .then(apiResponse => {
        res.json(apiResponse.data)
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
router.delete("/:id", async (req,res) => {
    const id = req.params.id;
    console.log(id)
    bookingsSchema.findByIdAndDelete(id)
    .then(apiResponse =>{
         if(!application){
             res.status(404).send({message: "Cannot delete product with id =" + id})
         }
         else{
             res.send({message: "Product was succesfully deleted"})
         }
    })
    .catch(err => {})
})


module.exports = router;