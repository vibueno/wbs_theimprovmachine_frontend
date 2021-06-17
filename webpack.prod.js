const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.REACT_APP_BACKENDHOST': JSON.stringify(
        process.env.REACT_APP_BACKENDHOST
      ),
      'process.env.SKIP_PREFLIGHT_CHECK': JSON.stringify(
        process.env.SKIP_PREFLIGHT_CHECK
      )
    })
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true
      })
    ]
  }
});
