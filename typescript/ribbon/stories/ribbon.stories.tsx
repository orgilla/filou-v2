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
    <Ribbon>
      <Ribbon.Title maximized os={Ribbon.OSStyle.MAC} brand="Mac Ribbon">
        <Ribbon.Item>Hallo</Ribbon.Item>
        <Ribbon.Space />
      </Ribbon.Title>
      <Ribbon.Actions>
        <Ribbon.Item>Hallo</Ribbon.Item>
        <Ribbon.Space />
      </Ribbon.Actions>
    </Ribbon>
  ))
  .add('Mac', () => (
    <Ribbon>
      <Ribbon.Title os={Ribbon.OSStyle.MAC} brand="Mac Ribbon">
        <Ribbon.Item>Hallo</Ribbon.Item>
        <Ribbon.Space />
      </Ribbon.Title>
      <Ribbon.Actions>
        <Ribbon.Item>Hallo</Ribbon.Item>
        <Ribbon.Space />
      </Ribbon.Actions>
    </Ribbon>
  ))
  .add('Windows', () => (
    <Ribbon>
      <Ribbon.Title os={Ribbon.OSStyle.WIN} brand="Windows Ribbon">
        <Ribbon.Item>Hallo</Ribbon.Item>
        <Ribbon.Space />
      </Ribbon.Title>
      <Ribbon.Actions>
        <Ribbon.Item>Hallo</Ribbon.Item>
        <Ribbon.Space />
      </Ribbon.Actions>
    </Ribbon>
  ))
  .add('Themed', () => (
    <ThemeProvider theme={{ color: '#666' }}>
      <Ribbon>
        <Ribbon.Title os={Ribbon.OSStyle.WIN} brand="Windows Ribbon">
          <Ribbon.Item>Hallo</Ribbon.Item>
          <Ribbon.Space />
        </Ribbon.Title>
        <Ribbon.Actions title="Actions">
          <Ribbon.Item>Hallo</Ribbon.Item>
          <Ribbon.Space />
        </Ribbon.Actions>
      </Ribbon>
    </ThemeProvider>
  ));
