var $ = require('jquery');
var host = location.href.indexOf('localhost') > -1 ? 'http://localhost:3000/' : 'http://115.28.7.11:3000/';
var interface = {
  loadArticles: function(data) {
    return $.ajax({
      url: host + 'article',
      type: 'GET',
      data: data
    });
  },

  deleteArticle: function(id) {
    return $.ajax({
      url: host + 'article',
      type: 'DELETE',
      dataType: 'json',
      data: {
        _id: id
      }
    });
  },

  createArticle: function(article) {
    return $.ajax({
      url: host + 'article',
      type: 'POST',
      dataType: 'json',
      data: article
    });
  },

  updateArticle: function(article) {
    return $.ajax({
      url: host + 'article',
      type: 'PUT',
      dataType: 'json',
      data: article
    });
  }
};

module.exports = interface;
