const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
   new CleanWebpackPlugin(['dist']),
   new HtmlWebpackPlugin({
     title: 'Production'
   }),
   new webpack.HotModuleReplacementPlugin()
  ],
  output: {
   filename: '[name].bundle.js',
   path: path.resolve(__dirname, 'dist'),
   publicPath: '/'
  }
};