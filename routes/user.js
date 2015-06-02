exports.verify = function(req, res, next){
  req.models.User.findOne(req.body,function(err,doc){
    if(err) return new Error(err);
    if(doc){
      res.status(200);
      res.type('json');
      res.send({
        errcode: 0
      });
    }
  }) 
}