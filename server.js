var express = require('express'),
  mongoose = require('mongoose'),
  path = require('path'),
  routes = require('./routes'),
  models = require('./models'),
  credentials = require('./credentials.js');

var mongoConnection = credentials.mongolab.blog;
mongoose.connect(mongoConnection, {
  server: {
    socketOptions: {
      keepAlive: 1
    }
  }
});

var app = express();
app.set('port',process.env.Port || 3000);
app.set('views', path.join(__dirname, 'views'));

app.use(function(req,res,next){
  if(!models.Article) return next(new Error("no models"));
  req.models = models;
  return next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('body-parser')());

app.get('/', routes.index);
app.get('/login', routes.login);
app.get('/admin', routes.admin);

app.post('/login', routes.user.verify);
app.get('/article', routes.article.list);
app.post('/article', routes.article.create);

app.listen(app.get('port'),function(){
  console.log('express started on http://localhost:' + app.get('port'));
});
