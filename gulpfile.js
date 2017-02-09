//require variables

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync').create();
var imagemin    = require('gulp-imagemin');
var cache       = require('gulp-cache');
var jade        = require('gulp-jade');
var concat      = require('gulp-concat');
var prefixer    = require('gulp-autoprefixer');

//
//tasks
//

//scss compiler
gulp.task('sass', function(){
    return gulp.src('src/*.scss')
        .pipe(sass()) //gulp-sass
        .pipe(gulp.dest('dist/css/'))
        .pipe(browserSync.reload({
            stream: false
        }))
});

// autoprefix compiled css

// this needs work lol

// gulp.task('prefix', function(){
//     return gulp.src('dist/css/*.css')
//     .pipe(prefixer({
//         browser: ['last 2 versions'],
//         cascade: true
//     }))
//     .pipe(gulp.dest('dist/css/*+_prefixed.css'))
// });

//jade compiler

gulp.task('jade', function(){
    return gulp.src('src/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

//browser-sync

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
});

//image optimization

gulp.task('images', function(){
    return gulp.src('src/*.+(png|jpg|svg)')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
});

//image caching

gulp.task('cache', function(){
    return gulp.src('src/**/*.+(png|jpg|svg)')
    .pipe(cache(imagemin({
        interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
});

//js concat
gulp.task('js-concat',function(){
    return gulp.src('src/script/*.js')
    .pipe(concat('web.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

//
//watch
//


gulp.task('watch', ['browserSync', 'sass', 'cache', 'jade', 'js-concat'], function(){
    gulp.watch('src/**/*.scss', ['sass']);
    gulp.watch('src/**/*.jade', ['jade']);
    gulp.watch('src/**/*.js', ['js-concat']);
})