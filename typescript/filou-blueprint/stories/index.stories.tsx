import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Provider } from '@filou/core';

import { Button, StaticStyle, Tabs } from '../src';

(storiesOf('Components/Blueprint', module) as any)
  .addDecorator((story: any, context: any) =>
    withInfo({
      inline: true,
      header: false
    })(story)(context)
  )
  .addDecorator((stories: any) => (
    <Provider>
      <StaticStyle>{stories()}</StaticStyle>
    </Provider>
  ))
  .add('Basic', () => <Button>Hi</Button>)
  .add('Tabs', () => (
    <Tabs id="tabs1">
      <Tabs.Tab id="1" title={<span>Tab 1</span>} panel={<span>Panel1</span>} />
      <Tabs.Tab id="2" title={<span>Tab 2</span>} panel={<span>Panel2</span>} />
      <Tabs.Tab id="3" title={<span>Tab 3</span>} panel={<span>Panel3</span>} />
    </Tabs>
  ));
