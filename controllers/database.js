var mysql = require('mysql');
var config = require('./config.js');


var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'toor',
    database : 'habit'
});

connection.connect(function(err){
    if(err){
        console.log('<<<Error connecting to Db>>>');
        return;
    }
    console.log('>>>>Connection established');
});