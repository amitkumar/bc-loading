var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('bundle', (done) => {
  gulp.src('./src/loading.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./dist/'));
  done();
});
