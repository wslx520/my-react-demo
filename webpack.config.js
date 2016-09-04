'use strict';
var path = require('path');
var webpack = require('webpack');

var src = './source';
var dist = './js';
var staticDir = './static';

var commonPath = {
	dist,
	indexHtml: path.join(src, 'index.html'),
	staticDir
};
module.exports = {
	entry: {
		app: path.join(__dirname, src, 'app.js'),
		vendor: [
	      'history',
	      // 'lodash',
	      'react',
	      'react-dom',
	      'react-redux',
	      'react-router',
	      'react-router-redux',
	      'redux',
	      'redux-thunk'
	      // 'superagent'
	    ]
	},
	output: {
		filename:'[name].js',
		// path: 打包文件存放的绝对路径
		path: commonPath.dist,
		// publicPath: 网站运行时的访问路径
		// publicPath: commonPath.dist
		publicPath: 'http://localhost:8080/'
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.json']
	},
	module: {
		// 载入器们，数组
		loaders: [{
			// 针对什么后缀名使用本载入器
			test: /\.(js|jsx)$/,
			// 指定载入器
			// 可以用loader指定单个载入器，也可以用loaders传数组，指定多个
			// 问号后面是传给此载入器的参数
			// 单loader时，不想用问号传参，可以写个query字段，将参数写到里面
			loaders: ['babel?' + JSON.stringify({
		        // 指定babel用什么规则转码
		        presets: ['es2015', 'react', 'stage-0']
			})]

		}, {
	      test: /\.json$/,
	      loader: 'json'
	    }]
	},
	// 指定eslint所用的格式化工具
	eslint: {
		formatter: require('eslint-friendly-formatter')
	},
	// 添加插件
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
	      names: ['vendor', 'mainifest']
	    }),
	    new webpack.NoErrorsPlugin(),
	    new webpack.HotModuleReplacementPlugin(),
	    // new webpack.DefinePlugin({
	    //   'process.env': { // 这是给 React / Redux 打包用的
	    //     NODE_ENV: JSON.stringify('production')
	    //   },
	    //   // ================================
	    //   // 配置开发全局常量
	    //   // ================================
	    //   __DEV__: process.env.NODE_ENV.trim() === 'development',
	    //   __PROD__: process.env.NODE_ENV.trim() === 'production',
	    //   __COMPONENT_DEVTOOLS__: false, // 是否使用组件形式的 Redux DevTools
	    //   __WHY_DID_YOU_UPDATE__: false // 是否检测不必要的组件重渲染
	    // })
	]
}