var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    cssmin = require('gulp-cssmin'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util');

var path={
    src:{
        scss:'./dev/scss/**/*.scss',
        html:'./dev/*.html',
        styles:'./dev/css/*.css',
        js:'./dev/js/*.js',
        img:'./dev/img/*'
    },
    dest:{
        css:'./dev/css/',
        img:'./dist/img/',
        styles:'./dist/css/',
        js:'./dist/js/'
    }
};

gulp.task('style',function(){
    gulp.src(path.src.scss)
    .pipe(sass({
         outputStyle:'expanded',
         errLogToConsole: true
    }))
    .pipe(autoprefixer({
        version:['last 2']
    }))
    .pipe(rename({
        basename: "style",
        extname: ".css"}))
    .pipe(gulp.dest(path.dest.css))
   .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src(path.src.html)
    .pipe(connect.reload());
});

gulp.task('connect',function(){
    connect.server({
      root:'./dev/',
      port: 8000,
      livereload:true
    });
});

gulp.task('dist',function(){
        gulp.src(path.src.styles)
        .pipe(cssmin())
        .pipe(gulp.dest(path.dest.styles));

        gulp.src(path.src.js)
        .pipe(uglify())
        .pipe(gulp.dest(path.dest.js));

        gulp.src(path.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(path.dest.img));
});

gulp.task('watch',function(){
  gulp.watch(path.src.scss,['style']);
  gulp.watch(path.src.html,['html']);
});

gulp.task('default',['style','html','connect','watch']);
