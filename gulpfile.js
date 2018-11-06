const gulp = require('gulp');
const del = require('del');
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

const directories = getDirectories('./typescript');
process.env.NODE_ENV = 'production';

const compile = (glp, dest, modules, force) =>
  glp
    .pipe(plumber())
    .pipe(debug())
    .pipe(newer(dest, { extension: force ? '.xyz' : '.js' }))
    // .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: [
          [
            '@babel/env',
            {
              modules
            }
          ],
          '@babel/typescript'
        ],
        plugins: [
          [
            '@babel/plugin-transform-runtime',
            {
              regenerator: true
            }
          ],
          ['@babel/plugin-proposal-class-properties', { loose: false }]
        ]
      })
    )
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dest));

gulp.task('watch', () => {
  const force = false;
  const tasks = directories
    .map(p => {
      const src = resolve(p, 'src', '**/*.(ts|tsx)');
      const dest = resolve(p, 'es');
      return compile(
        watch(src, { ignoreInitial: false, dot: true }),
        dest,
        false
      );
    })
    .concat(
      directories.map(p => {
        const src = resolve(p, 'src', '**/*.(ts|tsx)');
        const dest = resolve(p, 'lib');
        return compile(
          watch(src, { ignoreInitial: false, dot: true }),
          dest,
          undefined
        );
      })
    );
  return merge(tasks);
});

gulp.task('clean', () => {
  return Promise.all([
    del(directories.map(x => resolve(x, 'lib'))),
    del(directories.map(x => resolve(x, 'es')))
  ]);
});

gulp.task('build', () => {
  return compile(gulp.src(src));
});
