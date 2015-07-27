var Backbone = require('backbone');
var template = require('../../templates/admin/mainPage.html');
var Interface = require('../../scripts/interface.js');
var _ = require('underscore');
var self;
var MainPage = Backbone.View.extend({
  el: '#main',
  events: {
    'click .delete': 'delete',
    'click .edit': 'edit',
  },  
  template: _.template(template),
  initialize: function(){
    self = this;
    Interface.loadArticles()
    .done(function(data) {
      console.log(data);
      self.articles = data;
      self.render(data);
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
    });
  },
  render: function(articles){
    console.log(articles);
    this.$el.html(this.template({articles: articles}));
  },
  delete: function(e){
    var index = e.target.attributes["data-index"].value;
    console.log(self.articles[index]);
    Interface.deleteArticle(self.articles[index]._id)
    .done(function(ret){
      if(ret.errcode === 0){
        self.articles.splice(index,1);
        console.log(self.articles);
        self.render(self.articles);
      }
    });
  },
  edit: function(e){
    var index = e.target.attributes["data-index"].value;
    require([],function(){
      var Compose = require('./compose.js');
      var compose = new Compose();
      console.log(compose);
      compose.render(self.articles[index]);
    });
  }
});

module.exports = MainPage;