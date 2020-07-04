var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { join, resolve } = require('path')
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv')
// FIXME change this bit
const isDevelopment = false

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: join(__dirname, 'src', 'index.html'),
  filename: 'index.html',
  inject  : 'body',
  favicon : join(__dirname, 'images', 'favicon1.ico')
});

var MiniCssExtractPlugin =  new MiniCssExtractPlugin({
      filename: path.join(__dirname, '[name].css') ,
      chunkFilename: path.join(__dirname, '[id].css') 
    });

var DefinePlugin = new webpack.DefinePlugin({
       'process.env': JSON.stringify(dotenv.config().parsed) 
    });

const path_to_react = isDevelopment  ? "http://localhost:3000/" : "https://arrb.github.io/";

module.exports = {
  context: __dirname,
  entry  : "./src/index.js",
  devtool: 'source-map',
  mode   : 'development',
  target: 'node',
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
     test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].css"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "css-loader?-url"
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
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
              publicPath: path_to_react
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
    publicPath: path_to_react
  },

  plugins: [HTMLWebpackPluginConfig,MiniCssExtractPlugin, DefinePlugin],

};
