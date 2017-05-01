var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

autoIncrement.initialize(mongoose.connect('mongodb://localhost/twitchfavs'));


var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to MongoDB');
});

module.exports = db;