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
    jsonminify = require('gulp-jsonminify');

var path = {
    src:{
        scss: {
            style: './dev/scss/style/**/*.scss',
            custom: './dev/scss/creecemas/**/*.scss'
        },
        html:'./dev/*.html',
        styles:'./dev/css/*.css',
        js:'./dev/js/*.js',
        img:'./dev/img/*.*',
        fonts: './dev/fonts/*.*'
    },
    dest:{
        css:'./dist/css/',
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

gulp.task('server-dist', async function(){
	connect.server({
		root:'./dist/',
		port:8000,
		livereload:true
	});
});

gulp.task('dist', async function(){
        console.log('Iniciando...');
        console.log('inicio estilos css');
        gulp.src(path.src.styles)
        .pipe(cssmin())
        .pipe(gulp.dest(path.dest.styles));
        console.log('termino estilos css');

        console.log('inicio script js');
        gulp.src(path.src.js)
        .pipe(uglify())
        .pipe(gulp.dest(path.dest.js));
        console.log('termino script js');

        console.log('inicio img  png, jpg');
        gulp.src(['./dev/img/*.png', './dev/img/*.jpg'])
        .pipe(imagemin())
        .pipe(gulp.dest(path.dest.img));
        console.log('termino img png, jpg');
        
        console.log('inicio img  html');
        gulp.src('./dev/img/*.html')
        .pipe(gulp.dest(path.dest.img));
        console.log('termino img  html');

        console.log('inicio fonts ');
        gulp.src('./dev/fonts/**/*.*')
        .pipe(gulp.dest('./dist/fonts/'));
        console.log('termino fonts');
        
        console.log('inicio  data json');
        gulp.src('./dev/data/*.json')
        .pipe(jsonminify())
        .pipe(gulp.dest('./dist/data/'));
        console.log('termino data json');

        console.log('inicio templates hbs');
        gulp.src('./dev/templates/*.hbs')
        .pipe(gulp.dest('./dist/templates/'));
        console.log('termino templates hbs');
        
        console.log('inicio html, php, xml, robot.txt .htaccess');
        gulp.src(['./dev/*.html', './dev/*.xml', './dev/*.txt', './dev/.htaccess', './dev/*.php'])
        .pipe(gulp.dest('./dist/'));
        console.log('termino html, php, xml, robot.txt .htaccess');
        
        console.log('inicio images favicon, png, jpg');
        gulp.src(['./dev/*.png', './dev/*.jpg', './dev/*.ico'])
        .pipe(gulp.dest('./dist/'));
        console.log('termino images favicon, png, jpg');
        
        console.log('inicio download');
        gulp.src('./dev/download/*.*')
        .pipe(gulp.dest('./dist/download/'));
        console.log('termino download');

        console.log('...completado');
});

gulp.task('watch', async function() {
  gulp.watch(path.src.scss.style, gulp.series('style'));
  gulp.watch(path.src.scss.custom, gulp.series('custom'));
  gulp.watch(path.src.html, gulp.series('html'));
});

gulp.task('default', gulp.series('style','custom','html','connect','watch'));
