// import sourcemaps from 'rollup-plugin-sourcemaps';
// import resolve from 'rollup-plugin-node-resolve';
const pkg = require(require('path').resolve(process.cwd(), './package.json'));

const globals = {
  react: 'React',
  // '@filou/core': 'filou.core',
  '@blueprintjs/core': 'blueprintjs.core',
  '@blueprintjs/select': 'blueprintjs.select'
};

const onwarn = message => {
  const suppressed = ['UNRESOLVED_IMPORT', 'THIS_IS_UNDEFINED'];
  if (!suppressed.find(code => message.code === code)) {
    return console.warn(message.message);
  }
};

export default [
  {
    input: 'lib/index.js',
    output: [
      {
        file: 'lib/index.main.js',
        format: 'cjs',
        exports: 'named'
      },
      {
        file: 'lib/index.browser.js',
        format: 'iife',
        name: 'iloublueprint',
        exports: 'named'
      }
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],
    onwarn
  }
];
