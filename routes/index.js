var fs = require('fs');

exports.article = require('./article.js');
exports.user = require('./user.js');
exports.login = require('./login.js');
exports.admin = require('./admin.js');
exports.category = require('./category.js');

exports.index = function(req, res, next) {
  fs.readFile('index.html', function(err, data) {
    console.log(data);
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
};
