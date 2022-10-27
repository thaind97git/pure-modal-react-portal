/* eslint-disable indent */
process.env.NODE_ENV = 'production';
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const paths = require('../config/paths');
const { appBuild, pureModalIndex } = paths;

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  entry: {
    'pure-modal-react-portal': pureModalIndex,
  },
  output: {
    path: appBuild,
    filename: 'index.js',
    clean: true,
    libraryTarget: 'umd',
  },
  externals: {
    react: 'umd react',
    'react-dom': 'umd react-dom',
  },
});
