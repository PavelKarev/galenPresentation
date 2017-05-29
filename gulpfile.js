var gulp = require('gulp');
var path = require('path');
var gulpGalen = require('gulp-galen');

gulp.task('test', function(done) {
  return gulp
    .src('galen_test/start_test.test')
    .pipe(gulpGalen.test({
      'parallel-tests': 8,
      'htmlreport': path.resolve(__dirname, 'galen_test/reports/')
    }));
});

// gulp.task("test", function() {
//   gulp.src('galen_test/*.gspec').pipe(gulpGalen.check({
//     url: 'http://localhost:8080',
//     cwd: 'galen_test/'
//   }));
// });

gulp.task('watch', function() {
  gulp.watch('galen_test/*.gspec', ['test']);
});
