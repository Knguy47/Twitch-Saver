
var express = require('express');
var db = require('./database/data');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('receiving')
})

app.listen(3030, function(){
  console.log('Listing on http://127.0.0.1:3030/')
})

