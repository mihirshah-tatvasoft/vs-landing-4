/*
 * Simple GULP tooling
 */
const gulp = require("gulp");
const sass = require('gulp-sass');
const prefix = require("gulp-autoprefixer");
const minify = require("gulp-clean-css");
const rename = require("gulp-rename");

gulp.task("watch", function () {
  gulp
    .src("./assets/css/scss/*.scss")
    .pipe(sass())
    .pipe(prefix())
    .pipe(minify())
    .pipe(
      rename(function (path) {
        return {
          dirname: path.dirname + "",
          basename: path.basename + ".min",
          extname: ".css",
        };
      })
    )
    .pipe(gulp.dest("./assets/css"));
});

gulp.task("open", function () {
  // gulp.src("./index.html").pipe(open());
});

gulp.task("default", gulp.parallel("open", "watch"));
