var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  //让打包后生成在build.js文件中
  output: {
    path: './dist',
    filename: 'build.js'
  },
  module: {
    loaders: [{
        test: /\.vue$/,
        loader: 'vue',
        options: {
         },
      },
      //转化ES6语法
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      //图片转化，小于8K自动转化为base64的编码
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  plugins: [
    //给文件盖个自己名字的章
    new webpack.BannerPlugin("author: {your name}\n" + new Date().toLocaleString()),
    new webpack.optimize.UglifyJsPlugin({ //压缩插件
      compress: {
        warnings: false //不显示警告
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin("[name]-[hash].css")
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue'
    }
  },
  //这里用于安装babel，如果在根目录下的.babelrc配置了，这里就不写了
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  }
}
