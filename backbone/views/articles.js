// var Colleciton = require('../collections/articles.js');
var Article =  require('./article.js');

var Articles = Backbone.View.extend({
  tagName: 'ul',
  className: 'articles',
  events: {

  },
  initialize: function(){
    this.articles = [{title: '1',content:'1',date: 1},{title: '1',content:'1',date: 1}];
    this.render();
  },
  render: function(){
    this.articles.forEach(this.addOne,this);
  },
  addOne: function(articalModel){
    var view = new Article();
    this.$el.append(view.render(articalModel).el);
  }
});


module.exports = Articles;