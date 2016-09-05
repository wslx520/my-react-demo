var webpack = require('webpack');

module.exports = {
  // entry: './js/entry.js',
  entry: {
    vendors: [
        'react',
        'react-dom'
    ],
    index: [
        './js/index.js' // Your appʼs entry point
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