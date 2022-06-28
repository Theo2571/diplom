import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);
import autoPrefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";

export const styles = () => {
  return gulp
    .src("src/scss/**/*.{sass,scss}")
    .pipe(sass())
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(autoPrefixer("last 3 versions"))
    .pipe(gulp.dest("build/css"))
    .pipe(browserSync.stream());
};
