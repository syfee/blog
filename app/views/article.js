var Backbone = require('backbone');
var _ = require('underscore');
var template = require('../templates/article.html');
var marked = require('marked');
var css = require('../styles/article.scss');
var highlight = require('../scripts/vendor//highlight.js');
var Article = Backbone.View.extend({
  tagName: 'li',
  className: 'article',
  template: _.template(template),
  events: {

  },
  initialize: function() {
    // marked.setOptions({
    //   highlight: function (code) {
    //     var s = '```js\n console.log("hello"); \n```';
    //     console.log(highlight.highlightAuto(s));
    //     return highlight.highlightAuto(code).value;
    //   }
    // });
  },

  render: function(article) {
    article.content = marked(article.content);
    this.$el.html(this.template(article));
    this.$el.find('pre code').each(function(i, block) {
      console.log(block);
      highlight.highlightBlock(block);
    });

    return this;
  }
});
module.exports = Article;
