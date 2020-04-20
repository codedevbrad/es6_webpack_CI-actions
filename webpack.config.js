var path = require('path');
var ExtractTextPlugin  = require('extract-text-webpack-plugin');
var TerserPlugin       = require('terser-webpack-plugin');
var HtmlWebpackPlugin  = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
     watch: true ,
     entry:  { index: './dev/env_js/control_main.js' } ,
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
            } ,
            {
              test: /\.html$/,
              use: [
                {
                  loader: 'file-loader' ,
                  options: {
                    name: '[name].[ext]' ,
                  }
                }
              ] ,
              exclude: path.resolve(__dirname, 'dev/index.html')
            }
        ]
     } ,
     plugins: [
        new CleanWebpackPlugin() , 
        new ExtractTextPlugin({ filename: '/css/appbundle.css' }) ,
        new HtmlWebpackPlugin({ filename: 'index.html' , template: 'dev/index.html' }) ,
     ] ,
     optimization: {
        minimize: true,
        minimizer: [ new TerserPlugin() ],
     },
};
