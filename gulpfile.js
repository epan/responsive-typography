const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');

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

function errorHandler(err) {
    console.log(err.toString());
    this.emit('end');
}

function customPlumber() {
  return plumber({
    errorHandler: function(err) {
      console.log(err.stack);
      this.emit('end');
    }
  });
}
