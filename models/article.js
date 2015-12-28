var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
  title: String,
  content: String,
  date: String,
  category: String,
  tags: [String],
  published: Boolean
});

var article = mongoose.model('article', articleSchema);
module.exports = article;
