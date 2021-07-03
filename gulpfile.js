const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const compileSass = (done) => {
  src('./src/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(dest('./dist/css'));
  done();
};

module.exports = {
  sass: compileSass,
};