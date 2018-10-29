import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Provider } from '@filou/core';

(storiesOf('Components/Core', module) as any)
  .addDecorator((story: any, context: any) =>
    withInfo({
      inline: true,
      header: false,
    })(story)(context)
  )
  .addDecorator((stories: any) => <Provider>{stories()}</Provider>)
  .add('Mac (Maximized)', () => <div>test</div>);
