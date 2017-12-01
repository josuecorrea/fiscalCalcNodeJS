var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config/config');
var routes = require('./routes/routes');
var morgan = require('morgan');
//const fileUpload = require('express-fileupload');

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express();
//app.use(fileUpload);


mongoose.connect(config.connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(morgan('tiny'));

app.use('/api', routes);

module.exports = app;
