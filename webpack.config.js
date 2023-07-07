const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "js/app": ["./src/App.jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/",
    filename: "[name].js",
    sourceMapFilename: "[name].js.map",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.png$/,
        use: ["file-loader"],
      },
      {
        test: [/\.js$/, /\.ts?$/, /\.jsx?$/, /\.tsx?$/],
        enforce: "pre",
        exclude: /node_modules/,
        use: ["source-map-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
  devServer: {
    host: "localhost",
    port: 3000,
    hot: true,
    open: true, // devServer 띄울때 new page open 여부
    historyApiFallback: true, // router-dom 옵션
  },
};
