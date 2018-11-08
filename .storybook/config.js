import { configure } from '@storybook/react';
import { setAddon, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
// import { withKnobs, select } from '@storybook/addon-knobs/react';
// addDecorator(withKnobs);
setAddon(JSXAddon);

const loadFoalder = req => {
  req.keys().forEach(filename => req(filename));
};
// automatically import all files ending in *.stories.js
function loadStories() {
  require('./welcome');
  loadFoalder(require.context(`../filou`, true, /.stories.tsx$/));
  loadFoalder(require.context(`../filou-blueprint`, true, /.stories.tsx$/));
}

configure(loadStories, module);
