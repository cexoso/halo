const path = require("path")
const HtmlPlugin = require("html-webpack-plugin")
module.exports = {
  entry: './app/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader' }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  plugins: [
    new HtmlPlugin({
      template: "app/index.html"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist")
  },
  devtool: "cheap-module-eval-source-map"
};
