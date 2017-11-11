const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const path = require('path');

module.exports = {

    context: path.resolve(__dirname, "src"),

    entry: {
        index: './index.js',
        vendor: ['react', 'react-dom']
    },

    output: {
        path: path.resolve(__dirname, "public"),
    filename: '[name].js'
    },

    devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 3000
    },   

    module: {
        loaders: [
            {
            test: /\.js?$/,
                exclude: [/node_modules/],
                loader: "babel-loader",
                query: {
                    presets: ['env', 'react']
                }
            },
            {
                test: /\.sass$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader!postcss-loader"
                })
            },
            {
                test: /\.(ico|svg|png|jpg|gif)$/,
                loader: 'file-loader?name=[name].[ext]'                 
            },
        ]
    },


  plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new ExtractTextPlugin("./css/bundle.css"),
        //new FaviconsWebpackPlugin('favicon')
        
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        })
    ],

};
