const _ = require('lodash');
const widgetData = require('../../data/widgets.json');

module.exports = {
    getWidgets(req, res) {
        for (let widget of widgetData) {
            widget.data.value = _.random(15, 25)
            widget.isActive = !!_.random()
        }
        res.send(widgetData)
    }
};