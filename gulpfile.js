const { src, dest, watch, series, parallel }  = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssdeclsort = require('css-declaration-sorter');
const gcmq = require('gulp-group-css-media-queries');
const mode = require('gulp-mode')();
const browserSync = require('browser-sync');

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
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(postcss(postcssPlugins))
    .pipe(mode.production(gcmq()))
    .pipe(dest('./dist/css', { sourcemaps: './sourcemaps' }));
  done();
};

const buildServer = (done) => {
  browserSync.init({
    port: 8080,
    files: ["**/*"],
    // 静的サイト
    server: { baseDir: './' },
    // 動的サイト
    // proxy: "http://localsite.local/",
    open: true,
    watchOptions: {
      debounceDelay: 1000,
    },
  });
  done();
};

const browserReload = done => {
  browserSync.reload();
  done();
};

const watchFiles = () => {
  watch( './src/scss/**/*.scss', series(compileSass, browserReload))
  watch('./**/*.html', browserReload)
};

module.exports = {
  sass: compileSass,
  default: parallel(buildServer, watchFiles),
};