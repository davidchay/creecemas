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

var path = {
    src:{
        scss: {
            style: './dev/scss/style/**/*.scss',
            custom: './dev/scss/creecemas/**/*.scss'
        },
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

gulp.task('style', async function(){
	gulp.src(path.src.scss.style)
	.pipe(sass({
		 outputStyle:'expanded',
		 errLogToConsole: true
	}))
	.pipe(autoprefixer({
		version:['last 2']
	}))
	.pipe(concat('style.css'))
	.pipe(gulp.dest(path.dest.css))
	.pipe(connect.reload());

});

gulp.task('custom', async function(){
	gulp.src(path.src.scss.custom)
	.pipe(sass({
		 outputStyle:'expanded',
		 errLogToConsole: true
	}))
	.pipe(autoprefixer({
		version:['last 2']
	}))
	.pipe(concat('creecemas.css'))
	.pipe(gulp.dest(path.dest.css))
	.pipe(connect.reload());
});

gulp.task('html', async function () {
  gulp.src(path.src.html)
    .pipe(connect.reload());
});

gulp.task('connect', async function(){
    connect.server({
      root:'./dev/',
      port: 8080,
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

gulp.task('watch', async function() {
  gulp.watch(path.src.scss.style, gulp.series('style'));
  gulp.watch(path.src.scss.custom, gulp.series('custom'));
  gulp.watch(path.src.html, gulp.series('html'));
});

gulp.task('default', gulp.series('style','custom','html','connect','watch'));
