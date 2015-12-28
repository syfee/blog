var fs = require('fs');

module.exports = function(req, res, next) {
  fs.readFile('admin.html', function(err, data) {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('500 - internal error');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
};
