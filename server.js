var express = require('express');
var db = require('./database/data');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var FavStreams = require('./database/Model/favStreams.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));
// respond with "hello world" when a GET request is made to the homepage
app.get('/favstreams', function (req, res) {
  FavStreams.find(function(err, streams) {
    if(err) {
      res.status(400).send('Could not GET entry');
    } else {
      res.status(200).send(streams);
    }
  });
});

app.post('/favstreams', function (req, res) {
  var streamTitle = req.body.title;
  var streamUrl = req.body.url;
  console.log(req.body.title);

  new FavStreams ({title: streamTitle, url: streamUrl})
    .save(function(err){
      if(err){
        res.status(400).send('stream not saved');
      } else {
        res.status(201).send('stream saved to database');
      }
    });
});

app.listen(3030, function(){
  console.log('Listing on http://127.0.0.1:3030/')
});

