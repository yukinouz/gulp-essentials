const { src, dest } = require('gulp');
const Fiber = require('fibers');
const sass = require('gulp-sass');

sass.compiler = require('sass'); // dart sassを使う

const compileSass = (done) => {
  src('./src/scss/**/*.scss')
    .pipe(sass({
      fiber: Fiber,
      outputStyle: 'expanded'
    }))
    .pipe(dest('./dist/css'));
  done();
};

module.exports = {
  sass: compileSass,
};