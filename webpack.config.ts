const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: ['babel-loader'],
        exclude: /node_modules*/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
