var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var express = require('express');
var WebpackDevServer=new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  quiet: false,
  historyApiFallback: true
})
WebpackDevServer.app.use(express.static(__dirname + '/app'));
WebpackDevServer.listen(3000, '0.0.0.0', function (err, result) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://localhost:3000/');
});

var gulp = require("gulp");
var browserSync = requrie("browser-sync");
gulp.task('browser-sync', ["init","watch"], function() {
    browserSync.init({
        server: {
            baseDir: ["app"]
        },
        middleware: [function(req, res, next) {            
            next();
        }],
        port: 80
    });
});
