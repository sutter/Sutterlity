const gulp = require("gulp");
const runSequence = require("run-sequence");

gulp.task("build", callback => {
  runSequence(
    "clean",
    "svg",
    "svgstore",
    ["styles", "templates", "images", "rootfiles", "fonts"],
    callback
  );
});
