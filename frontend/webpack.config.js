const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = require("webpack");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const port = process.env.port || 3000;
const BUILD_DIR = path.resolve(__dirname, "build");
const APP_DIR = path.resolve(__dirname, "src");

module.exports = (env) => {
  const modeConfig =
    env.mode === "development"
      ? {
          mode: "development",
          devtool: "cheap-module-source-map",
          devServer: {
            host: "localhost",
            port: port,
            open: true,
          },
        }
      : {
          mode: "production",
          devtool: "source-map",
        };
  return {
    entry: APP_DIR,
    output: {
      path: BUILD_DIR,
      filename: "bundle.[hash].js",
    },
    module: {
      rules: [
        {
          test: /(\.jsx|\.js)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.css$/i,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            { loader: "css-loader" },
            { loader: "postcss-loader" },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new ProvidePlugin({
        React: "react",
        process: "process/browser",
      }),
      new Dotenv({
        path: ".env.development",
      }),
      new MiniCssExtractPlugin({
        chunkFilename: "index.css",
        filename: "index.css",
      }),
    ],
    ...modeConfig,
  };
};
