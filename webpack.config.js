// const path = require('path');

// module.exports = {
// 	entry: './src/index.js',
// 	output: {
// 		path: path.resolve('dist'),
// 		filename: 'bundle.js',
// 	},
// 	module: {
// 		loaders: [
// 			{ test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
// 		],
// 	},
// };

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist'
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react'],
				}
			},
		],
	},
	devServer: {
		contentBase: './dist',
		historyApiFallback: true,
		inline: true,
	},
};
