var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var favStreamsSchema = mongoose.Schema({
  stream: Object,
});

favStreamsSchema.plugin(autoIncrement.plugin, 'FavStreams');

var FavStreams = mongoose.model('FavStreams', favStreamsSchema);

module.exports = FavStreams;
