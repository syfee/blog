var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
  title: String,
  content: String,
  date: String
});

var article = mongoose.model('article',articleSchema);
module.exports = article;