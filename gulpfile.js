const gulp = require('gulp');
const merge = require('merge-stream');
// const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const newer = require('gulp-changed');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const debug = require('gulp-debug');
const { lstatSync, readdirSync } = require('fs');
const { resolve } = require('path');

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
  readdirSync(source)
    .map(name => resolve(source, name))
    .filter(isDirectory);

process.env.NODE_ENV = 'production';

const compile = (glp, force) => {};

gulp.task('watch', () => {
  const force = false;
  const tasks = getDirectories('./typescript').map(p => {
    const src = resolve(p, 'src', '**/*');
    const dest = resolve(p, 'lib');
    return (
      watch(src, { ignoreInitial: false, dot: true })
        .pipe(plumber())
        .pipe(debug())
        .pipe(newer(dest, { extension: force ? '.xyz' : '.js' }))
        // .pipe(sourcemaps.init())
        .pipe(
          babel({
            presets: ['@babel/typescript']
          })
        )
        // .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dest))
    );
  });
  return merge(tasks);
});

gulp.task('build', () => {
  return compile(gulp.src(src));
});
