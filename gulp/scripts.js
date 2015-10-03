'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('scripts', function () {
	return gulp.src([
			path.join(conf.paths.src, '/app/**/*.js'),
			path.join('!' + conf.paths.src, '/app/**/*.spec.js')
		])
		.pipe($.jshint())
		.pipe($.jshint.reporter($.stylish))
		.pipe($.jshint.reporter('fail'))
		.pipe(browserSync.reload({ stream: true }))
		.pipe($.size())
});
