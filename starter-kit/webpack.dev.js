const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const dest = path.join(__dirname, "dist");
const port = 3001;
module.exports = {
  devtool: "cheap-eval-source-map",
  entry: ["./src/index.js"],
  output: {
    path: dest,
    filename: "bundle.[hash].js"
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      minify: false
    }),
    new MiniCSSExtractPlugin({
      filename: "styles/bundle.[hash].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          "css-loader",
          "less-loader"
        ]
      }
    ]
  },
  devServer: {
    contentBase: "/",
    hot: true,
    port,
    inline: true
  }
};


