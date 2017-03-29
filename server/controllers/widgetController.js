const _ = require('lodash');
const widgetData = require('../../data/widgets.json');

module.exports = {
    getWidgets(req, res) {
        res.send(widgetData)
    }
};