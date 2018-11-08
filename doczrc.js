import { css } from 'docz-plugin-css';

export default {
  title: 'Filou',
  typescript: true,
  plugins: [
    css({
      preprocessor: 'postcss',
      cssmodules: false
    })
  ]
};
