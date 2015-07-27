
var path = require('path');
var webpack = require('webpack');

var src = './';
var build = '../public/scripts';

module.exports = {
  //This is enabled by default in watch mode.
  cache: true,
  entry: {
    index: src+'/scripts/index',
    admin: src+'/scripts/admin'
  },
  output: {
    path: path.join(__dirname, build),
    filename: '[name].bundle.js',
    publicPath: '/scripts/',
    //The filename of non-entry chunks as relative path inside the output.path directory. 
    chunkFilename: "[name].[hash].js"
  },
  module: {
    loaders: [
      // required to write "require('./style.css')"
      { test: /\.scss$/,    loader: "style-loader!css-loader!sass-loader" },
      { test: /\.html$/,    loader: "html-loader" }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      // Automtically detect jQuery and $ as free var in modules
      // and inject the jquery library
      // This is required by many jquery plugins
      jQuery: "jquery",
      $: "jquery"
    })
  ]
};