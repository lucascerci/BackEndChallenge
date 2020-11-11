const express = require("express");
const narcisistNumber = require('../common/narcisist');
const routes = express.Router();

routes.get("/v1/ping", function(req, res) {
    pong = true;
    res.send(pong)
});

routes.get("/v1/:number", function(req, res) {
    if(isNaN(req.params.number)) {
        res.send("We expecting a number here");
        return;
    }
    result = narcisistNumber(req.params.number);
    res.send({result});
});

module.exports = routes;