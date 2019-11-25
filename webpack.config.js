const webpack = require('webpack');
var path = require('path');

module.exports = {
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
