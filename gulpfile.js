'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    gulpIf = require('gulp-if'),
    inject = require('gulp-inject'),
    mainBowerFiles = require('main-bower-files'),
    naturalSort = require('gulp-natural-sort'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';


let options = {
    sassPath: './public/src/styles/styles.sass',
    vendorStylesPath: './public/src/styles/vendor.sass',
    fontawesomePath: './public/src/libs/components-font-awesome/fonts/*.*',
    fontawesomeDest: './public/production/assets/fonts/fontawesome',
    cssDest: './public/production/css',
    watchSass: './public/src/styles/**/*.sass'
};

gulp.task('vendor-styles', function () {
    return gulp.src(options.vendorStylesPath)
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest(options.cssDest));
});

gulp.task('sass', function () {
    return gulp.src(options.sassPath)
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(autoprefixer())
        .pipe(rename('main.css'))
        .pipe(gulp.dest(options.cssDest));
});

gulp.task('fonts:copy', function () {
    return gulp.src(options.fontawesomePath)
        .pipe(gulp.dest(options.fontawesomeDest))
});

gulp.task('styles:watch', function () {
    gulp.watch(options.watchSass, ['sass']);
});

// gulp.task('libs', ['css-libs', 'js-libs']);

/*gulp.task('css-libs', function () {
 return gulp.src(mainBowerFiles('**!/!*.css'))
 .pipe(gulp.dest('./public/production/css/libs'))
 });

 gulp.task('js-libs', function () {
 return gulp.src(mainBowerFiles('**!/!*.js'))
 .pipe(gulp.dest('./public/production/js/libs'))
 });*/

/*gulp.task('inject', function () {
 let sourcesLibsCss = gulp.src(['./public/production/css/libs/!*.css'], {read: false});
 let sources = gulp.src(['./public/production/js/!**!/!*.js', './public/production/css/!*.css'], {read: false});

 return gulp.src('./public/production/index.html')
 .pipe(inject(sourcesLibsCss, {relative: true, name: 'libs'}))
 .pipe(inject(sources, {relative: true}))
 .pipe(gulp.dest('./public/production'));
 });*/