const webpack = require('webpack');
var path = require('path');

module.exports = {
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000
  },
  entry: [path.join(__dirname,'src/app/index.js')],
  output: {
    path: __dirname+'/public',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};
