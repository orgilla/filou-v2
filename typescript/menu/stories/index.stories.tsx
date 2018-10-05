import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Provider } from '@filou/core';

import Menu from '../src';

(storiesOf('Components/Menu', module) as any)
  .addDecorator((story: any, context: any) =>
    withInfo({
      propTables: [Menu, Menu.Item],
      inline: true,
      header: false
    })(story)(context)
  )
  .addDecorator((stories: any) => <Provider>{stories()}</Provider>)
  .add('Basic', () => (
    <Menu color="red" width={200}>
      <Menu.Header>
        <Menu.Item onClick={console.log} large>
          Header
        </Menu.Item>
      </Menu.Header>
      <Menu.Item onClick={console.log}>Content2</Menu.Item>
      <Menu.Item onClick={console.log}>Content2</Menu.Item>
      <Menu.Item onClick={console.log}>Content2</Menu.Item>
      <Menu.Item onClick={console.log}>Content2</Menu.Item>
    </Menu>
  ));
