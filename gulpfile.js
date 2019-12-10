var gulp = require('gulp');

//Pluginsģ���ȡ
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
//ѹ��css
gulp.task('minify-css', function () {
return gulp.src('./public/**/*.css')
.pipe(minifycss())
.pipe(gulp.dest('./public'));
});
//ѹ��html
gulp.task('minify-html', function () {
return gulp.src('./public/**/*.html')
.pipe(htmlclean())
.pipe(htmlmin({
removeComments: true,
minifyJS: true,
minifyCSS: true,
minifyURLs: true,
}))

.pipe(gulp.dest('./public'))
});
//ѹ��js ��ѹ��min.js
gulp.task('minify-js', function () {
return gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
.pipe(uglify())
.pipe(gulp.dest('./public'));
});

//4.0��ǰ��д�� 
//gulp.task('default', [
  //  'minify-html', 'minify-css', 'minify-js'
//]);
//4.0�Ժ��д��
// ִ�� gulp ����ʱִ�е�����
gulp.task('default', gulp.parallel('minify-html', 'minify-css', 'minify-js', function() {
  // Do something after a, b, and c are finished.
}));