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
    requestSchema.insertMany(apiResponse)
    .then(apiResponse =>{res.send(apiResponse)})
    .catch(err => {}) 
})

router.delete("/:id", verification, async (req,res) => {
       const id = req.params.id;
       const owner = req.header('owner')
       console.log(id)
       requestSchema.deleteOne({"_id": id, "owner": owner})
       .then(apiResponse =>{
            if(!apiResponse){
                res.status(404).send({message: "Cannot delete product with id = " + id + " and owner = " + owner})
            }
            else{
                res.send({message: "Product was succesfully deleted"})
            }
       })
       .catch(err => {})
})

module.exports = router;