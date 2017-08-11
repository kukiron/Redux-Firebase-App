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
  }
}
