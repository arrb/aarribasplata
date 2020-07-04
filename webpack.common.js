var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { join, resolve } = require('path')
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv')
const isDevelopment = true


var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: join(__dirname, 'src', 'index.html'),
  filename: 'index.html',
  inject  : 'body',
  favicon : join(__dirname, 'images', 'favicon1.ico')
});


var MiniCssExtractPlugin =  new MiniCssExtractPlugin({
      filename: isDevelopment ? path.join(__dirname, '[name].css') : path.join(__dirname, '[name].[hash].css'),
      chunkFilename: isDevelopment ? path.join(__dirname, '[id].css') : path.join(__dirname, '[id].[hash].css')
    });

var DefinePlugin = new webpack.DefinePlugin({
       'process.env': JSON.stringify(dotenv.config().parsed) // it will automatically pick up key values from .env file
    });

module.exports = {
  context: __dirname,
  entry  : "./src/index.js",
  devtool: 'source-map',
  mode   : 'development',
  module : {
    rules: [{
       test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          "presets": ["@babel/preset-env", "@babel/preset-react"]
        }
      }
    },
    {
      test: /\.s(a|c)ss$/,
      exclude: /\.module.(s(a|c)ss)$/,
      loader: [
        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sourceMap: isDevelopment
          }
        }
      ]
    },          
    {
      test: /\.(svg|png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              path: __dirname + "/",
              name: '[name].[ext]',
              publicPath: "http://localhost:3000/"
            }
          }
        ]
      },
      { 
        test: /\.(eot|woff|woff2|ttf)$/,  
        use: [ {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts/'
            }
          }
        ]
      }
    ]
  },
  output:{
    path: __dirname + "/",
    filename: "bundle.js",
    publicPath: "http://localhost:3000/"
  },

  plugins: [HTMLWebpackPluginConfig,MiniCssExtractPlugin, DefinePlugin],

};
