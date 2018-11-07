import * as fs from 'fs-extra';
import { join } from 'path';
import * as minimist from 'minimist';
import { template as temp } from 'lodash';

const argv = minimist(process.argv.slice(2));

const props = {
  name: '',
  root: process.cwd()
};
if (argv.folder) {
  props.root = join(process.cwd(), 'typescript', argv.folder);
}
let packageJSON: any = { name: '' };
if (fs.existsSync(join(props.root, 'package.json'))) {
  packageJSON = fs.readJSONSync(join(props.root, 'package.json'));
}
if (argv.name) {
  props.name = argv.name;
} else if (packageJSON.name) {
  props.name = packageJSON.name;
}

const destination = (p: string) => join(props.root, p);
const template = (p: string) => join(__dirname, 'template', p);

let json = {};
if (packageJSON) {
  json = {
    name: packageJSON.name,
    gitHead: packageJSON.gitHead,
    version: packageJSON.version,
    dependencies: packageJSON.dependencies,
    devDependencies: packageJSON.devDependencies,
    peerDependencies: packageJSON.peerDependencies
  };
}

fs.writeFileSync(destination('config'), fs.readFileSync(template('config')));
fs.writeFileSync(
  destination('README.md'),
  temp(fs.readFileSync(template('README.md'), { encoding: 'utf8' }))(props)
);
fs.writeFileSync(
  destination('.npmignore'),
  fs.readFileSync(template('.npmignore'))
);
fs.writeJsonSync(
  destination('package.json'),
  Object['assign'](
    JSON.parse(
      temp(fs.readFileSync(template('package.json'), { encoding: 'utf8' }))(
        props
      )
    ),
    json
  ),
  { spaces: 2 }
);
if (!fs.existsSync(destination('src'))) {
  fs.createFileSync(destination('src/index.ts'));
}
