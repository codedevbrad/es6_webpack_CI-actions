var path = require('path');
var ExtractTextPlugin  = require('extract-text-webpack-plugin');
var TerserPlugin       = require('terser-webpack-plugin');
var HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
     watch: true ,
     entry:  { 'setup': './dev/env_js/control_main.js'  ,
               'index.first' : './dev/env_js/control_edits'
     } ,
     output: {
          path: path.resolve(__dirname, 'dist'),
          filename: './build/[name].js'
     } ,
     devServer: {
        contentBase: './dist/',
        compress: true,
        port: 3000
     } ,
     module: {
        rules: [
            {
              test: /\.(s*)css$/ ,
              use: ExtractTextPlugin.extract({
                  fallback:'style-loader',
                  use:['css-loader','sass-loader'],
              })
            } ,
            {
              test: /\.html$/ ,
              use:  [ 'html-loader' ]
            } ,
            {
              test: /\.(jpg|png)$/,
              use: [
                {
                  loader: 'file-loader' ,
                  options: {
                    name: '[name].[ext]' ,
                    outputPath: 'img/' ,
                    publicPath: 'img/'
                  }
                }
              ]
            }
        ]
     } ,
     plugins: [
        new ExtractTextPlugin({ filename: '/css/appbundle.css' }) ,
        new HtmlWebpackPlugin({
            title: 'My Awesome application',
            myPageHeader: 'Hello World',
            template: 'dev/index.html',
            chunks:   [ 'setup' ],
            filename: 'index.html' //relative to root of the application
        }) ,
        new HtmlWebpackPlugin({
            title: 'My Awesome application',
            myPageHeader: 'Hello World',
            template: 'dev/other.html',
            chunks:   [ 'setup' , 'index.first' ],
            filename: 'other.html' //relative to root of the application
        })
     ] ,
     optimization: {
        minimize: true,
        minimizer: [ new TerserPlugin() ],
     },
};
