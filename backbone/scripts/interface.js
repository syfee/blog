var $ = require('jquery');
var host = "http://localhost:3000/";
var interface = {
  loadArticles: function(){
    // this.articles = ;
    
    return $.ajax({
      url: host+'article',
      type: 'GET',
    });
  },
  deleteArticle: function(id){
    return $.ajax({
      url: host+'article',
      type: 'DELETE',
      dataType: 'json',
      data: {
        _id: id
      }
    });
  },
  createArticle: function(article){
    return $.ajax({
      url: host+'article',
      type: 'POST',
      dataType: 'json',
      data: article
    });
  },
  updateArticle: function(article){
    return $.ajax({
      url: host+'article',
      type: 'PUT',
      dataType: 'json',
      data: article
    });
  }
};

module.exports = interface;