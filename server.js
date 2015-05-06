var express = require('express'),
  routes = require('./routes')
  path = require('path');

var app = express();
app.set('port',process.env.Port || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);

app.listen(app.get('port'),function(){
  console.log('express started on http://localhost:' + app.get('port'));
});