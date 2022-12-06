const axios = require('axios')


const runBot = async ({bookingDate, bookingTime, party_size, venueId, timeToRequest, xresyauthtoken, resyAPIkey}) => {
    //console.log(xresyauthtoken)
    //console.log(resyAPIkey)
    //console.log(`https://api.resy.com/4/find?lat=0&long=0&day=${"" + bookingDate.getFullYear() + "-" + ("0" + (bookingDate.getMonth() + 1)).slice(-2) + "-" + ("0" + (bookingDate.getDate() + 1)).slice(-2)}&party_size=${party_size}&venue_id=${venueId}`)
    const result = await axios.get(`https://api.resy.com/4/find?lat=0&long=0&day=${"" + bookingDate.getFullYear() + "-" + ("0" + (bookingDate.getMonth() + 1)).slice(-2) + "-" + ("0" + (bookingDate.getDate())).slice(-2)}&party_size=${party_size}&venue_id=${venueId}`,
    {
        headers:{
            'Content-type': 'application/json',
            "x-resy-auth-token": xresyauthtoken,
		    "authorization": resyAPIkey
        }
    })
    .then(apiResponse =>{
        const result = apiResponse.data.results.venues
        console.log(JSON.parse(JSON.stringify(result.at(0))).slots)
        //no slots open
        if(JSON.parse(JSON.stringify(result.at(0))).slots.length === 0){
            // activate bot cause can't book rn
            //setInterval(anotherbotfunc, time)
            // this is test
            console.log("Interval Here")
        }
        
        // we can book rn!
        else{
            // check to see if time is similar
            // use booking bot
            // this is test
            console.log("No Interval Here")
        }

    })
}

//testing for now
const bookingDate = new Date()
const bookingTime = "12:30"
const party_size = 2
const venueId = 6410
const timeToRequest = "00:00"
const xresyauthtoken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJleHAiOjE2NzI4ODEwNjksInVpZCI6MzY2MzUzMTMsImd0IjoiY29uc3VtZXIiLCJncyI6W10sImV4dHJhIjp7Imd1ZXN0X2lkIjoxMjM5OTE4MDR9fQ.AfJq4ME6M1M3HA0nnQpPmFcNp17mycGffXjrhv6imhk5SDooFaESSB8k-HVo1HD97CghYbCsU-yKorj6YtrRC0C6AHHX44T3Z5gE50l6eZcKapbKkcCJyORErfbuNTT-qT_9mFn1AD0vBlCXiRincANK8HitwRKBppXxWG2hz5YitLls"
const resyAPIkey = "ResyAPI api_key=\"VbWk7s3L4KiK5fzlO7JD3Q5EYolJI7n5\""

runBot({bookingDate,bookingTime,party_size,venueId,timeToRequest,xresyauthtoken,resyAPIkey})
module.exports = {runBot};