export const fonts = () => {
  return gulp.src('src/fonts/**/*.{eot,svg,ttf,woff,woff2}')
        .pipe(gulp.dest('build/fonts'))
}
