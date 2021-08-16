const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	entry: {
		main: path.resolve(__dirname, './src/index.jsx'),
	},
	output: {
		publicPath: '/',
		path: path.resolve(__dirname, 'public'),
		filename: '[name].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './src/template.html'),
			filename: 'index.html'
		}),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			// JavaScript
			{
				test: /\.(js|jsx)$/u,
				use: [
					{
						loader: 'babel-loader',
						options: {cacheDirectory: true}
					}
				],
				exclude: [/node_modules/u],
				include: [path.join(__dirname, 'src')]
			}
		],
	},
	mode: 'development',
	devServer: {
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, './public'),
		open: true,
		compress: true,
		hot: true,
		port: 8080,
	},
	watch: true,
	watchOptions: {ignored: /node_modules/u}
}
