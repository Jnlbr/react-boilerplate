// Webpack modules
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
	mode: 'development',

	// Dev server configuration for development
	devServer: {
		port: 3000,
		publicPath: '/dist',
		disableHostCheck: true,
		liveReload: true,
		open: true,
		contentBase: 'public',
		historyApiFallback: {
			rewrites: [
				{
					from: /^\/admin\/.*$/,
					to: 'admin.html'
				}
			]
		}
	}

	// plugins: [new HtmlWebpackPlugin()]
});
