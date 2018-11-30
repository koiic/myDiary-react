// third-party libraries
const merge = require('webpack-merge');
const webpack = require('webpack');

// webpack common configuration
const common = require('./webpack.config.common');

/**
 * @desc development configuration
 */
module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        CLIENT_REDIRECT: JSON.stringify('http://localhost:8000')
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader']
      }
    ]
  }
});
