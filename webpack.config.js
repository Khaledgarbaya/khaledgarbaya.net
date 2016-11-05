module.exports = {
  entry: './index.js',
  output: {
    filename: './static/main.bundle.js',
    path: '/static/'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
