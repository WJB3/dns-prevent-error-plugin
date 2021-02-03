'use strict'; 
const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const Plugin=require('./plugin');

module.exports = { 
    mode:'production', 
    entry:'./index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    externals:{
        react:'react',
        'react-dom':'react-dom'
    },
    plugins:[
        new HtmlWebpackPlugin({
            templateContent:'<html><body><div id="root"></div></body></html>'
        }),
        new Plugin({})
    ]
}