var Backbone = require('backbone');
var template = require('../templates/nav.html');
var style = require('../styles/nav.scss');
var $sidebar = $('#sidebar');
var Nav = Backbone.View.extend({
  el: '#nav',
  events: {
    'click button': 'toggleSidebar'
  },
  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(template);
  },

  toggleSidebar: function() {
    $sidebar.trigger('toggle');
  }
});
module.exports = Nav;
