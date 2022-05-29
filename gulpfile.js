const gulp = require("gulp");
const sass = require("gulp-sass")(require("dart-sass"));

gulp.task("sass", function () {
  return gulp.src("sass/main.scss").pipe(sass()).pipe(gulp.dest("styles"));
});

gulp.task("watch", function () {
  gulp.watch("sass/**/*.scss", gulp.series("sass"));
});
