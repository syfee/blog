###Building a blog with nodejs;
####Front end: Backbone + Bootstrap + Webpack;
####Backend: Nodejs + Express + MongoDB;

#####Build
```
cd app && gulp build
```

all front end source code are located in `app` directory, `gulp build` will bundle the js files into `public` directory with `webpack`;

####start the server
```
nodemon server.js
```