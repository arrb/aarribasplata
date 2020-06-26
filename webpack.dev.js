var path = require('path');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { join, resolve } = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src/dist'),
    publicPath: 'http://localhost:3000/',
    port: 3000,
    historyApiFallback: true
  }
})