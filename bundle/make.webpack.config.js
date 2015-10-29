/*globals __dirname, require, process */

module.exports = function(name) {
  var path = require("path");
  var webpack = require("webpack");
  var AssetsPlugin = require("assets-webpack-plugin");

  var ENV = process.env.ENV;
  var ROOT_PATH = "./javascripts";
  var entry = {};
  var ext = ".bundle.js";
  var filename;

  entry[name] = ROOT_PATH + "/" + name + "/bootstrap";
  entry.common = require("./" + name + ".common.json");

  if (ENV === "development") {
    filename = "__[name]" + ext;
  } else {
    filename = "[name]-[chunkhash]" + ext;
  }

  var plugins = [
    new AssetsPlugin({
      filename: "assets.json",
      path: path.join(__dirname, "..", "server", "routes")
    }),
    new webpack.optimize.CommonsChunkPlugin("common", "[name]-[hash].bundle.js"),
    new webpack.optimize.OccurenceOrderPlugin()
  ];

  if (ENV !== "development") {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        preserveComments: false,
        beautify: true,
        compress: {
          warnings: false
        }
      })
    );
  }

  return {
    context: __dirname,
    devtool: (ENV === "development") ? "source-map" : null,
    entry: entry,
    output: {
      filename: filename,
      path: path.join(__dirname, "..", "public"),
      publicPath: (function(n){var p = "../"; while (n--) { p += p; } return p; })(5)
      /* returns a string^^^ value of repeating to "../../${ect...}".
       * `webpack` does not have an effective way to denote "root relative".
       * `publicPath` is used when asyncronously loading modules.
       * You can't hop up too many dirs with this value.
      */
    },
    plugins: plugins,
    resolve: {
      root: [path.join(__dirname, "javascripts")],
      extensions: ["", ".js", ".jsx"]
    },
    module: {
      loaders: [
        {
          test: [/\.js$/, /\.jsx?$/],
          loaders: ["babel"],
          include: path.resolve(ROOT_PATH, "app")
        }
      ]
    }
  };
};
