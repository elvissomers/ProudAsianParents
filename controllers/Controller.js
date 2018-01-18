
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    var url = require("url");
    var x = ('../public/memory.json');
    var badhabits = [];
    var goodhabits = [];

    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'toor',
        database : 'habit'
    });



    app.get('/habits', function(req, res) {
      var fs = require('fs');
      var obj;
      fs.readFile('./public/memory.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
      });
      res.json(obj);
    })

    app.get('/habitss', function(req, res){
        res.render('habit');
    });

    app.get('/habis', function(req, res){
        res.render('habit');
    });





    app.get('/goodbye', function(req, res){
      res.send("Goodbye you!");
    });

    app.get('/habit', function(req, res){
      res.render('habit');
    });

    app.get('/edithabit', function(req, res){

    })

    app.get("/todos", function (req, res) {
        console.log("todos requested!");
        res.json(badhabits);
    });



    app.get('/add-goodhabit', function (req, res) {
        var url_parts = url.parse(req.url, true);
        var query = url_parts.query;

        if(query["Title="]!==undefined) {
            var tx = { message : query["Title="]};
            goodhabits.push(tx);
            console.log("Added " + tx.message);
            res.end("Habit added successfully");
        }
        else {
            res.end("Error: missing message parameter");
        }
    });



    app.get('/add-badhabit',urlencodedParser, function(err,content){
      	if(err) throw err;
        var parseJson = JSON.parse(content);
        for (i=0; i <11 ; i++){
          parseJson.table.push({id:i, square:i*i})
        }
        fs.writeFile('./public/memory.json',JSON.stringify(parseJson),function(err){
          if(err) throw err;
        })
    });

    app.delete('/habit/:item', function(req, res){
      data = data.filter(function(habit){
        return habit.item.replace(/ /g, '-') !== req.params.item;
      });
      res.json(data);
    });

};
