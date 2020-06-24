const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const Dotenv = require('dotenv-webpack');


module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath :'http://localhost:5200/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    devtool: 'source-map',

    plugins: [
        new ExtractTextPlugin('[name].css'),
        new Dotenv()

    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }

})