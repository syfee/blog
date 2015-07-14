var Backbone = require('backbone');
var template = require('../templates/sidebar.html');
var style = require('../styles/sidebar.scss');
var self,
  $shade = $('#shade');
var Sidebar = Backbone.View.extend({
  el: '#sidebar',
  events: {
    // 'click #sidebar': "hide"
  },
  initialize: function(){
  	self = this;
    this.render();
    this.$el.on("show",function(){
      self.show();
    });
    this.$el.on("click",function(){
    	self.hide();
    });
  },
  render: function(){
    this.$el.html(template);
  },
  show: function(){
    $shade.fadeIn();
  	this.$el.addClass("slideIn");
    // function(){
      // $(this).addClass("slideIn");
    // }
    // );
  },
  hide: function(){
    $shade.fadeOut();
  	this.$el.removeClass("slideIn");
  }
});
module.exports = Sidebar;