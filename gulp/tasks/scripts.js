var gulp        = require('gulp');
var config      = require('../config').scripts;
var size        = require('gulp-size');
var plumber     = require('gulp-plumber');
var gutil       = require("gulp-util");
var uglify      = require('gulp-uglify');
var options     = require('minimist')(process.argv.slice(2));


gulp.task('scripts', function() {
  return gulp.src(config.main_src)
    .pipe(options.production ? uglify() : gutil.noop())
    .pipe(size({
      title: 'Script'
    }))
    .pipe(gulp.dest(config.dest));
});
