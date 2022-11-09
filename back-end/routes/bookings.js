const express = require('express')
const router = express.Router()
const axios = require('axios')
require("dotenv").config({ silent: true })

router.get("/",(req,res) => {
    //do stuff in here
    axios
        .get(`${process.env.API_BASE_URL+process.env.BOOKINGS}?&key=${process.env.API_KEY}`)
        .then(apiResponse => {
            res.json(apiResponse.data)
        })
})

module.exports = router;