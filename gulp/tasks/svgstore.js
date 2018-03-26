const gulp = require("gulp");
const config = require("../config").svgstore;
const svgstore = require("gulp-svgstore");
const svgmin = require("gulp-svgmin");
const cheerio = require("gulp-cheerio");
const path = require("path");

gulp.task("svgstore", function() {
  return gulp
    .src(config.files_src_svg_sprites)
    .pipe(
      svgmin(function(file) {
        var prefix = path.basename(file.relative, path.extname(file.relative));
        return {
          plugins: [
            {
              cleanupIDs: {
                prefix: prefix + "-",
                minify: true
              }
            }
          ]
        };
      })
    )
    .pipe(
      cheerio({
        run: function($) {
          $("[fill]").removeAttr("fill");
          $("[stroke]").removeAttr("stroke");
        },
        parserOptions: { xmlMode: true }
      })
    )
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(gulp.dest(config.dest));
});
