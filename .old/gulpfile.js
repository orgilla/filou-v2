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
const { resolve, join } = require('path');
// const ts = require('gulp-typescript');

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
  readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory);

const directories = getDirectories('./typescript');
process.env.NODE_ENV = 'production';

const compileBabel = (glp, dest, modules, force) =>
  glp
    .pipe(plumber())
    .pipe(debug({ title: 'Babel' }))
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

/*const compileTS = (glp, src, dest, force) => {
  console.log(src, join(__dirname, src, 'tsconfig.json'));
  const tsProject = ts.createProject(join(__dirname, src, 'tsconfig.json'));
  return glp
    .pipe(plumber())
    .pipe(debug({ title: 'Building' }))
    .pipe(tsProject())
    .pipe(debug({ title: 'Definition' }))
    .pipe(gulp.dest(dest + '/'));
};*/

gulp.task('watch', () => {
  const force = false;
  const tasks = directories.map(p => {
    const src = join(p, 'src', '**/*');
    const es = join(p, 'es');
    const lib = join(p, 'lib');
    // const types = join(p, 'typings');
    const opt = { ignoreInitial: false, dot: true, cwd: __dirname };
    // return compileTS(watch(src, opt), p, types);
    return merge([
      compileBabel(watch(src, opt), es, false),
      compileBabel(watch(src, opt), lib)
    ]);
  });
  return merge(tasks);
});

gulp.task('clean', () => {
  return Promise.all([
    del(directories.map(x => resolve(x, 'lib'))),
    del(directories.map(x => resolve(x, 'es'))),
    del(directories.map(x => resolve(x, 'typings')))
  ]);
});

gulp.task('build', () => {
  const tasks = directories.map(p => {
    const src = join(p, 'src', '**/*');
    const es = join(p, 'es');
    const lib = join(p, 'lib');
    return merge([
      compileBabel(gulp.src(src), es, false),
      compileBabel(gulp.src(src), lib)
    ]);
  });
  return merge(tasks);
});
