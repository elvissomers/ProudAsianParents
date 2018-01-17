var express = require('express');
var controller = require('./controllers/controller');
var port = 4211;
var app = express();
app.set('view engine', 'ejs');

app.use(express.static('public'));﻿

controller(app);


app.listen(port);
console.log('Listening on port' +  port);
