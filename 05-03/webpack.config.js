/**
 * Created by harry on 11/10/2017.
 */
var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // context: __dirname + "/src",
  entry: {
    'main.js':'./src/js/index.js',
    'a.js': './src/js/a.js',
    'b.js': './src/js/b.js',
    'c.css': './src/css/style.css'
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
    filename: "js/[name]",
    publicPath : 'http://kuma.com/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'main.html',
      template: 'index.html',
      title: '我是title-1',
      inject: false,
      chunks: ['main.js','a.js','b.js','c.css'],
    })
  ]
}