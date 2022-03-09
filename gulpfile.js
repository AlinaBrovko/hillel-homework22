const gulp = require("gulp");
const concat = require("gulp-concat");

function minCSS(cb) {
  gulp
    .src(["css/style.css", "node_modules/lightslider/src/css/lightslider.css"])
    .pipe(concat("style.min.css"))
    .pipe(gulp.dest("css/"))
    .pipe(sync.stream());
  cb();
}

exports.minCSS = minCSS;

const uglify = require("gulp-uglify");

function minJS(cb) {
  gulp
    .src([
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/lightslider/src/js/lightslider.js",
      "js/app.js",
    ])
    .pipe(concat("all.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("js/"));
  cb();
}

const sync = require("browser-sync").create();
function browserSync(cb) {
  sync.init({
    server: {
      baseDir: "./",
    },
  });

  gulp.watch("css/style.css.css", minCSS);
  gulp.watch(["js/app.js", "!node_modules/**"], minJS);
  gulp.watch("*.html").on("change", sync.reload);
}

exports.default = gulp.series(minCSS, minJS, browserSync);
