/**
 * Created by harry on 11/10/2017.
 */
var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CONSTANTS = require('./app/config/CONSTANT'); // 静态资源CDN
const publicPath = CONSTANTS.publicPath;
// console.log('CONSTANTS',CONSTANTS)
module.exports = {
  // context: __dirname + "/src",
  entry: {
    'rongcloud/cs.min.js':'./app/public/rongcloud/cs.min.js',
    'rongcloud/RongIMLib-cs.js': './app/public/rongcloud/RongIMLib-cs.js',
    'rongcloud/cs.min.css': './app/public/rongcloud/cs.min.css'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name]",
    publicPath : publicPath
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      title: '我是title-1',
      inject: true,
      chunks: ['rongcloud/cs.min.js','rongcloud/RongIMLib-cs.js', 'rongcloud/cs.min.css'],
    })
  ]
}