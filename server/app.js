const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
const HOST = 'localhost';

require('./models/user')(mongoose);
require('./models/device')(mongoose);

require('./config/express')(app, passport);
require('./config/mongoose')(mongoose);
require('./config/passport')(passport);
require('./config/routes')(app, passport);

app.use(express.static(path.join(__dirname, '/../public/production')));

const server = app.listen(PORT, HOST, () => { console.log(`Server started on ${server.address().address}:${server.address().port}`) });

module.exports = server;