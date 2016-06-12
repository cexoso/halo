const webpack = require("webpack");
const path = require("path");
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
    module: {
        loaders: [{
            test: /\.jsx$|\.js$/,
            loader: "react-hot!babel-loader?presets[]=react,presets[]=es2015",
            include: path.join(__dirname, 'app')
        },
        {
            test: /.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }]
    },
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
            'webpack/hot/dev-server', // "only" prevents reload on syntax errors
            "./app/js/app.jsx"
        ],
        vendor: ["react", "react-dom", "react-router","react-redux","redux"]
    },
    output: {
        path: path.join(__dirname, '/app/bundle'),
        filename: "[name].bundle.js",
        publicPath: '/bundle/'
    },
    resolve: {
        alias: {
            "widget": path.join(__dirname, './app/js/widget'),
            "base": path.join(__dirname, './app/js/base'),
            "components": path.join(__dirname, './app/js/components'),
        }
        // ,
        // extensions: ['', '.js', '.jsx']
    },
    compiler: {
        stats: {
            colors: true
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        })
    ],
    devtool: 'inline-source-map'
};
