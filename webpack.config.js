// var webpack = require('webpack');
// var path = require('path');


// var dir = './src/public';
// module.exports = {
//   entry: ['webpack/hot/dev-server',dir + "/scripts/main.js"],
//   output: {
//     path: dir + "/scripts/",
//     publicPath: "/assets/",
//     filename: "bundle.js"
//   },
//   debug: true,
//   module: {
//     loaders: [
//       { test: /\.js$/, loader: 'jsx-loader?harmony', exclude: /node_modules/ },
//       { test: /\.scss$/, loacer: 'style!css!sass'}
//     ]
//   }
// }


// var app = './app/public';
// var build = './public';

// module.exports = {
//   entry: ['webpack/hot/dev-server', app + "/scripts/main.js"],
//   output: {
//     path: build + "/scripts/",
//     publicPath: "/assets/",
//     filename: "bundle.js"
//   },
//   debug: true,
//   devtool: "eval",
//   module: {
//     loaders: [{
//       test: /\.js$/,
//       loader: 'jsx-loader?harmony',
//       exclude: /node_modules/
//     }, {
//       test: /\.scss$/,
//       loacer: 'style!css!sass'
//     }]
//   }
// }

var path = require('path');
var webpack = require('webpack');

var app = './app';
var build = './build';

// removes a lot of debugging code in React
var myPlugin = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify('production')
  }
});

module.exports = {
  entry: [
    app+'/scripts/main'
  ],
  output: {
    path: path.join(__dirname, build),
    filename: 'bundle.js',
    publicPath: '/scripts/'
  },
  plugins: [
    // removes a lot of debugging code in React
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // keeps hashes consistent between compilations
    new webpack.optimize.OccurenceOrderPlugin(),
    // minifies your code
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['jsx?harmony'],
      include: path.resolve(app+'/scripts')
    }]
  }
};