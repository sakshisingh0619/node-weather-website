//const request = require('request')
import request from "postman-request";


const geocode = (address, callback) => {
   // const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

   const url = 'http://api.positionstack.com/v1/forward?access_key=42f37780a0665665de8cb209e9ad416d&query=' + address
   request({url, json: true}, (error, {body} = {}) => {
    if (body.data.length === 0) {
        callback("Unable to find location. Try another search again!!!", undefined);
    } else if (error ) {
        callback("Unable to connect to connect to loaction services!!!!"), undefined;
    } else {
        //console.log(body);

        callback(undefined, { 
            latitude: body.data[0].latitude, 
            longitude: body.data[0].longitude,
            location: body.data[0].label
        }) ;
    }
})
}

//module.exports = forecast
export default geocode