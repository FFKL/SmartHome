const userController = require('../controllers/userController');
const widgetController = require('../controllers/widgetController');
const logsController = require('../controllers/logsController');
const sensorController = require('../controllers/sensorController');
const deviceController = require('../controllers/deviceController');
const bearerMiddleware = require('./middlewares/bearer');

module.exports = (app, passport) => {

    app.post('/login', passport.authenticate('local'), userController.login);
    app.post('/logout', userController.logout);
    app.post('/reg', userController.register);

    app.all('/api/*', bearerMiddleware);
    app.get('/api/test/devices', deviceController.get);
    app.post('/api/test/devices', deviceController.create);
    app.delete('/api/test/devices/:id', deviceController.delete);

    app.post('/public/api/devices/:id', deviceController.update);

    app.get('/api/widgets', widgetController.getWidgets);
    app.get('/api/sensors', sensorController.getSensors);
    app.get('/api/logs', logsController.getLogs);
    app.get('/api/options/scheme', function (req, res) {
        res.send([
            { sizeX: 1, sizeY: 1, row: 0, col: 0 , id: 0},
            { sizeX: 1, sizeY: 1, row: 0, col: 1 , id: 1},
            { sizeX: 1, sizeY: 1, row: 0, col: 2 , id: 2},
            { sizeX: 1, sizeY: 1, row: 0, col: 3 , id: 3},
            { sizeX: 1, sizeY: 1, row: 0, col: 4 , id: 4},
            { sizeX: 1, sizeY: 1, row: 0, col: 5 , id: 5},
        ])
    })
};