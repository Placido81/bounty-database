var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy)({
    remoteUrl:"https://placido81.github.io/bounty-database/",
    branch: "master"
})
});