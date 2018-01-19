module.exports = function(app){
    var url = require("url");

    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'toor',
        database : 'habit'
    });
    

    app.get('/add-habit', function (req, res) {
        var query = url.parse(req.url, true).query;

        connection.query('SELECT id FROM habit ORDER BY id DESC LIMIT 1', function(err, rows, fields){
            if(!err) {
                var newId;
                if(rows.length) {
                    newId = rows[0].id + 1;
                } else {
                    newId = 0;
                }
                connection.query('INSERT INTO habit (id, title, description, creationDate, good) VALUES ' +
                    '(' + newId + ',"' + query["title"] + '","empty", (SELECT NOW()),' + query["good"] +')', function(err, rows, fields) {
                    if(!err) {
                        res.json(newId);
                    } else {
                        console.log(err);
                    }
                });
            } else {
                console.log(err);
            }
        });
    });

    app.get('/delete-habit', function(req, res){
        var query = url.parse(req.url, true).query;

        connection.query('DELETE FROM habit_done WHERE habit_id=' + query["id"], function(err, rows, fields) {
            if(err)
                console.log(err);
        });

        connection.query('DELETE FROM habit WHERE id=' + query["id"], function(err, rows, fields) {
            if(err)
                console.log(err);
        });
    });

    app.get('/finish', function(req, res) {
        var query = url.parse(req.url, true).query;

        connection.query('SELECT COUNT(habit_id) AS count FROM habit_done WHERE habit_id = ' + query["id"], function(err, rows, fields) {
            if(rows[0].count === 0) {
                connection.query('INSERT INTO habit_done (habit_id, timestamp) VALUES (' + query["id"] + ', (SELECT NOW()))', function(err, rows, fields) {
                    if(!err) {
                        res.send(rows);
                    } else {
                        console.log(err);
                    }
                });
            } else {
                connection.query('DELETE FROM habit_done WHERE habit_id = ' + query["id"], function(err, rows, fields) {
                    if(err) {
                        console.log(err);
                    }
                })
            }
        });

    });

    app.get('/get-habits', function(req, res) {
        connection.query('SELECT DISTINCT id, title, description, creationDate, good, timestamp AS completed ' +
                         'FROM habit LEFT JOIN habit_done on habit.id=habit_done.habit_id ' +
                         'ORDER BY habit.id',
            function(err, rows, fields) {
                if(!err) {
                    res.send(rows);
                } else {
                    console.log(err);
                }
            });
    });

    app.get('/edit-title', function(req, res) {
        var query = url.parse(req.url, true).query;

        connection.query('UPDATE habit SET title="' + query["title"] + '" WHERE id =' + query["id"], function(err, rows, fields) {
            if(err) {
                console.log(err);
            }
        })
    })
};
