var Backbone = require('backbone');

var Article = Backbone.Model.extend({
  default: {
    title: 'example title',
    content: 'example content',
    createDate: '2010-12-12'
  }
});

module.exports = Article;