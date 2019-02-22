const webpack = require('webpack');
const path = require('path');
//webpack 4.0已经不支持的css分离插件
// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
//可用的将行间的css分离出来作为单独的css文件
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");//html模板,在使用script标签的body中生成一个包含所有webpack bundles的h5文件
//过滤无用css，暂时没法用
// const PurifyCSSPlugin = require('purifycss-webpack');
// const glob = require('glob');
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');//自动开启浏览器

let wp =  {
    mode: "development",//设置模式
    entry: {
        app: './2.js'
    },
    output: {
        filename: '[name].js',//编译好的文件,name=app
        path: path.resolve(__dirname, 'dist')
        //在当前路径创建一个dist文件夹，里面放着bundle.js
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                ],
                // use: ExtractTextWebpackPlugin.extract({
                //     fallback: "style-loader",
                //     use: "css-loader"
                // })
                // use:[
                //     MiniCssExtractPlugin.loader,
                //     "css-loader",
                // ]
            },
            {
                test:/.jpeg$/,
                use:[
                    {loader: "file-loader"}
                ]
            }
        ]
    },
    plugins: [
        // new ExtractTextWebpackPlugin('1.css'),
        // new MiniCssExtractPlugin({
        //     filename: "1.css",
        //     chunkFilename: "[id].css"
        // }),
        new HtmlWebpackPlugin({
            title: "My App",
            filename: "index.html",
            template: "./index.html",
            minify:{
                removeAttributeQuotes: true,//去掉引号
                collapseWhitespace: true,//一行显示
            }
        }),
        // new PurifyCSSPlugin({
        //     paths: glob.sync(path.join(__dirname, './*.html'))
        // })
        new OpenBrowserWebpackPlugin({url: 'http://localhost:8088'}),//自动开启浏览器
    ],
    devServer: {//绑定8088端口
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8088,
        hot: true
    },
};
module.exports = wp;