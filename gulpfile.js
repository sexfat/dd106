var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');


gulp.task('concatjs', function () {
    gulp.src('js/*.js').pipe(gulp.dest('assets/js'));
})

gulp.task('concatcss', function () {
    gulp.src('css/*.css').pipe(gulp.dest('assets/css'));
})


gulp.task('sass', function () {
    gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'))
});

gulp.task('minicss',['sass'], function () {
    gulp.src('css/*.css')
        //壓縮
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        //完成搬家
        .pipe(gulp.dest('css/mini/'));
});


