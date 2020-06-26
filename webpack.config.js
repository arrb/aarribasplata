var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { join, resolve } = require('path')
var MiniCssExtractPlugin = require('mini-css-extract-plugin');


var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: join(__dirname, 'src', 'index.html'),
  filename: 'index.html',
  inject: 'body',
  favicon: join(__dirname, 'images', 'favicon1.ico')
});

var isDevelopment = true
var MiniCssExtractPlugin =  new MiniCssExtractPlugin({
      filename: isDevelopment ? path.join(__dirname, '[name].css') : path.join(__dirname, '[name].[hash].css'),
      chunkFilename: isDevelopment ? path.join(__dirname, '[id].css') : path.join(__dirname, '[id].[hash].css')
    })
// template: resolve(__dirname, 'src/public', 'index.html'),
//         filename: './index.html'
module.exports = {
  // entry: './src/index.js',


  // context: __dirname + "/app",
  //   entry: "./entry",
  //   output: {
  //       path: __dirname + "/build",
  //       filename: "bundle.js"
  //   }
  context: __dirname,
  entry: "./src/index.js",
  // entry: {
  //   app: './src/index.js'
  // },
  devtool: 'source-map',
    mode: 'development',
       module: {
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
        test: /\.module\.s(a|c)ss$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
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
      }
    ,          
           {test: /\.(svg|png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
                path: __dirname + "/dist",
                 name: '[name].[ext]',
                publicPath: "https://arrb.github.io/dist/"
            }
          }
        ]},

        { test: /\.(eot|woff|woff2|ttf)$/,  
        use: [ {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts/'
            }
          }]
      }

    ]
  },
  // output: {
  //   path: path.join(__dirname, 'src/build'),
  //   filename: '[name].bundle.min.js',
  // },
  output:{
        path: __dirname + "/dist",
        filename: "bundle.js",
        publicPath: "https://arrb.github.io/"
  },
  // cuando es local publicPath:" __dirname + "/build/"" funciona. Cuando es onlin `/` funciona
   plugins: [HTMLWebpackPluginConfig,MiniCssExtractPlugin],
   devServer: {
    contentBase: path.join(__dirname, 'src/dist'),
    publicPath: 'http://localhost:3000/',
    port: 3000,
    historyApiFallback: true
  }
};
