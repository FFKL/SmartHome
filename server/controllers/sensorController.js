const _ = require('lodash');
const sensorData = require('../../data/sensor.json');

module.exports = {
    getSensors(req, res) {
        res.send(sensorData)
    }
};