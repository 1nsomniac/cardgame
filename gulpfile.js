var gulp = require('gulp');
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  concat = require('gulp-concat'),
  del = require('del'),
  print = require('gulp-print'),
  uglify = require('gulp-uglify'),
  babel = require('gulp-babel');

var CacheBuster = require('gulp-cachebust');
var cachebust = new CacheBuster();

gulp.task('cleanUp', function(cb) {
  del([
    'dist'
  ], cb)
})

gulp.task('sayhello', function(){
  console.log('hey everybody')
})

gulp.task('holla', function (){
  console.log('back')
})

gulp.task ('build-css', function(){
  gulp.src('./styles/*')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cachebust.resources())
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('build', ['build-css', 'build-js'], function(){
  return gulp.src('index.html')
    .pipe(cachebust.references())
    .pipe(gulp.dest('dist'));
})

gulp.task('watch', function(){
  return gulp.watch(['./index.html','/partials/*.html','./styles/*.*css', 'js./**/*.js'], ['build']);
})

gulp.task('build-js', function() {
   return gulp.src('js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(print())
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('bundle.js'))
      //.pipe(uglify())
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('./dist/js'));
});
