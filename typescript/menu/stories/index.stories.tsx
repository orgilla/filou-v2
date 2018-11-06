import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Provider, ThemeProvider } from '@filou/core';
import { FaStar } from 'ficon';
import FiconProvider from 'ficon-fela';
import Menu from '../src';

(storiesOf('Components/Menu', module) as any)
  .addDecorator((story: any, context: any) =>
    withInfo({
      inline: false,
      header: false
    })(story)(context)
  )
  .addDecorator((stories: any) => (
    <Provider>
      <ThemeProvider theme={{}}>
        <FiconProvider>
          <div style={{ maxWidth: 400 }}>{stories()}</div>
        </FiconProvider>
      </ThemeProvider>
    </Provider>
  ))
  .add('Menu', () => (
    <Menu color="dark" inverted>
      <Menu.Header>
        <FaStar />
        Header & Logo
      </Menu.Header>
      <Menu.Header color>
        <Menu.Item icon={FaStar} size="large" extra="yeah">
          Item as Header
        </Menu.Item>
      </Menu.Header>
      <Menu.List title="List with title">
        <Menu.Item icon={FaStar} color inverted={false}>
          Item #1
        </Menu.Item>
        <Menu.Item icon={FaStar} color inverted={false}>
          Item #2
        </Menu.Item>
      </Menu.List>
      <Menu.List title="List with title and extra" extra={FaStar}>
        <Menu.Item icon={FaStar} color inverted={false}>
          Item #3
        </Menu.Item>
        <Menu.Item icon={FaStar} color inverted={false}>
          Item #4
        </Menu.Item>
      </Menu.List>
      <Menu.Divider />
      <Menu.Item color="light4">The begining...</Menu.Item>
      <Menu.Space />
      <Menu.Input />
      <Menu.Space />
      <Menu.Item color="light4">...the end!</Menu.Item>
    </Menu>
  ))
  .add('MenuItem', () => (
    <Menu>
      <Menu.List title="Content">
        <Menu.Item>Item</Menu.Item>
        <Menu.Item subtitle="subtitle">Item with subtitle</Menu.Item>
        <Menu.Item icon={FaStar}>Item with Icon</Menu.Item>
        <Menu.Item extra="extra">Item with extra</Menu.Item>
        <Menu.Item extra={<FaStar />}>Item with extra Icon</Menu.Item>
        <Menu.Item>
          Item with clickable extra
          <Menu.Extra onClick={() => {}}>click</Menu.Extra>
        </Menu.Item>
        <Menu.Item>
          Item with clickable extra Icon
          <Menu.Extra onClick={() => {}}>
            <FaStar />
          </Menu.Extra>
        </Menu.Item>
      </Menu.List>

      <Menu.List title="Colors">
        <Menu.Item icon={FaStar}>Item</Menu.Item>
        <Menu.Item icon={FaStar} color>
          Theme colored Icon
        </Menu.Item>
        <Menu.Item icon={FaStar} color="dark3">
          Other theme colors
        </Menu.Item>
        <Menu.Item icon={FaStar} color={5} palette={4}>
          MaterialUI colors
        </Menu.Item>
        <Menu.Item icon={FaStar} color="pink">
          CSS colors
        </Menu.Item>
        <Menu.Item icon={FaStar} color={5} palette={9} inverted>
          Inverted
        </Menu.Item>
      </Menu.List>

      <Menu.List title="Icons/Images">
        <Menu.Item icon={FaStar} color>
          Item with Icon
        </Menu.Item>
        <Menu.Item
          icon={
            <img src="https://avatars2.githubusercontent.com/u/12184856?s=400&u=d70035b4ffbc2ff21b8c50e3ec964f43529128cf&v=4" />
          }
          color
        >
          Item with Image
        </Menu.Item>
        <Menu.Item color>
          <Menu.Icon size="small">
            <FaStar />
          </Menu.Icon>
          Item with small Icon
        </Menu.Item>
        <Menu.Item color>
          <Menu.Icon size={36}>
            <FaStar />
          </Menu.Icon>
          Item with custom Icon size
        </Menu.Item>
      </Menu.List>

      <Menu.List title="Sizes">
        <Menu.Item icon={FaStar} subtitle="subtitle" color size="small">
          Small Item
        </Menu.Item>
        <Menu.Item icon={FaStar} subtitle="subtitle" color>
          Medium Item
        </Menu.Item>
        <Menu.Item icon={FaStar} subtitle="subtitle" color size="large">
          Large Item
        </Menu.Item>
      </Menu.List>

      <Menu.List title="States">
        <Menu.Item icon={FaStar} color>
          Item
        </Menu.Item>
        <Menu.Item icon={FaStar} color active>
          Active Item
        </Menu.Item>
        <Menu.Item icon={FaStar} color disabled>
          Disabled Item
        </Menu.Item>
        <Menu.Item icon={FaStar} color loading>
          Loading Item
        </Menu.Item>
      </Menu.List>
    </Menu>
  ));
