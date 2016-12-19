const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass({
      precision: 3
    }).on('error', errorHandler))
    .pipe(gulp.dest('app/css'))
});

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
});

function errorHandler(err) {
    console.log(err.toString());
    this.emit('end');
}
