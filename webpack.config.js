const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: path.join(__dirname, 'app/index.js'),
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.js?$/,
        loader : 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  devServer: {
    hot: true,
    stats: 'errors-only'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
