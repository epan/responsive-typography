const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass({
      precision: 3
    }))
    .pipe(gulp.dest('app/css'))
});
