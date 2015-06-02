var Backbone = require('backbone');
var style = require('../../styles/admin/compose.scss');
var template = require('../../templates/admin/compose.html');
var Compose = Backbone.View.extend({
  el: '#main',
  events:{
    'click #submit ': 'submit'
  },
  initialize: function(){

  },
  render: function(){
    this.$el.html(template);
  },
  submit: function(){
    var $title = $('#title');
    var $content = $('#content');
    var title = $title.val().trim();
    var content = $content.val().trim();
    console.log(title,content);
    if(title && content){
      $.ajax({
        url: 'http://localhost:3000/article',
        method: 'POST',
        data: {
          title: title,
          content: content
        }
      })
      .done(function(ret){
        console.log('success');
      })
      .fail(function(ret){
        console.log('fail');
      });
    }
  }
});

module.exports = Compose;