const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test:/\.(s*)css$/,
        use:['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  output: {
   filename: 'static/[name].[hash].js',
   path: path.resolve(__dirname, 'dist'),
   publicPath: '/'
 },
 plugins: [
  new CleanWebpackPlugin(['dist']),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'public/index.html')
  })
 ]
};
