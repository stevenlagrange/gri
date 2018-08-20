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
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              query: {
                progressive: true,
                optimizationLevel: 7,
                interlaced: false,
                pngquant: {
                  quality: '65-90',
                  speed: 4
                },
                gifsicle: {
                  interlaced: true,
                },
                optipng: {
                  optimizationLevel: 7,
                },
                mozjpeg: {
                  progressive: true,
                },
              }
            }
          }
        ]
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
