const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'index.html'})
  ],
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /^(?!.*\.test\.js$).*\.js$/
      }
    ]
  }
};