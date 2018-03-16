 const webpack = require('webpack');
const path = require('path');
const resolve = path.resolve;
const src = resolve(__dirname, '../src');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require("extract-text-webpack-plugin");
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: resolve(__dirname, '../src/app.js'),
		vendor: ['vue', 'vuex', 'vue-router']
	},

	output: {
		path: resolve(__dirname, '../dist'),
		filename: 'js/[name]_[hash].js',
		publicPath: 'http://www.baidu.com'
	},
	
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				include: src
			},
			{
				test: /\.vue$/,
				use: 'vue-loader',
				include: src
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader'],
				include: src
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg|jpg|gif)$/,
				use: 'url-loader?limit=8192&name=images/[name].[hash].[ext]',
				include: src
			}
		]
	},

	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.js',
			'vue-router$': 'vue-router/dist/vue-router.js',
			'vuex$': 'vuex/dist/vuex.js',
			'src': resolve(__dirname, '../src'),
			'components': resolve(__dirname, '../src/components'),
			'common': resolve(__dirname, '../src/common'),
			'pages': resolve(__dirname, '../src/pages'),
			'api': resolve(__dirname, '../src/api/index.js'),
		},
		extensions: ['.js', '.less', '.vue']
	},

	plugins: [
		new htmlWebpackPlugin({
			template: resolve(__dirname, '../src/index.html')
		}),
		new webpack.ProvidePlugin({
		  api: 'api'
		}),
		new cleanWebpackPlugin(['../dist'], {
			allowExternal: true,
		}),

	]
}