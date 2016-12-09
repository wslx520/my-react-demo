var webpack = require('webpack');
var path = require('path');
var src = 'source';
var dist = '/dist';
var HtmlWebpackPlugin = require('html-webpack-plugin');
// console.log(path.resolve(src, 'index.js'), './source/index.js');
module.exports = {
  // entry: './js/entry.js',
  entry: {
    // 名字可以含路径，以用来将打包后的文件放入不同的路径
    'js/vendors': [
        // 'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
        // 'webpack/hot/only-dev-server',
        'react',
        'react-dom',
        './source/lib/jquery-1.12.3.min'
    ],
    'js/index': [
        path.resolve(src, 'index.js') // Your appʼs entry point
    ],
  },
  output: {
    path: __dirname + dist,
    filename: '[name].js',
    publicPath: ''
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
      filename: 'index.html',
      template: src + '/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
        // 要与entry中的名字匹配
      names: ['js/vendors', 'js/mainifest']
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin()
  ]
};