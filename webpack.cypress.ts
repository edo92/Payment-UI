import path from "path";
import alias from "./configs/paths.webpack";
// const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, "src", "index.jsx"),
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
    alias: alias,
  },
  mode: "development",
  devtool: false,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/",
    chunkFilename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs|ts|tsx)$/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
        },
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/, /\.modules\.css$/i],
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type: "asset",
      },
    ],
  },
  plugins: [
    /*
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
    */
  ],
};
