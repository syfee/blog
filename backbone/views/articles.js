// var Colleciton = require('../collections/articles.js');
var Article =  require('./article.js');
var self;
var Articles = Backbone.View.extend({
  tagName: 'ul',
  className: 'articles',
  events: {

  },
  initialize: function(){
    self = this;
    this.loadArticles();
  },
  loadArticles: function(){
    // this.articles = ;
    $.ajax({
      url: 'http://localhost:3000/article',
      type: 'GET',
      dataType: 'json'
    })
    .done(function(data) {
      self.render(data);
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
    });
  },
  render: function(articles){
    articles.forEach(this.addOne,this);
  },
  addOne: function(articalModel){
    var view = new Article();
    this.$el.append(view.render(articalModel).el);
  }
});

module.exports = Articles;