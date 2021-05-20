const { src, dest } = require('gulp');
const Fiber = require('fibers');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssdeclsort = require('css-declaration-sorter');
const gcmq = require('gulp-group-css-media-queries');

sass.compiler = require('sass'); // dart sassを使う

const compileSass = (done) => {
  const postcssPlugins = [
    autoprefixer({
      grid: "autoplace",
      cascade: false,
    }),
    cssdeclsort({ order: 'alphabetical' })
  ];
  src('./src/scss/**/*.scss', { sourcemaps: true })
    .pipe(
      plumber({ errorHandler: notify.onError('Error: <%= error.message %>') })
    )
    .pipe(sass({
      fiber: Fiber,
      outputStyle: 'expanded'
    }))
    .pipe(postcss(postcssPlugins))
    .pipe(gcmq())
    .pipe(dest('./dist/css', { sourcemaps: './sourcemaps' }));
  done();
};

module.exports = {
  sass: compileSass,
};