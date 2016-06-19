var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var express = require("express");
var WebpackDevServer=new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  quiet: false,
  historyApiFallback: true
});
WebpackDevServer.app.use(express.static(__dirname + '/app'));
WebpackDevServer.listen(3000, '0.0.0.0', function (err, result) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://localhost:3000/');
});
//
// var gulp = require("gulp");
// var browserSync = require("browser-sync");
// var sass = require("gulp-sass");
// var ckokidar = require("chokidar");
// browserSync.init({
//     proxy: {
//         target: "127.0.0.1:3000",
//         ws: true
//     },
//     browser: ["google chrome"],
//     middleware: [function(req, res, next) {
//         next();
//     }],
//     port: 80
// });
// function scssHandle(p){
//     return gulp.src(p)
//             .pipe(sass().on('error', sass.logError))
//             .pipe(browserSync.stream());
// }
// ckokidar.watch("app/**/*.scss").on("change",scssHandle)
// ckokidar.watch("app/**/*.scss").on("add",scssHandle)
