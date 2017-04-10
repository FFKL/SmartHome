const _ = require('lodash');
const logsData = require('../../data/logs.json');

module.exports = {
    getLogs(req, res) {
        for (let log of logsData) {
            let arr = [];
            let start = 1490000000000;

            for (let i = 0; i < 100; i++) {
                arr.push([start + 3600*i, _.random(15, 22)])
            }
            log.data = arr;
        }
        res.send(logsData)
    }
};