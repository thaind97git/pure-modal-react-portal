process.env.NODE_ENV = 'development';

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('../config/paths');

const PORT = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

const { exampleFile, exampleFolder } = paths;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    example: exampleFile,
  },
  devServer: {
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
    devMiddleware: {
      stats: {
        colors: true,
        hash: false,
        version: true,
        timings: true,
        assets: false,
        chunks: false,
        modules: false,
        publicPath: false,
      },
    },
    host,
    hot: true,
    port: PORT,
    historyApiFallback: true,
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     inject: true,
  //     template: appHtml,
  //   }),
  // ],
  output: {
    path: exampleFolder,
    filename: '[name].min.js',
  },
});
