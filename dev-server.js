'use strict';
var webpack = require('webpack');
var config = require('./webpack.config');
var WebpackDevServer = require('webpack-dev-server');

// 加入自动刷新设置
config.entry.vendor.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
  	historyApiFallback: true,
  	publicPath: config.output.publicPath,
	hot: true
});
server.listen(8080);