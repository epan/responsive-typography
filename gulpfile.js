const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(customPlumber())
    .pipe(sass({
      precision: 3
    }))
    .pipe(gulp.dest('app/css'))
});

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
});

function customPlumber() {
  return plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  });
}
