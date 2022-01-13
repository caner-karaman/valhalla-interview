const HtmlWebpackPlugin = require('html-webpack-plugin');

const entryJsPath = "/src/refactor-this/assets/js/index.js";
const htmlPath = "/src/index.html";
const path = require( 'path' );

module.exports = {
  entry: path.join(__dirname, entryJsPath),
  output: {
    path:path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, htmlPath),
    }),
  ],
}