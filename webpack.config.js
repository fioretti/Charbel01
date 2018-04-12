var path = require('path');
var webpack = require('webpack');

var config = {
  context: path.join(__dirname, 'GiftCertApp/Scripts'),
  entry: {   
	serviceType: './ServiceType/Container'
  },  
  output: {
    path: path.join(__dirname, 'GiftCertApp/wwwroot/js'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { 
		test: /\.js$/,
		loader: 'babel-loader',
		exclude: /node_modules/,
		query: {
          presets: ['es2015', 'react']
        }
	  }
    ],
  },
  plugins: [],
  resolve: {
    root: path.resolve('./GiftCertApp/Scripts'),
    extensions: ['', '.js']
  },
  externals: {
    // Use external version of React (from CDN for client-side, or
    // bundled with ReactJS.NET for server-side)
    'react': 'React',
	'react-dom': 'ReactDOM',
	'redux': 'Redux',
	'react-redux': 'ReactRedux',
	'redux-thunk': 'ReduxThunk',
	'Immutable': 'Immutable',
	'lodash': '_'
  }
};

if (process.env.NODE_ENV === 'production') {
	config.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    )
}

module.exports = config;