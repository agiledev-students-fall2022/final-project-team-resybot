const express = require('express')
const router = express.Router()
const axios = require('axios')
require("dotenv").config({ silent: true })

//do stuff here
router.post('/',(req,res) => {
    axios
    .post(`${process.env.API_BASE_URL+process.env.REQUEST}?&key=${process.env.API_KEY}`)
    .then(apiResponse => {
        res.json(apiResponse.data)
    })
})

module.exports = router;