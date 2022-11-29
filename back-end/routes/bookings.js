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
    bookingsSchema.find()
    .then(apiResponse => {res.send(apiResponse)})
    .catch(err => {})
})

router.post("/", async (req,res) => {
        //this should only add by id
        apiResponse = {restaurant: req.body.restaurant, party_size: req.body.party_size, time: req.body.time, date: req.body.date, userid: req.body.userid}
        bookingsSchema.insertMany(apiResponse)
        .then(apiResponse =>{res.send(apiResponse)})
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