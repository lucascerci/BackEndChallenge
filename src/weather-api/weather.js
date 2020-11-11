var request = require('request');

const apiKey = process.env.WEATHER_API_KEY || "45e12d970ebe4cff892130410201111";
const apiURL = process.env.WEATHER_API  || 'http://api.weatherapi.com/v1/';
const responseFormat = process.env.WEATHER_API_KEY_RESPONSE_FORMAT || 'current.json?';


var weather = {
   get: function(req, res, next) {
       request(apiURL + responseFormat + 
                'key=' + apiKey + '&q=' 
               + req.params.coordinate,
       function (error, response, body) {
           if (!error && response.statusCode == 200) {    
               res.send(response.body);
           } else {
               console.log(response.statusCode + response.body);
               res.send("error, ", response.statusCode);
           }
       });
   }
};

module.exports = weather;