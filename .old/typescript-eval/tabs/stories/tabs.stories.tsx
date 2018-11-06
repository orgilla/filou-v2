import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Provider, ThemeProvider } from '@filou/core';

import Tabs from '../src';

(storiesOf('Components/Tabs', module) as any)
  .addDecorator((story: any, context: any) =>
    withInfo({
      propTables: [Tabs, Tabs.Tab],
      inline: true,
      header: false
    })(story)(context)
  )
  .addDecorator((stories: any) => <Provider>{stories()}</Provider>)
  .add('Basic', () => (
    <Tabs>
      <Tabs.Tab label="Hi">Content2</Tabs.Tab>
      <Tabs.Tab label="Hi 2">Content2</Tabs.Tab>
      <Tabs.Tab label="Hi 3">Content3</Tabs.Tab>
    </Tabs>
  ))
  .add('Themed', () => (
    <ThemeProvider theme={{ color: 'blue' }}>
      <Tabs>
        <Tabs.Tab label="Hi">Content2</Tabs.Tab>
        <Tabs.Tab label="Hi 2">Content2</Tabs.Tab>
        <Tabs.Tab label="Hi 3">Content3</Tabs.Tab>
      </Tabs>
    </ThemeProvider>
  ));
