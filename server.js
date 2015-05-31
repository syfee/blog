// var express = require('express'),
//   routes = require('./routes')
//   path = require('path');

// var app = express();
// app.set('port',process.env.Port || 3000);
// app.set('views', path.join(__dirname, 'views'));

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', routes.index);

// app.listen(app.get('port'),function(){
//   console.log('express started on http://localhost:' + app.get('port'));
// });

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.hot.config.js');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  headers: { 'Access-Control-Allow-Origin': '*' }
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
