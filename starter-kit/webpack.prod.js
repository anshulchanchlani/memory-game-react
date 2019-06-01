const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
const dest = path.join(__dirname, "dist");
module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: dest,
        publicPath: './',
        filename: '[name].js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.(less|css)$/,
            use: [
              {
                loader: MiniCSSExtractPlugin.loader
              },
              "css-loader",
              "less-loader"
            ]
        }
        ]
    },
   
    plugins:[
        new htmlWebpackPlugin({
            template: "./src/index.html",
            minify: false
          }),
          new MiniCSSExtractPlugin({
            filename: "styles.css",
            
          }),
        new CompressionPlugin({
            include:'/\/dist/'
        })
    ],
    //Minimization and Caching and other performance enabling options are enabled by default in Webpack 4. No need to set them to true.
    optimization:{
        minimizer:[new UglifyJsPlugin({
            parallel:true,
            cache:true,
            
        })],
        splitChunks: {
            chunks: 'all',
            name:'vendors',
        },
        
    }
};