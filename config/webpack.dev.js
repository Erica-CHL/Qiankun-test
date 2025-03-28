const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true, // 解决前端路由刷新 404
    headers: {
      'Access-Control-Allow-Origin': '*', // 允许加载子应用资源（关键）
    },
  },
});