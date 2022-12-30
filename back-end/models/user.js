const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let userSchema = new Schema(
    {
        //update this when we fully implement users and match it to the Resy API
        name : {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        dateCreated: {type: Date, default: Date.now}
    }
)

module.exports = mongoose.model("User", userSchema)