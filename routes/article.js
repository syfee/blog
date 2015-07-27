
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

exports.delete = function(req, res, next){
  console.log(req.body);
  req.models.Article.findOne(req.body,function(err,doc){
    if(doc){
      doc.remove();
      res.status(200);
      res.type('json');
      res.send({
        errcode: 0
      });
    } 
  });
};

exports.update = function(req, res, next){
  console.log(req.body);
  req.models.Article.findOne({_id: req.body._id},function(err,doc){
    if(doc){
      for(var o in req.body){
        doc[o] = req.body[o];
      }
      // doc.date = new Date().toLocaleString();
      doc.save();
      res.status(200);
      res.type('json');
      res.send({
        errcode: 0
      });
    }
  });
};