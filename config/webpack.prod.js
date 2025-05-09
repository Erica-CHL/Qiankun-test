const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: '/main-app/', // 根据实际部署路径调整
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});