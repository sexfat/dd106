var gulp = require('gulp');


gulp.task('concatjs' , function() {
    gulp.src('js/*').pipe(gulp.dest('assets/js'));
})

gulp.task('concatcss' , function() {
    gulp.src('css/*').pipe(gulp.dest('assets/css'));
})