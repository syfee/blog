var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require('./webpack.config.js');

var src = './src/public';

// The development server (the recommended option for development)
gulp.task("default", ["webpack-dev-server"]);

// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
//               can serve an old app on refresh
gulp.task("build-dev", ["webpack:build-dev"], function() {
    gulp.watch(["./**/*"], ["webpack:build-dev"]);
});


gulp.task("webpack-dev-server", function(callback) {
    // Start a webpack-dev-server
    var myConfig = Object.create(webpackConfig);
    myConfig.devtool = "eval";
    myConfig.debug = true;

    var compiler = webpack(myConfig);

    new WebpackDevServer(compiler, {
        // server and middleware options
        publicPath: myConfig.output.publicPath,
        //embed the webpack-dev-server runtime into the bundle;
        //--inline: 
        //inline: true,

        //adds the HotModuleReplacementPlugin and switch the server to hot mode. Note: make sure you don’t add HotModuleReplacementPlugin twice;
        //hot: true,
        stats: {
            colors: true
        },
        // Set this as true if you want to access dev server from arbitrary url.
        // This is handy if you are using a html5 router.
        historyApiFallback: false

    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
});


// modify some webpack config options
var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;

// create a single instance of the compiler to allow caching
var devCompiler = webpack(myDevConfig);

gulp.task("webpack:build-dev", function(callback) {
    // run webpack
    devCompiler.run(function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build-dev", err);
        gutil.log("[webpack:build-dev]", stats.toString({
            colors: true
        }));
        callback();
    });
});

// Production build
gulp.task("build", ["webpack:build"]);
gulp.task("cp:html",function(){
    gulp.src(["*.html"],{
        base: "."
    }).pipe(gulp.dest("../public/"));
});
gulp.task("cp:css",function(){
    gulp.src(["styles/*.css"],{
        base: "."
    }).pipe(gulp.dest("../public/"));
});
gulp.task("cp:img",function(){
    gulp.src(["images/**/*.*"],{
        base: "."
    }).pipe(gulp.dest("../public/"));
});
gulp.task("webpack:build", function(callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    // myConfig.plugins = myConfig.plugins.concat(
    //     new webpack.DefinePlugin({
    //         "process.env": {
    //             // This has effect on the react lib size
    //             "NODE_ENV": JSON.stringify("production")
    //         }
    //     }),
    //     new webpack.optimize.DedupePlugin(),
    //     new webpack.optimize.UglifyJsPlugin()
    // );
    
    myConfig.plugins = myConfig.plugins.concat(new webpack.optimize.CommonsChunkPlugin('common.js'));
    // run webpack
    webpack(myConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
        callback();
    });
});