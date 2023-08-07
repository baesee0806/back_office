const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  entry: {
    "js/app": ["./src/App.jsx"],
  },
  performance: {
    hints: false,
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/",
    filename: "[name].js",
    // sourceMapFilename: "[name].js.map",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css/, //css 파일에대한 정규 표현식
        use: ["style-loader", "css-loader"], // 사용할 모듈 설정
      },
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
    new webpack.EnvironmentPlugin([
      "REACT_APP_FIREBASE_API_KEY",
      "REACT_APP_FIREBASE_AUTH_DOMAIN",
      "REACT_APP_FIREBASE_PROJECT_ID",
      "REACT_APP_FIREBASE_STORAGE_BUCKET",
      "REACT_APP_FIREBASE_MESSAGING_SENDER_ID",
      "REACT_APP_FIREBASE_APP_ID",
      "Github_API_KEY",
    ]),
    // 오류 원인
    // new SourceMapDevToolPlugin({
    //   filename: "[file].map",
    // }),
  ],
  devServer: {
    host: "localhost",
    port: 3000,
    hot: true,
    open: true, // devServer 띄울때 new page open 여부
    historyApiFallback: true, // router-dom 옵션
  },
};
