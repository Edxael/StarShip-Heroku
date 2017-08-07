var express = require('express');
var app = express();
var morgan = require('morgan');
var ejs = require('ejs');


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/views'));
app.use(morgan('dev'));


app.get('/', function(req, res){
  res.render('pages/00-index.ejs');
});

app.get('/ah', function(req, res){
  res.render('pages/01-ayu.ejs');
});

app.get('/mc', function(req, res){
  res.render('pages/02-madc.ejs');
});

app.get('/bp', function(req, res){
  res.render('pages/03-bpink.ejs');
});

app.get('/ty', function(req, res){
  res.render('pages/04-taeyang.ejs');
});




app.listen(3000, function(err){
  if(err){ throw err; }
  console.log("Server Up & Running ......");
});
