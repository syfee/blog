var fs = require('fs');
exports.index = function(req, res, next){
  console.log(__dirname);
  fs.readFile('index.html',function(err,data){
    console.log(data);
    if(err){
      res.writeHead(500, {'Content-Type': 'text/plain'});
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  })
}