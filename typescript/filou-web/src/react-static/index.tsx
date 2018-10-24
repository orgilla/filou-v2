import * as React from 'react';
import { Provider } from '@filou/core';
import { Document } from 'filou-web';
const { renderToSheetList } = require('fela-dom');

export const createReactStaticConfig = (config: any) => ({
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  webpack: (config: any, { defaultLoaders }: any) => {
    // Add TypeScript Path Mappings (from tsconfig via webpack.config.js)
    // to react-statics alias resolution
    if (Array.isArray(config.entry)) {
      config.entry[config.entry.length - 1] = config.entry[
        config.entry.length - 1
      ].replace('.js', '.tsx');
    } else {
      config.entry = config.entry.replace('.js', '.tsx');
    }
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules[0].oneOf[0].test = /\.(js|jsx|ts|tsx)$/;
    config.module.rules[0].oneOf[1].test = /\.(js|jsx|ts|tsx)$/;
    return config;
  },
  Document: (props: any) => <Document {...props} />,
  beforeRenderToElement: (App: any, { meta }: any) => {
    meta.renderer = config.createFelaRenderer();
    return (props: any) => (
      <Provider renderer={meta.renderer}>
        <App {...props} />
      </Provider>
    );
  },
  renderToHtml: (render: any, Comp: any, { meta }: any) => {
    const html = render(Comp);
    meta.sheetList = renderToSheetList(meta.renderer);
    return html;
  },
  ...config
});
