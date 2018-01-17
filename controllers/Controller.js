var data = [];
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

    app.get('/habits', function(req, res) {
      var fs = require('fs');
      var obj;
      fs.readFile('./public/memory.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
      });
      res.json(obj);
    })

    app.get('/habitss', function(req, res) {
      var fs = require('fs');
      var obj;
      fs.readFile('./public/memory.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
      });
      res.json(obj);
    })

    app.get('/habis', function(req, res) {
      var fs = require('fs');
      var obj;
      fs.readFile('./public/memory.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
      });
      res.json(obj);
    })



    app.get('/goodbye', function(req, res){
      res.send("Goodbye you!");
    });

    app.get('/habit', function(req, res){
      res.render('habit');
    });

    app.get('/edithabit', function(req, res){

    })

    app.get('/add-goodhabit',urlencodedParser, function(req, res){
      data.push(req.body);
      res.json(data);
    });

    app.get('/add-badhabit',urlencodedParser, function(err,content){
      	if(err) throw err;
        var parseJson = JSON.parse(content);
        for (i=0; i <11 ; i++){
          parseJson.tabl  e.push({id:i, square:i*i})
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
