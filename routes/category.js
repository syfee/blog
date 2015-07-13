
exports.list = function(req, res, next){
  console.log(req.query);
  req.models.Category.find(req.query,function(err,docs){
    if(err) return new Error(err);
    console.log(docs);
  });
};

exports.create = function(req, res, next){
  new req.models.Category(req.body).save(function(err){
    if(err) new Error(err);
    res.type('json');
    res.status(200);
    res.send({
      errcode: 0
    });
  });
};