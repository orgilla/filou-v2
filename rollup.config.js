// import sourcemaps from 'rollup-plugin-sourcemaps';
import { camelCase } from 'lodash';
import nodeResolve from 'rollup-plugin-node-resolve';
const pkg = require(require('path').resolve(process.cwd(), './package.json'));

const convertName = name => camelCase(name.replace('@', '$').replace('/', '-'));
const globals = {
  '@filou/core': convertName('@filou/core'),
  '@filou/core2': convertName('@filou/core')
};

const onwarn = message => {
  const suppressed = ['UNRESOLVED_IMPORT', 'THIS_IS_UNDEFINED'];
  if (!suppressed.find(code => message.code === code)) {
    return console.warn(message.message);
  }
};

export default [
  {
    input: 'lib/es/index.js',
    output: [
      {
        file: 'lib/iife/index.js',
        format: 'iife',
        name: convertName(pkg.name),
        exports: 'named',
        globals
      }
    ],
    plugins: [
      nodeResolve({
        modulesOnly: true
      })
    ],
    external: [
      ...Object.keys(globals),
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],
    onwarn
  }
];
