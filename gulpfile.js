const { src, dest } = require('gulp');
const Fiber = require('fibers');
const sass = require('gulp-sass');

sass.compiler = require('sass'); // dart sassを使う

const compileSass = (done) => {
  src('./src/scss/**/*.scss', { sourcemaps: true })
    .pipe(sass({
      fiber: Fiber,
      outputStyle: 'expanded'
    }))
    .pipe(dest('./dist/css', { sourcemaps: './sourcemaps' }));
  done();
};

module.exports = {
  sass: compileSass,
};