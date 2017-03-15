const userController = require('../controllers/userController');
const bearerMiddleware = require('./middlewares/bearer');

module.exports = (app, passport) => {

    /*app.get('/', (req, res) => {
        res.sendFile('auth.html', {root: __dirname + '/../../public/production'})
    });*/

    app.post('/login', passport.authenticate('local'), userController.login);
    app.post('/logout', userController.logout);
    app.post('/reg', userController.register);

    app.all('/api/*', bearerMiddleware);
    app.all('/api/check', function (req, res) {
        res.send({message: 'good'})
    })
};