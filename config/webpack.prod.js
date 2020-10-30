const webpack = require('webpack')
const path = require('path')
const common = require('./webpack.common')
const {merge} = require('webpack-merge')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, DELETE PUT, PATCH",
        "Access-Control-Allow_Headers":
            "Origin, X-Requested-With, Accept, Content-Type, Authorization",
        },
        historyApiFallback: true,
        inline: true,
        proxy: [
            {
                context: ["/api", "/media"],
                target: "https://backends-46f3d8d3db06b1debd9f2.herokuapp.com/",
                // target: "https://bengkelsangkutbackend.herokuapp.com/",
                // target: process.env.VUE_APP_API_BASE_URL,
                changeOrigin: true,
                secure: false,
            },
        ],
    }
})