const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Mini Css Extract Plugin Цей плагін використовує cssnano для оптимізації та скорочення вашого CSS.
          CssMinimizerWebpackPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      //  {
      //  test: /\.scss$/i,
      //use: [
      //"style-loader",
      //MiniCssExtractPlugin.loader,
      // "css-loader",
      // "sass-loader",
      // ],
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "src/index.html" }),
    new CssMinimizerWebpackPlugin(),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    port: 4444,
    open: true,
    stats: "errors-only",
  },
};
