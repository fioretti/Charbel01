var gulp = require('gulp');
var gutil = require('gulp-util');
var clean = require('del');
var concat = require('gulp-concat');
var gulpsync = require('gulp-sync')(gulp);
var webpack = require('webpack');

var config = require('./webpack.config.js');

gulp.task('clean-js', function() {
    return clean('GiftCertApp/wwwroot/js');
});

gulp.task('js', ['clean-js'], function() {
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/bootstrap/dist/js/bootstrap.js',
		
		'node_modules/react/dist/react.min.js',
		'node_modules/react-dom/dist/react-dom.min.js',
		'node_modules/redux/dist/redux.min.js',
		'node_modules/redux-thunk/dist/redux-thunk.min.js',
		'node_modules/react-redux/dist/react-redux.min.js',
		'node_modules/immutable/dist/immutable.min.js',
		'node_modules/lodash/lodash.min.js',
		
		'node_modules/select2/dist/js/select2.js',
		'node_modules/bootstrap-select/dist/js/bootstrap-select.js',
		'bower_components/moment/moment.js',
		'bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
		'bower_components/clockPicker/dist/bootstrap-clockpicker.js',
		'bower_components/bootstrap-daterangepicker/daterangepicker.js'
    ])
    .pipe(concat('lmd.js'))    
    .pipe(gulp.dest('GiftCertApp/wwwroot/js'));
});

gulp.task('clean-css', function() {
    return clean('GiftCertApp/wwwroot/css');
});

gulp.task('css', ['clean-css', 'fonts'], function () {
    return gulp.src([        
        'node_modules/bootstrap/dist/css/bootstrap.css',
		'node_modules/font-awesome/css/font-awesome.css',
		'bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css',
		'bower_components/clockPicker/dist/bootstrap-clockpicker.css',
		'node_modules/select2/dist/css/select2.css',
		'node_modules/select2-bootstrap-theme/dist/select2-bootstrap.css',
		'node_modules/bootstrap-select/dist/css/bootstrap-select.css',
		'bower_components/bootstrap-daterangepicker/daterangepicker.css',
	    'GiftCertApp/content/master.css',
		'GiftCertApp/content/site.css'
    ])
    .pipe(concat('lmd.css'))
    .pipe(gulp.dest('GiftCertApp/wwwroot/css'));
});

gulp.task('clean-fonts', function () {
    return clean('GiftCertApp/wwwroot/fonts');
});

gulp.task('fonts', ['clean-fonts'], function () {
    return gulp.src([
        'node_modules/bootstrap/fonts/*.*',
		'node_modules/font-awesome/fonts/*.*',
		'node_modules/react-redux-toastr/lib/fonts/*.*',
		'GiftCertApp/content/fonts/*.*'
    ])
    .pipe(gulp.dest('GiftCertApp/wwwroot/fonts'));
});

gulp.task('build-dev', ['webpack:build'], function() {
	gulp.watch(['./GiftCertApp/Scripts/**/*'], ['webpack:build']);
});


gulp.task('webpack:build', function(done){

	if (process.env.NODE_ENV) {
		config.plugins = config.plugins.concat(
			new webpack.DefinePlugin({
				"process.env": {
					// This has effect on the react lib size
					"NODE_ENV": JSON.stringify("production")
				}
			}),
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.UglifyJsPlugin()
		);
	}

   webpack(config, function(error, stats){
        if (error) {
            var pluginError = new gulpUtil.PluginError('webpack', error);
 
            if (done) {
                done(pluginError);
            } else {
                gulpUtil.log('[webpack]', pluginError);
            }
 
            return;
        }
 
        Object.keys(stats.compilation.assets).forEach(function(key) {
			gutil.log('Webpack: output ', gutil.colors.green(key));
		});
		gutil.log('Webpack:', gutil.colors.green('finished'));
		if (done) {
			done();
		}
   });
});

gulp.task('set-prod-node-env', function() {
    return process.env.NODE_ENV = 'production';
});

gulp.task('build', gulpsync.sync(['js', 'css', 'webpack:build']));
gulp.task('dev',  gulpsync.sync(['js', 'css', 'build-dev']));
gulp.task('production', gulpsync.sync(['js', 'css', 'set-prod-node-env', 'webpack:build']));