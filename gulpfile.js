const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
const cleanCss = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
var jsLocalPath = require('./assets/js/main.js');
let buildPath = '';

const jsBuild = () => {
    return src(jsLocalPath.jsPath)
        .pipe(gulpif(buildPath == '', sourcemaps.init()))
        .pipe(concat('code.js'))
        .pipe(gulpif(buildPath == '', sourcemaps.write()))
        .pipe(gulpif(buildPath != '', uglify()))
        .pipe(dest(buildPath + 'assets/js/'))
}

const cssBuild = () => {
    return src('assets/css/style.scss')
        .pipe(gulpif(buildPath == '', sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(buildPath == '', sourcemaps.write()))
        .pipe(gulpif(buildPath != '', cleanCss()))
        .pipe(rename('main.css'))
        .pipe(dest(buildPath + 'assets/css/'))
}

const browserRefresh = () => {
    return browserSync.reload();
}

function start(cb) {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    series(jsBuild, cssBuild)();
    watch(['assets/js/*.js', '!assets/js/code.js'], (cb) => {
        series(jsBuild, browserRefresh)();
        cb();
    });
    watch('assets/css/*.scss', (cb) => {
        series(cssBuild, browserRefresh)();
        cb();
    });
    watch('./*.html', (cb) => {
        browserRefresh();
        cb();
    });
    cb();
}

function build(cb) {
    buildPath = 'build/';
    series(jsBuild, cssBuild)();
    src(['assets/**/*', '!assets/css/*', '!assets/js/*'])
        .pipe(dest(buildPath + 'assets'));
    src('*.html')
        .pipe(dest(buildPath));
    cb();
}

exports.start = start;
exports.default = start;
exports.build = build;