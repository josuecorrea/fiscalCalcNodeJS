var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config/config');
var routes = require('./routes/routes');
var morgan = require('morgan');

var app = express();

mongoose.connect(config.connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(morgan('tiny'));

app.use('/api', routes);

module.exports = app;
