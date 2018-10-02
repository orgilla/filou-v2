import * as React from 'react';
import { createRenderer } from 'fela';
import { Provider as FelaProvider, ThemeProvider } from 'react-fela';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Tabs from '../src';

const getProvider = (theme = {}) => {
  const renderer = createRenderer();
  const Provider: React.SFC = ({ children }) => (
    <FelaProvider rehydrate renderer={renderer}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </FelaProvider>
  );
  return (storyFn: Function) => <Provider>{storyFn()}</Provider>;
};

(storiesOf('Components/Tabs', module) as any)
  .addDecorator((story: any, context: any) =>
    withInfo({ propTables: [Tabs, Tabs.Tab], inline: true })(story)(context)
  )
  .addDecorator((story: any, context: any) =>
    getProvider({ color: 'green' })(story)
  )
  .add('Basic', () => (
    <Tabs>
      <Tabs.Tab label="Hi">Content2</Tabs.Tab>
      <Tabs.Tab label="Hi 2">Content2</Tabs.Tab>
      <Tabs.Tab label="Hi 3">Content3</Tabs.Tab>
    </Tabs>
  ));

(storiesOf('Components/Tabs', module) as any)
  .addDecorator((story: any, context: any) =>
    withInfo({ propTables: [Tabs, Tabs.Tab], inline: true })(story)(context)
  )
  .addDecorator((story: any, context: any) =>
    getProvider({
      color: 'blue'
    })(story)
  )
  .add('Themed', () => (
    <Tabs>
      <Tabs.Tab label="Hi">Content2</Tabs.Tab>
      <Tabs.Tab label="Hi 2">Content2</Tabs.Tab>
      <Tabs.Tab label="Hi 3">Content3</Tabs.Tab>
    </Tabs>
  ));
