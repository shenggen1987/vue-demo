var path = require('path')
var config = require('../config1')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf1')
var cssLoaders = require('./css-loaders')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    // path: config.build.assetsRoot,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  vue: {
    loaders: cssLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    // extract css into its own file
    new ExtractTextPlugin('[name].[contenthash].css'),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename:  '../index.html',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      }
    })
  ]
})
