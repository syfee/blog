var path = require('path');
var webpack = require('webpack');

var app = './app';
var build = './build';

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    app+'/scripts/main'
  ],
  output: {
    path: path.join(__dirname, build),
    filename: 'bundle.js',
    publicPath: '/scripts/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot','jsx?harmony'],
      include: path.resolve(app+'/scripts')
    }]
  }
};