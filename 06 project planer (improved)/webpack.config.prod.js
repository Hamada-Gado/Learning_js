/* eslint-disable no-undef */
const path = require("path");
const cleanPlugin = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/App.js",
    output: {
        filename: "[contenthash].js",
        path: path.resolve(__dirname, "assets", "scripts"),
        publicPath: "assets/scripts/",
    },
    devtool: "cheap-source-map",
    plugins: [new cleanPlugin.CleanWebpackPlugin()],
};
