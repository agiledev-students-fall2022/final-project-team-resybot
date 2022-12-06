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
        const slots = JSON.parse(JSON.stringify(result.at(0))).slots
        //no slots open
        if(slots.length === 0){
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
            let id = 0;
            for(let i = 0; i < slots.length; i++){
                //slot time
                const slotTime = (((JSON.parse(JSON.stringify(slots.at(i))).date.start).slice(-8)).slice(0,5))
                console.log(slotTime)
                //search everyslot for something close enough
                if(slotTime !== bookingTime){
                    if(slotTime.slice(0,2) === bookingTime.slice(0,2) && (parseInt(slotTime.slice(-2)) + 15 >= parseInt(bookingTime.slice(-2)) && parseInt(slotTime.slice(-2)) - 15 <= parseInt(bookingTime.slice(-2)))){
                    id = i;
                    console.log(`close enough, index: ${id}`)
                    }
                }
                //break immediatly cause we have the best time
                else if(slotTime === bookingTime){
                    id = i;
                    console.log(`we found a time exactly like the one we want, index: ${id}`)
                    break;
                }
            }
            const config_id = JSON.parse(JSON.stringify(slots.at(id))).config.token
            console.log(`No Interval Here, configID: ${config_id}`)
            console.log(`https://api.resy.com/3/details?party_size=${party_size}&day=${"" + bookingDate.getFullYear() + "-" + ("0" + (bookingDate.getMonth() + 1)).slice(-2) + "-" + ("0" + (bookingDate.getDate())).slice(-2)}&config_id=${config_id}`)
            axios.get(`https://api.resy.com/3/details?party_size=${party_size}&day=${"" + bookingDate.getFullYear() + "-" + ("0" + (bookingDate.getMonth() + 1)).slice(-2) + "-" + ("0" + (bookingDate.getDate())).slice(-2)}&config_id=${config_id}`, {
                headers: {
                    "x-resy-auth-token": xresyauthtoken,
		            "authorization": resyAPIkey
                }
            })
            .then(response =>{
                const book_token = response.data.book_token.value
                console.log(book_token)
                //last call!
                axios.post(`https://api.resy.com/3/book`,{book_token},{
                    headers:{
                        "x-resy-auth-token": xresyauthtoken,
		                "authorization": resyAPIkey,
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
                .then(res =>{
                    console.log(res)
                })
            })
        }

    })
}

//testing for now
const bookingDate = new Date()
bookingDate.setDate(7)
const bookingTime = "12:30"
const party_size = 2
const venueId = 6410
const timeToRequest = "00:00"
const xresyauthtoken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJleHAiOjE2NzI4ODEwNjksInVpZCI6MzY2MzUzMTMsImd0IjoiY29uc3VtZXIiLCJncyI6W10sImV4dHJhIjp7Imd1ZXN0X2lkIjoxMjM5OTE4MDR9fQ.AfJq4ME6M1M3HA0nnQpPmFcNp17mycGffXjrhv6imhk5SDooFaESSB8k-HVo1HD97CghYbCsU-yKorj6YtrRC0C6AHHX44T3Z5gE50l6eZcKapbKkcCJyORErfbuNTT-qT_9mFn1AD0vBlCXiRincANK8HitwRKBppXxWG2hz5YitLls"
const resyAPIkey = "ResyAPI api_key=\"VbWk7s3L4KiK5fzlO7JD3Q5EYolJI7n5\""

runBot({bookingDate,bookingTime,party_size,venueId,timeToRequest,xresyauthtoken,resyAPIkey})
module.exports = {runBot};