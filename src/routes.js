const express = require("express");
const narcisistNumber = require('./common/narcisist');
const routes = express.Router();
const WeatherController = require("./weather-api/controller");

routes.get("/ping", function(req, res) {
    pong = true;
    res.send({pong: pong})
});

routes.get("/narcisista/:number", function(req, res) {
    if(isNaN(req.params.number)) {
        res.send("We expecting a number here");
        return;
    }
    result = narcisistNumber(req.params.number);
    res.send({result});
});

routes.get("/musica/:coordinate",  WeatherController.getWeather);

module.exports = routes;