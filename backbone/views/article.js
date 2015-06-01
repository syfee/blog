var Backbone = require('backbone');
var _ = require('underscore');
var template = require('../templates/article.html');

var Article = Backbone.View.extend({
  tagName: 'li',
  className: 'article',
  template: _.template(template),
  events: {

  },
  initialize: function(){

  },
  render: function(article){
    console.log(article);
    this.$el.html(this.template(article));
    return this;
  }
});
module.exports = Article;