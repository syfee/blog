webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {// var Nav = require('../views/nav.js');
	// var Content = require('../views/content.js');

	// var nav = new Nav();
	// var content = new Content();

	var Backbone = __webpack_require__(2);
	var Router = Backbone.Router.extend({
	  routes:{
	    '': 'main',
	    'newpost': 'newPost',
	    
	  },
	  main: function(){
	    var MainPage = __webpack_require__(4);
	    var mainPage = new MainPage();
	  },
	  newPost: function(){
	    __webpack_require__.e/* nsure */(1/* duplicate */, function(){
	      var Compose = __webpack_require__(7);
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Backbone = __webpack_require__(2);
	var template = __webpack_require__(5);
	var Interface = __webpack_require__(6);
	var _ = __webpack_require__(3);
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
	    __webpack_require__.e/* require */(1, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = []; (function(){
	      var Compose = __webpack_require__(7);
	      var compose = new Compose();
	      console.log(compose);
	      compose.render(self.articles[index]);
	    }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	  }
	});

	module.exports = MainPage;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<table id=\"articles\" class=\"table table-striped table-bordered table-hover\">\r\n\t<thead>\r\n\t\t<tr>\r\n\t\t\t<th>title</th>\r\n\t\t\t<th>published</th>\r\n\t\t\t<th>edit</th>\r\n\t\t\t<th>delete</th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody>\r\n\t\t<% for(var i = 0, l=articles.length; i < l; i++ ){ %>\r\n\t\t<tr>\r\n\t\t\t<td><%= articles[i].title %></td>\r\n\t\t\t<td><%= articles[i].published %></td>\r\n\t\t\t<td>\r\n\t\t\t\t<button class='btn edit' data-index=\"<%= i %>\">edit</button>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<button class=\"btn delete btn-warn\" data-index=\"<%= i %>\">delete</button>\r\n\t\t\t</td>\r\n\t\t\t\r\n\t\t</tr>\r\n\t\t<% } %>\r\n\t</tbody>\r\n</table>";

/***/ }
]);