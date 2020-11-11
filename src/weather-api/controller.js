
const weather = require('./weather');

const WeatherController = {
    getWeather: function(req, res) {
        weather.get(req, res, function(err, dist) {
            if (err)
                res.send(err);
            res.json(dist);
        });
    }
};

module.exports = WeatherController;