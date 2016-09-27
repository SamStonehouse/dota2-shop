var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './source/app.jsx',
  output: {
		path: path.join(__dirname, 'public', 'assets', 'built'),
		filename: 'bundle.js'
	},
	debug: true,
	devtool: 'source-map',
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	eslint: {
		configFile: '.eslintrc'
	},
	module: {
		preLoaders: [
			{
				test: /\.jsx?$/,
				loader: 'eslint-loader',
				exclude: /node_modules/,
			},
		],
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /(\.css|\.scss)$/,
				loaders: ["style", "css", "sass"],
			},
		],
	}
};
