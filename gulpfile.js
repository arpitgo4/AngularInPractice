var  gulp = require('gulp');
var browserSync = require('browser-sync');
var gulpWatch = require('gulp-watch');

gulp.task('serve', ['browser-sync'], function(){
  gulpWatch('./css/*').on('change', browserSync.reload);
  gulpWatch('./js/**/*').on('change', browserSync.reload);
  gulpWatch('./html/*').on('change', browserSync.reload);
});

gulp.task('browser-sync', function(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('default', ['serve']);
