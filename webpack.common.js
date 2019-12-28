/*
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const WebpackPluginPluginConfig = new HtmlWebpackPlugin({
  template: "./client/index.html",
  filename: "index.html",
  inject: "body",
  favicon: "./client/assets/favicon.ico"
});

const CopyWebpackPluginConfig = new CopyWebpackPlugin([
  { from: "./client/404.html", to: path.resolve(__dirname, "public") },
  { from: "./client/500.html", to: path.resolve(__dirname, "public") },
  { from: "./client/index.html", to: path.resolve(__dirname, "public") },
  { from: "./client/manifest.json", to: path.resolve(__dirname, "public") },
  {
    from: "./client/assets",
    to: path.resolve(__dirname, "public/assets"),
    toType: "dir"
  }
]);

module.exports = {
  entry: "./client/index.jsx",
  output: {
    filename: "js/bundle.[hash].js",
    path: path.resolve(__dirname, "public")
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["react"],
          babelrc: false
        }
      },
      {
        test: /\.css?/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ]
  },
  plugins: [WebpackPluginPluginConfig, CopyWebpackPluginConfig]
};
