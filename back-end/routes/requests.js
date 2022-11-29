const express = require('express')
const router = express.Router()
const requestSchema = require('../models/request')
const { request } = require('chai')
const { application } = require('express')
require("dotenv").config({ silent: true })
const {verification} = require('../validation')

router.get("/", verification, async (req,res) => {
    //this should only display id by user once we implement user stuff
    requestSchema.find()
    .then(apiResponse => {res.send(apiResponse)})
    .catch(err => {})
})

router.post("/", verification, async (req,res) => {
        //this should only add by id
        apiResponse = {restaurant: req.body.restaurant, party_size: req.body.party_size, time: req.body.time, date: req.body.date, userid: req.body.userid}
        requestSchema.insertMany(apiResponse)
        .then(apiResponse =>{res.send(apiResponse)})
        .catch(err => {}) 
})

router.delete("/:id", verification, async (req,res) => {
       const id = req.params.id;
       console.log(id)
       requestSchema.findByIdAndDelete(id)
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