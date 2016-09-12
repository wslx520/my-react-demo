var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
// console.log(__dirname + '/dist/');
new WebpackDevServer(webpack(config), {
  publicPath: '/',
  // publicPath: path.resolve(__dirname, 'dist'),
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
