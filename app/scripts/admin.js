var Backbone = require('backbone');
var Router = Backbone.Router.extend({
  routes:{
    '': 'main',
    compose: 'compose'
  },
  main: function() {
    var MainPage = require('../views/admin/mainPage');
    var mainPage = new MainPage();
  },

  compose: function() {
    require.ensure([], function() {
      var Compose = require('../views/admin/compose.js');
      var compose = new Compose();
      console.log(compose);
      compose.render();
    });
  }
});

$(function() {
  var router = new Router();
  Backbone.history.start({
    pushState: false
  });
});
