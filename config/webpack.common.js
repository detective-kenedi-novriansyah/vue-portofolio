const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const workboxPlugin = require('workbox-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: ["@babel/polyfill", path.join(__dirname, "../server/index.ts")],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "../dist"),
    },
    resolve: {
        // Add `.ts` as a resolvable extension.
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: [
                {
                    loader: 'vue-loader',
                    options: {
                        
                    }
                },
                {
                    loader: 'iview-loader',
                    options: {
                        prefix: false
                    }
                }
            ]
        },{
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader'
            ]
        },{
            test: /\.scss$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader'
            ]
        },{
            test: /\.sass$/,
            use: [
                'vue-style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        indentedSyntax: true,
                        // sass-loader version >= 8
                        sassOptions: {
                        indentedSyntax: true
                        }
                    }
                }
            ]
        },{
            test: /\.less$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'less-loader'
            ]
        },{
            test: /\.styl(us)?$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'stylus-loader'
            ]
        },{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: file => (
                /node_modules/.test(file) &&
                !/\.vue\.js/.test(file)
            )
        },{
            test: /\.ts$/,
            loader: 'ts-loader',
            options: { appendTsSuffixTo: [/\.vue$/] }
        },{
            test: /\.pug$/,
            oneOf: [
                // this applies to `<template lang="pug">` in Vue components
                {
                resourceQuery: /^\?vue/,
                use: ['pug-plain-loader']
                },
                // this applies to pug imports inside JavaScript
                {
                use: ['raw-loader', 'pug-plain-loader']
                }
            ]
        },{
            test: /\.vue.(ts|tsx)$/,
            exclude: /node_modules/,
            enforce: 'pre',
            use: [
                {
                    loader: 'vue-tslint-loader',
                    options: { /* Loader options go here */ }
                }
            ]
        },{
            test: /\.xml$/,
            use: ["xml-loader"],
        },
        {
            test: /\.(csv|tsv)$/,
            use: ["csv-loader"],
        },
        {
            test: /\.(png|svg|jpe?g|gif)$/,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 8192,
                },
              },
            ],
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ["file-loader"],
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../server/index.html"),
            filename: 'index.html',
            title: "Hello Kenedi you stronger"
        }),
        new VueLoaderPlugin(),
        new WebpackNotifierPlugin({
            title: 'Webpack',
            suppressSuccess: true
        })
    ]
}