// var path = require('path');
// var webpack = require("webpack");

// module.exports = {
//   entry: './src/index.js',
//   devtool: 'source-map',
//     mode: 'production',
//   module: {
//     rules: [{
//        test: /\.m?js$/,
//       exclude: /(node_modules|bower_components)/,
//       use: {
//         loader: 'babel-loader',
//         options: {
//           "presets": ["@babel/preset-env", "@babel/preset-react"]
//         }
//       }
//     },{
//             test: /\.(css|scss)$/,
//             use: [
//                 { loader: 'style-loader' },
//                 {
//                     loader: 'css-loader',
//                     options: {
//                         modules: true
//                     }
//                 },
//                 { loader: 'sass-loader' }
//             ]
//         },
//               { test: /\.(eot|ttf|woff|svg)$/,  
//         loader: "file-loader" ,
//       }
// ]
//   },
//   output: {
//     path: path.resolve(__dirname, './src/vendor'),
//     filename: 'bundle.min.js'
//   }
// };

// // var path = require('path');
// // var webpack = require('webpack');
// // var Router = require('react-router').Router;
// // var Route = require('react-router').Route;
// // var Switch = require('react-router').Switch;
// // var ExtractTextPlugin = require('extract-text-webpack-plugin');
// // const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// // var HtmlWebpackPlugin = require('html-webpack-plugin');
// // var ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

// // exports = {
// //    entry:  {app:'src/entry.js',
// //   vendor: ["react","react-dom"]
// // },
// //   output: {
// //     path: path.join(__dirname, 'dist'),
// //     filename: 'bundle.js'
// //   },
// //   optimization: {
// //     minimizer: [new UglifyJsPlugin()],
// //   },
// //   plugins: [
// //     new webpack.optimize.OccurrenceOrderPlugin(),
// //     new ExtractTextPlugin('./dist/app.css'),
// //     new webpack.DefinePlugin({
// //       'NODE_ENV': JSON.stringify("production")
// //     })
// //   ],
// //   module: {
// //     rules: [
// //       {
// //         test: /\.(js|jsx)?$/,
// //             exclude: /(node_modules)/,
// //             loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015'],
// //             query: {
// //         presets: ['es2015']
// //     }
// //       }, 
// //       {
// //                 test: /\.html$/,
// //                 loader: "file?name=[name].[ext]"
// //             },
// //       {
// //         test: /\.css?$/,
// //           loaders: ['style-loader', 'raw-loader'],
// //           include: __dirname
// //       },
// //       {
// //         test: /\.scss$/,
// //         use: ExtractTextPlugin.extract({
// //           fallback: 'style-loader',
// //           use: ['css-loader', 'sass-loader']
// //         })
// //       },
// //       { test: /\.(jpe?g|png|gif|svg)$/, 
// //         loader: 'url-loader', 
// //         query: {limit: 30000}
// //       },
//       // { test: /\.(eot|ttf|woff|svg)$/,  
//       //   loader: "file-loader" ,
//       // }
// //     ]
// //   },
// //   plugins: [
// //       new HtmlWebpackPlugin({
// //           title: 'Custom template',
// //           template: path.join(__dirname, 'index.html'),
// //           filename: 'index.html',
// //         hash: true
// //       }),
// //       new ScriptExtHtmlWebpackPlugin({
// //           defaultAttribute: 'defer'
// //       })
// //   ],
// //   stats: {
// //       colors: true,
// //        children: false
// //   },
// //   resolve: {
// //         extensions: ['*', '.js', '.jsx']
// //     },
// //   devtool: 'source-map'
// // };
