import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { createRenderer, Provider, ThemeProvider } from '@filou/core';

import Ribbon from '../src';

(storiesOf('Components/Ribbon', module) as any)
  .addDecorator((story: any, context: any) =>
    withInfo({
      inline: true,
      header: false
    })(story)(context)
  )
  .addDecorator((stories: any) => (
    <Provider renderer={createRenderer()}>{stories()}</Provider>
  ))
  .add('Mac (Maximized)', () => (
    <Ribbon width="100%" height="500px">
      <Ribbon.Title maximized os={Ribbon.OSStyle.MAC} brand="Mac Ribbon">
        <Ribbon.Item>Left Item</Ribbon.Item>
        <Ribbon.Divider />
        <Ribbon.Item>Left Item</Ribbon.Item>
        <Ribbon.Item>Left Item</Ribbon.Item>
        <Ribbon.Space />
        <Ribbon.Item>Right Item</Ribbon.Item>
      </Ribbon.Title>
      <Ribbon.Actions title="Actions">
        <Ribbon.Item>Hallo</Ribbon.Item>
        <Ribbon.Divider />
        <Ribbon.Item>Hallo</Ribbon.Item>
        <Ribbon.Space />
      </Ribbon.Actions>
    </Ribbon>
  ))
  .add('Mac', () => (
    <Ribbon width="800px" height="500px">
      <Ribbon.Title os={Ribbon.OSStyle.MAC} brand="Mac Ribbon">
        <Ribbon.Item>Left Item</Ribbon.Item>
        <Ribbon.Space />
        <Ribbon.Item>Right Item</Ribbon.Item>
      </Ribbon.Title>
      <Ribbon.Actions>
        <Ribbon.Item>Hallo</Ribbon.Item>
        <Ribbon.Space />
      </Ribbon.Actions>
    </Ribbon>
  ))
  .add('Windows (Maximized)', () => (
    <Ribbon maximized width="100%" height="500px">
      <Ribbon.Title maximized os={Ribbon.OSStyle.WIN} brand="Windows Ribbon">
        <Ribbon.Item>Left Item</Ribbon.Item>
        <Ribbon.Space />
        <Ribbon.Item>Right Item</Ribbon.Item>
      </Ribbon.Title>
      <Ribbon.Actions>
        <Ribbon.Item>Hallo</Ribbon.Item>
        <Ribbon.Space />
      </Ribbon.Actions>
    </Ribbon>
  ))
  .add('Windows', () => (
    <Ribbon width="800px" height="500px">
      <Ribbon.Title os={Ribbon.OSStyle.WIN} brand="Windows Ribbon">
        <Ribbon.Item>Left Item</Ribbon.Item>
        <Ribbon.Space />
        <Ribbon.Item>Right Item</Ribbon.Item>
      </Ribbon.Title>
      <Ribbon.Actions>
        <Ribbon.Item>Hallo</Ribbon.Item>
        <Ribbon.Space />
      </Ribbon.Actions>
    </Ribbon>
  ))
  .add('Themed', () => (
    <ThemeProvider theme={{ color: '#666' }}>
      <Ribbon width="800px" height="500px">
        <Ribbon.Title os={Ribbon.OSStyle.WIN} brand="Windows Ribbon">
          <Ribbon.Item>Left Item</Ribbon.Item>
          <Ribbon.Divider />
          <Ribbon.Item>Left Item</Ribbon.Item>
          <Ribbon.Item>Left Item</Ribbon.Item>
          <Ribbon.Space />
          <Ribbon.Item>Right Item</Ribbon.Item>
        </Ribbon.Title>
        <Ribbon.Actions title="Actions">
          <Ribbon.Item>Hallo</Ribbon.Item>
          <Ribbon.Divider />
          <Ribbon.Item>Hallo</Ribbon.Item>
          <Ribbon.Space />
        </Ribbon.Actions>
      </Ribbon>
    </ThemeProvider>
  ));
