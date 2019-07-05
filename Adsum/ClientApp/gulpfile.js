var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss', { base: "./" })
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("."));
});
 
gulp.task('default', ['sass'], function() {
    gulp.watch('./src/**/*.scss', ['sass']);
});
