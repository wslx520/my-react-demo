var webpack = require('webpack');
var path = require('path');
var src = 'source';
var HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(path.resolve(src, 'index.js'), './source/index.js');
module.exports = {
  // entry: './js/entry.js',
  entry: {
    vendors: [
        'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server',
        'react',
        'react-dom'
    ],
    index: [
        path.resolve(src, 'index.js') // Your appʼs entry point
    ]
  },
  output: {
    path: __dirname + '/js/',
    filename: '[name].js',
    publicPath: '/js/'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel?' + JSON.stringify({
        presets: ['es2015', 'react', 'stage-0']
      })], exclude: /node_modules/ }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My React App',
      filename: 'js/index.html',
      template: './index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
        // 要与entry中的名字匹配
      names: ['vendors', 'mainifest']
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin()
  ]
};