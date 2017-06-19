var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('css/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('css'))
})

gulp.task('watch', function(){
  gulp.watch('css/**/*.sass', ['sass']); 
})