const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = {
  entry: './src/index.js', // entry point to the react project
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [{
      test: /\.js$/, 
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './public/index.html' }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed)
    })
  ]
}