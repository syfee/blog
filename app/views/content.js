var Backbone = require('backbone');
var Articles = require('./articles');

var Content = Backbone.View.extend({
  el: '#content',
  initialize: function() {
    var articles = new Articles();
    this.$el.html(articles.el);
  }
});
module.exports = Content;

