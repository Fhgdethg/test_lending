const { src, dest, series, parallel, watch } = require('gulp'),
  sass = require('gulp-sass')(require('sass')),
  plumber = require('gulp-plumber'),
  cleanCss = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  autoprefixer = require('gulp-autoprefixer'),
  htmlmin = require('gulp-htmlmin'),
  jsmin = require('gulp-jsmin'),
  sync = require('browser-sync').create();


function sassCompiler() {
  sync.init({
    server: './src'
  })
  watch(['./src/*.html', './src/scss/*.scss', './src/js/*.js']).on('change', sync.reload)

  watch('./src/scss/style.scss', { delay: 300 }, () => {

    console.log('hello')
    return src('./src/scss/style.scss')
      .pipe(plumber())
      .pipe(sass().on('error', sass.logError))
      .pipe(cleanCss())
      .pipe(rename({ suffix: '.min' }))
      .pipe(dest('./src/css/'))
  })
}
exports.sassCompiler = sassCompiler;


function htmlMinifyToDist() {
  return src('./src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./dist/'))
}
function replaceCssToDist() {
  return src('./src/css/*.css')
    .pipe(dest('./dist/css/'))
}
function jsMinifyToDist() {
  return src('./src/js/*.js')
    .pipe(jsmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('./dist/js/'))
}
function replaceImgsToDist() {
  return src('./src/img/**')
    .pipe(plumber())
    .pipe(dest('./dist/img/'))
}
function replaceFontsToDist() {
  return src('./src/fonts/**')
    .pipe(plumber())
    .pipe(dest('./dist/fonts/'))
}
function replaceProjectLogo() {
  return src('./src/*.ico')
    .pipe(plumber())
    .pipe(dest('./dist/'))
}

exports.goToDist = series(htmlMinifyToDist, replaceCssToDist, jsMinifyToDist, replaceImgsToDist, replaceFontsToDist, replaceProjectLogo);