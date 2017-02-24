/* eslint no-console:"off" */
const {resolve} = require('path')
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const {getIfUtils, removeEmpty} = require('webpack-config-utils')
const OfflinePlugin = require('offline-plugin')

module.exports = env => {
  const {ifProd, ifNotProd} = getIfUtils(env)
  const config = {
    context: resolve('src'),
    entry: {
      app: './index.js'
    },
    output: {
      filename: ifProd('bundle.[name].[chunkhash].js', 'bundle.[name].js'),
      path: resolve('dist'),
      pathinfo: ifNotProd()
    },
    devtool: ifProd('source-map', 'eval'),
    module: {
      loaders: [
        {test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/},
        {
          test: /\.(eot|svg|ttf|woff|woff2|jpe?g$|svg$|png$)$/,
          loader: 'file?name=[name].[ext]'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: removeEmpty([
      new ProgressBarPlugin(),
      new ExtractTextPlugin(ifProd('styles.[name].[chunkhash].css', 'styles.[name].css')),
      ifProd(new InlineManifestWebpackPlugin()),
      ifProd(new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      })),
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new OfflinePlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: ifProd('"production"', '"development"')
        }
      })
    ])
  }
  if (env.debug) {
    console.log(config)
    debugger // eslint-disable-line
  }
  return config
}
