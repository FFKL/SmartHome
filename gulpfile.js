'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    gulpIf = require('gulp-if'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate'),
    selfinvoker = require('gulp-selfinvoker'),
    babel = require('gulp-babel'),
    clean = require('gulp-clean');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
const bowerComponentsRoot = './public/src/vendor/bower_components/';

let path = {
    styles: {
        src: './public/src/styles/styles.sass',
        dest: './public/production/css',
        watch: './public/src/styles/**/*.sass',
        vendor: './public/src/styles/vendor.sass'
    },
    js: {
        src: ['./public/src/app/app.module.js', './public/src/app/**/*.js'],
        dest: './public/production/js',
        watch: './public/src/app/**/*.js',
        vendor: [`${bowerComponentsRoot}/jquery/dist/jquery.min.js`,
            `${bowerComponentsRoot}/angular/angular.min.js`,
            `${bowerComponentsRoot}/angular-route/angular-route.min.js`,
            `${bowerComponentsRoot}/angular-cookies/angular-cookies.min.js`,
            `${bowerComponentsRoot}/angular-animate/angular-animate.min.js`,
            `${bowerComponentsRoot}/angular-smart-table/dist/smart-table.min.js`,
            `${bowerComponentsRoot}/ngstorage/ngStorage.min.js`,
            `${bowerComponentsRoot}/javascript-detect-element-resize/jquery.resize.js`,
            `${bowerComponentsRoot}/angular-gridster/dist/angular-gridster.min.js`,
            `${bowerComponentsRoot}/v-accordion/dist/v-accordion.min.js`,
            `${bowerComponentsRoot}/moment/min/moment.min.js`,
            `${bowerComponentsRoot}/d3/d3.js`,
            `${bowerComponentsRoot}/angular-moment/angular-moment.min.js`]
    },
    html: {
        src: './public/src/app/**/*.html',
        dest: './public/production/templates'
    },
    fonts: {
        src: './public/src/vendor/bower_components/components-font-awesome/fonts/*.*',
        dest: './public/production/assets/fonts/fontawesome'
    }
};

gulp.task('styles-vendor:build', () => {
    return gulp.src(path.styles.vendor)
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest(path.styles.dest));
});

gulp.task('styles-app:build', () => {
    return gulp.src(path.styles.src)
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(autoprefixer())
        .pipe(rename('main.css'))
        .pipe(gulp.dest(path.styles.dest));
});

gulp.task('js-vendor:build', () => {
    return gulp.src(path.js.vendor)
        .pipe(concat('vendor.js'))
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(path.js.dest))
});

gulp.task('js-app:build', () => {
    return gulp.src(path.js.src)
        .pipe(concat('app.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(selfinvoker())
        .pipe(ngAnnotate())
        .pipe(gulp.dest(path.js.dest))
});

gulp.task('html:copy', () => {
    return gulp.src(path.html.src)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(path.html.dest))
});

gulp.task('fonts:copy', () => {
    return gulp.src(path.fonts.src)
        .pipe(gulp.dest(path.fonts.dest))
});

gulp.task('styles:watch', () => {
    gulp.watch(path.styles.watch, ['styles-app:build']);
});

gulp.task('js:watch', () => {
    gulp.watch(path.js.watch, ['js-app:build'])
});

gulp.task('html:watch', () => {
    gulp.watch(path.html.src, ['html:copy'])
});

gulp.task('js:clean', () => {
    gulp.src(path.js.dest, {read: false})
        .pipe(clean())
});
gulp.task('styles:clean', () => {
    gulp.src(path.styles.dest, {read: false})
        .pipe(clean())
});
gulp.task('html:clean', () => {
    gulp.src(path.html.dest, {read: false})
        .pipe(clean())
});

gulp.task('clean', ['styles:clean', 'js:clean', 'html:clean']);
gulp.task('watch', ['styles:watch', 'js:watch', 'html:watch']);
gulp.task('build', ['styles-vendor:build', 'styles-app:build', 'js-vendor:build', 'js-app:build', 'fonts:copy', 'html:copy']);
gulp.task('default', ['clean', 'build', 'watch']);