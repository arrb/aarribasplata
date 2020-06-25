var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { join, resolve } = require('path')

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: join(__dirname, 'src', 'index.html'),
  filename: 'index.html',
  inject: 'body'
});
// template: resolve(__dirname, 'src/public', 'index.html'),
//         filename: './index.html'
module.exports = {
  entry: './src/index.js',
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
    },{
            test: /\.(css|scss)$/,
            use: [
                { loader: 'style-loader' },
                {
                    loader: 'css-loader'
                },
                { loader: 'sass-loader' },
                {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [require('autoprefixer')];
                                }
                            }
                        }
            ]
        },
              { test: /\.(eot|ttf|woff|svg)$/,  
        use: [ {loader: 'file-loader'}]
      },
            {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              regExp: /\/([a-z0-9]+)\/[a-z0-9]+\.png$/i,
              name: '[1]-[name].[ext]',
            },
          }]
}

    ]
  },
  output: {
    path: path.resolve(__dirname, 'src/dist'),
    filename: 'bundle.min.js'
  },
   plugins: [HTMLWebpackPluginConfig],
   devServer: {
    contentBase: path.join(__dirname, 'src/dist'),
    publicPath: 'http://localhost:3000/',
    port: 3000,
    historyApiFallback: true
  }
};

// template: resolve(__dirname, 'src/public', 'index.html'),
//         filename: './index.html'
// var path = require('path');
// var webpack = require('webpack');
// var Router = require('react-router').Router;
// var Route = require('react-router').Route;
// var Switch = require('react-router').Switch;
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

// exports = {
//   entry:  {app:'src/entry.js',
//   vendor: ["react","react-dom"]
// },
  // output: {
  //   path: path.join(__dirname, 'dist'),
  //   filename: 'bundle.js',
  //   publicPath :'http://localhost:5200/',
  // },
//   optimization: {
//     minimizer: [new UglifyJsPlugin()],
//   },
//   plugins: [
//     new webpack.optimize.OccurrenceOrderPlugin(),
//     new ExtractTextPlugin('./dist/app.css'),
//     new webpack.DefinePlugin({
//       'NODE_ENV': JSON.stringify("development")
//     })
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)?$/,
//             exclude: /(node_modules|bower_components)/,
//             loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015'],
//             query: {
//         presets: ['es2015']
//     }
//       }, 
//       {
//                 test: /\.html$/,
//                 loader: "file?name=[name].[ext]"
//             },
//       {
//         test: /\.css?$/,
//           loaders: ['style-loader', 'raw-loader'],
//           include: __dirname
//       },
//       {
//         test: /\.scss$/,
//         use: ExtractTextPlugin.extract({
//           fallback: 'style-loader',
//           use: ['css-loader', 'sass-loader']
//         })
//       },
      // { test: /\.(jpe?g|png|gif|svg)$/, 
      //   loader: 'url-loader', 
      //   query: {limit: 30000}
      // },
//       { test: /\.(eot|ttf|woff|svg)$/,  
//         loader: "file-loader" ,
//       }
//     ]
//   },
//   plugins: [
//       new HtmlWebpackPlugin({
//           title: 'Custom template',
//           template: path.join(__dirname, 'index.html'),
//           filename: 'index.html',
//         hash: true
//       }),
//       new ScriptExtHtmlWebpackPlugin({
//           defaultAttribute: 'defer'
//       })
//   ],
//   stats: {
//       colors: true,
//        children: false
//   },
//   resolve: {
//         extensions: ['*', '.js', '.jsx']
//     },
//   devtool: 'source-map'
// };
