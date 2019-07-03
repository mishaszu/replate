import merge from "webpack-merge";
import common from "./webpack.common.babel.js";
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    port: 8000,
    hot: true,
    historyApiFallback: true,
    proxy: {
      "/api/**": {
        target: "http://localhost:8080/",
        changeOrigin: true,
        secure: false,
        ws: true
      },
      host: '0.0.0.0',
      disableHostCheck: true
    }
  }
}));
