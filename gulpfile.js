const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
const cleanCss = require('gulp-clean-css');
let buildPath = '';

const jsBuild = () => {
    return src([
        './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
        'assets/js/tilt.js',
        './node_modules/typewriter-effect/dist/core.js',
        './node_modules/gsap/dist/gsap.min.js',
        './node_modules/gsap/dist/ScrollTrigger.min.js',
        'assets/js/ScrollSmoother.js',
        'assets/js/numberIncrement.js',
        'assets/js/splitType.js',
        'assets/js/custom.js',
        'assets/js/landingAnimation.js'
    ])
        .pipe(gulpif(buildPath == '', sourcemaps.init()))
        .pipe(concat('main.js'))
        .pipe(gulpif(buildPath == '', sourcemaps.write()))
        .pipe(gulpif(buildPath != '', uglify()))
        .pipe(dest(buildPath + 'assets/js/'));
}

const cssBuild = () => {
    return src('assets/css/style.scss')
        .pipe(gulpif(buildPath == '', sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(buildPath == '', sourcemaps.write()))
        .pipe(gulpif(buildPath != '', cleanCss()))
        .pipe(rename('main.css'))
        .pipe(dest(buildPath + 'assets/css/'));
}

function start(cb) {
    series(jsBuild, cssBuild)();
    watch(['assets/js/*.js', '!assets/js/main.js'], (cb) => {
        jsBuild();
        cb();
    });
    watch('assets/css/*.scss', (cb) => {
        cssBuild();
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