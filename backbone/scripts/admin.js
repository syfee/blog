// var Nav = require('../views/nav.js');
// var Content = require('../views/content.js');

// var nav = new Nav();
// var content = new Content();

var Backbone = require('backbone');
var Router = Backbone.Router.extend({
  routes:{
    '': 'main',
    'newpost': 'newPost',
    
  },
  main: function(){
    var MainPage = require('../views/admin/mainPage');
    var mainPage = new MainPage();
  },
  newPost: function(){
    require.ensure([],function(){
      var Compose = require('../views/admin/compose.js');
      var compose = new Compose();
      console.log(compose);
      compose.render();
    });
  }
});

$(function(){
  var router = new Router();  
  Backbone.history.start({
    pushState: false
  });
});
