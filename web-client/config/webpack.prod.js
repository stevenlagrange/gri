const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name]-[hash:8].[ext]',
          },
        },
        ],
      },
    ],
  },
});
