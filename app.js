var express = require('express');
var routes = require('./controllers/routes');
var controller = require('./controllers/controller');
var port = 4211;
var app = express();
app.set('view engine', 'ejs');


app.use(express.static('public'));﻿

routes(app);
controller(app);


app.listen(port);
console.log('Listening on port ' +  port);
