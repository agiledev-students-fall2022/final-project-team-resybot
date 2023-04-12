const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const User = require('../models/user')

let requestSchema = new Schema(
    {
        //update this when we fully implement users and match it to the Resy API
        restaurant : {type: String},
        party_size : {type: Number},
        date: {type: Date},
        time: {type: String},
        owner: {type: mongoose.Schema.Types.ObjectId, ref: User},
        dateCreated: {type: Date, default: Date.now},
        timeToCheck: {type: String}
    }
)

module.exports = mongoose.model("Request", requestSchema)
