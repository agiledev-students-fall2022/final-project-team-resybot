const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let bookingsSchema = new Schema(
    {
        //update this when we fully implement users and match it to the Resy API
        restaurant : {type: String},
        //location : {type: String},
        //not up on the front-end right now
        party_size : {type: Number},
        date: {type: Date},
        time: {type: String},
        //this is gonna need an update for sure
        userid: {type: String}
    }
)

module.exports = mongoose.model("Bookings", bookingsSchema)
