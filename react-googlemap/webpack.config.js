const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src/index.js")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "[name].js",
    libraryTarget: "umd" // THIS IS THE MOST IMPORTANT LINE!
  },
  externals: {
    react: "commonjs react" // This line is just to use the React dependency of our parent-testing-project instead of using our own React.
  }
};
