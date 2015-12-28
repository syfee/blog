var Backbone = require('backbone');
var _ = require('underscore');
var style = require('../../styles/admin/compose.scss');
var template = require('../../templates/admin/compose.html');
var Interface = require('../../scripts/interface.js');
var self;
var Compose = Backbone.View.extend({
  el: '#main',
  events: {
    'click #saveBtn ': 'save'
  },
  template: _.template(template),
  initialize: function() {
    self = this;
  },

  render: function(article) {
    if (!article) {
      article = {
        title: '',
        content: '',
        tags: [],
        published: false
      };
      self.method = 'post';
    } else {
      self.method = 'put';
    }

    self.article = article;
    
    this.$el.html(self.template(article));
  },

  validate: function() {

  },

  save: function() {
    var $title = $('#title');
    var $content = $('#content');
    var $publishBtn = $('#publishBtn');
    var $tags = $('#tags');
    var title = $title.val().trim();
    var content = $content.val().trim();
    var published = $publishBtn[0].checked;
    var tags = $tags.val().trim().split(',');

    if (title && content) {
      self.article.title = title;
      self.article.content = content;
      self.article.published = published;
      self.article.tags = tags;
      if (self.method == 'post') {
        Interface.createArticle(self.article).
        done(function(ret) {
          if (ret.errcode === 0) {
            console.log('create article success');
          }
        });
      } else if (self.method == 'put') {
        console.log(self.article);
        Interface.updateArticle(self.article).
        done(function(ret) {
          if (ret.errcode === 0) {
            console.log('update article success');
          }
        });
      }
    }
  }
});

module.exports = Compose;
