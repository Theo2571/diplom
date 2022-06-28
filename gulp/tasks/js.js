import babel from 'gulp-babel';
import webpack from 'webpack-stream';

export const scripts = () => {
  return gulp
    .src(["src/js/*.js", "!src/js/jquery.min.js"])
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(
      webpack({
        mode: "development",
      })
    )
    .pipe(gulp.dest("build/js"))
    .pipe(browserSync.stream());
};

export const jquery = () => {
  return gulp.src('src/js/jquery.min.js')
        .pipe(gulp.dest('build/js'))
}

