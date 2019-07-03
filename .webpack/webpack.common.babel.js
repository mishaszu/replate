import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyPlugin from "copy-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

require("@babel/polyfill");

module.exports = {
  context: path.resolve(__dirname, ".."),
  entry: ["@babel/polyfill", "./src/index.tsx"],
  output: {
    path: path.join(path.resolve(__dirname, ".."), "/dist"),
    publicPath: '/',
    filename: "index.[hash].bundle.js",
    globalObject: "this"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".png", ".jpg"],
    alias: {
      lib: path.resolve(__dirname, "../src/lib/"),
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            babelrc: true
          }
        }
      },
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192
          }
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new CopyPlugin([
      { from: "src/assets/favicons", to: "favicons" },
      { from: "src/assets/icons", to: "icons" }
    ]),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({ silent: process.argv.includes("--json") })
  ]
};
