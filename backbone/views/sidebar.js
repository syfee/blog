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
    this.$el.on("toggle",function(){
      self.toggle();
    });
  },
  render: function(){
    this.$el.html(template);
  },
  toggle: function(){
    if(self.showing){
      self.hide();
    }
    else{
      self.show();
    }
  },
  show: function(){
    $shade.fadeIn().on("click",self.hide);
  	this.$el.addClass("slideIn");
    self.showing = true;
    
  },
  hide: function(){
    $shade.fadeIn().off("click");
    $shade.fadeOut();
  	self.$el.removeClass("slideIn");
    self.showing = false;

  }
});
module.exports = Sidebar;