/* eslint-disable no-undef */
const path = require("path");
const cleanPlugin = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/App.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "assets", "scripts"),
        publicPath: "assets/scripts/",
    },
    devtool: "eval-source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, "./"),
        },
    },
    plugins: [new cleanPlugin.CleanWebpackPlugin()],
};
