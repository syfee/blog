
exports.list = function(req, res, next){
  req.models.Article.find(req.query,function(err,articles){
    console.log(articles);
    res.type('json');
    res.status('200');
    res.send(articles);
  });  
};

exports.create = function(req, res, next){
  new req.models.Article({
    title: req.body.title,
    content: req.body.content,
    date: new Date().toLocaleString()
  }).save(function(err){
    if(err) new Error(err);
    res.status(200);
    res.type('json');
    res.send({
      errcode: 0
    });
  });
};