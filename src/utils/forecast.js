//const request = require('request')
import request from "postman-request";

const forecast = (latitude, longitude, callback) => {
    //const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

    const url = "http://api.weatherstack.com/current?access_key=f0ca0d801ecc37f65d50bacc25549141&query=" + latitude + "," + longitude + "&units=f";
    request({ url, json: true }, (error, {body} = {}) => {
        if (error) {
          callback("Uable to connect to weather service!!", undefined);
        } else if (body.error) {
          callback("Unable to find location!!!", undefined);
        } else {
          callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out.");
        }
      });
}

//module.exports = forecast
export default forecast