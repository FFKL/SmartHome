const _ = require('lodash');
const sensorData = require('../../data/sensor.json');

module.exports = {
    getWidgets(req, res) {
        res.send(sensorData)
    }
};