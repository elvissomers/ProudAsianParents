module.exports = function(app){


    app.get('/habit', function(req, res){
        res.render('habit');
    })

    app.get('/habir', function(req, res){
        res.render('habit');
    })

    app.get('/habig', function(req, res){
        res.render('habit');
    })


};