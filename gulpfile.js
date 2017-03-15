'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    gulpIf = require('gulp-if'),
    inject = require('gulp-inject'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    transpile = require('gulp-es6-module-transpiler');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';


let options = {
    sassPath: './public/src/styles/styles.sass',
    vendorStylesPath: './public/src/styles/vendor.sass',
    fontawesomePath: './public/src/vendor/bower_components/components-font-awesome/fonts/*.*',
    fontawesomeDest: './public/production/assets/fonts/fontawesome',
    cssDest: './public/production/css',
    watchSass: './public/src/styles/**/*.sass',
    jsPath: './public/src/app/**.js',
    jsDest: './public/production/js'
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

gulp.task('js:build', function () {
    return gulp.src(['./public/src/app/app.js', './public/src/app/module/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(transpile({
            formatter: 'bundle'
        }))
        .pipe(gulp.dest(options.jsDest))
});

gulp.task('fonts:copy', function () {
    return gulp.src(options.fontawesomePath)
        .pipe(gulp.dest(options.fontawesomeDest))
});

gulp.task('styles:watch', function () {
    gulp.watch(options.watchSass, ['sass']);
});
