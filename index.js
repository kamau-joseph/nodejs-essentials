var express = require('express');
var app = express();
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/about', function(req, res){
  res.render('about');
});

app.get('/contact', function(req, res){
  res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function(req, res){
  console.log(req.body);
  res.render('success', {data: req.body});
});


app.get('/what-we-do', function(req, res){
  res.render('what-we-do');
});

app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

app.listen(2000, function () {
    console.log('This app listening on port 2000');
});
