var gulp         = require('gulp');
var runSequence  = require('run-sequence');

gulp.task('build', function(callback){
  runSequence(
    'clean',
    'svgstore',
    ['normalize', 'styles', 'templates', 'images', 'rootfiles'],
    callback
  )
});
