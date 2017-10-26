/**
 * Created by harry on 11/10/2017.
 */
var webpack = require('webpack')
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + "/src",
  entry: './js/index.js',
  //添加我们的插件会自动生成一个html文件
  plugins: [
    new HtmlwebpackPlugin({
      template: __dirname + "/src/index.html"//html模版地址
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        devServer: {
          contentBase: "./src", //本地服务器所加载的页面所在的目录
          colors: true, //终端中输出结果为彩色
          historyApiFallback: true, //不跳转
          inline: true //实时刷新
        }
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs']
        }
      },
      // 下面是添加的css的loader，也即是 css 模块化的配置方法，大家可以 copy 过去直接使用
      {
        test: /\.css$/,
        // loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        loader: 'style-loader!css-loader'
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "bundle.js"
  }
}