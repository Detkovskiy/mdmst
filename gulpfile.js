"use strict";

const gulp = require("gulp");
const server = require("browser-sync").create();

const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const minify = require("gulp-csso");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const run = require("run-sequence");
const del = require("del");
const uglify = require("gulp-uglify");

gulp.task("serve", function() {
  server.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch("*.html").on("change", server.reload);
  gulp.watch("css/!**!/!*.css").on("change", server.reload);
  gulp.watch("js/!**!/!*.js").on("change", server.reload);

});
