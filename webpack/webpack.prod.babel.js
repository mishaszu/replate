import merge from "webpack-merge";
import CompressionPlugin from "compression-webpack-plugin";
import common from "./webpack.common.babel.js";

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new CompressionPlugin({
      test: /\.(js|jsx|ts|tsx|scss|css)$/i
    })
  ]
});
