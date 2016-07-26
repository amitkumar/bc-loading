var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', ['bundle']);

gulp.task('bundle', function() {
  gulp.src('./src/js/loading.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./dist/js/'));
});
