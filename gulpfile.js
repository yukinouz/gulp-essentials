const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssdeclsort = require('css-declaration-sorter');

const compileSass = (done) => {
  src('./src/scss/**/*.scss', { sourcemaps: true })
    .pipe(
      plumber({ errorHandler: notify.onError('Error: <%= error.message %>') })
    )
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(postcss([autoprefixer(
      {
        grid: "autoplace",
        cascade: false
      }
    )]))
    .pipe(postcss([cssdeclsort({ order: 'alphabetical' })]))
    .pipe(dest('./dist/css', { sourcemaps: './sourcemaps' }));
  done();
};

module.exports = {
  sass: compileSass,
};