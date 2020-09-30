const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    './src/index.js',
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
  },
});
