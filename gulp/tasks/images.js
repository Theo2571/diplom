export const images = () => {
    return gulp.src('src/img/**/*.{jpg,png,webp,svg,ico}')
        .pipe(gulp.dest('build/img'))
}
  