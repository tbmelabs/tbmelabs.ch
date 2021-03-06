var webpack = require('webpack');
var path = require('path');

var NODE_DIR = path.resolve(__dirname, 'node_modules');
var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: [NODE_DIR],
      include: [APP_DIR],
      loader: 'babel-loader',
      query: {
        plugins: [
          'transform-object-rest-spread'
        ],
        presets: [
          'react',
          'env'
        ]
      }
    }, {
      test: /\.(css|less)$/,
      loader: "style-loader!css-loader!less-loader"
    }, {
      test: /\.(jpe?g|png|svg)$/,
      loader: "file-loader?publicPath=public/"
    }, {
      test: /\.(woff|woff2|eot|ttf)$/,
      loader: 'url-loader?limit=100000'
    }]
  },
  plugins: [new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  })]
};

module.exports = config;