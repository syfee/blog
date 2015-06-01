var Backbone = require('backbone');
var template = require('../templates/nav.html');
var style = require('../styles/nav.scss');

var Nav = Backbone.View.extend({
  el: '#nav',
  events: {

  },
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html(template);
  }
});
module.exports = Nav;