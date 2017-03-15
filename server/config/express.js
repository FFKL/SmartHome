const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('cookie-session');

module.exports = (app, passport) => {
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(session({secret: 'SECRET'}));

    app.use(passport.initialize());
    app.use(passport.session());
};