var express = require('express');
var request = require('request');
var db = require('./database/data');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var FavStreams = require('./database/Model/favStreams.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS, DELETE, POST, GET");
  next();
});

app.get('/login', function(req, res){
  res.redirect("https://api.twitch.tv/kraken/oauth2/authorize?response_type=code&client_id=9r4gqveimjjp6yo5rwbxf7i6hby75l&redirect_uri=http://localhost:3030/&scope=chat_login&state=encodedededed")
})

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
  var addStream = req.body;
  new FavStreams ({stream: addStream})
    .save(function(err){
      if(err){
        res.status(400).send('stream not saved');
      } else {
        res.status(201).send('stream saved to database');
      }
    });
});

app.delete('/favstreams', function (req, res) {
  var deleteStream = req.body._id;
    FavStreams.remove({_id: deleteStream}, function(err) {
      if(err) {
        res.status(400).send('You messed up');
      } else {
        res.status(200).send('Stream Deleted');
      }
    });
});

app.listen(3030, function(){
  console.log('Listing on http://127.0.0.1:3030/')
});

