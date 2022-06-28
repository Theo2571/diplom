
export const server = () => {
  return browserSync.init({
    server: 'build'
  })
}
