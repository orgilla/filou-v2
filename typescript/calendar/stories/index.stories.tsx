import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Provider } from '@filou/core';

import Calendar from '../src';

(storiesOf('Components/Calendar', module) as any)
  .addDecorator((story: any, context: any) =>
    withInfo({
      propTables: [Calendar],
      inline: true,
      header: false
    })(story)(context)
  )
  .addDecorator((stories: any) => <Provider>{stories()}</Provider>)
  .add('Basic', () => (
    <Calendar
      initialMonth={new Date(2017, 3)}
      selectedDays={[
        new Date(2017, 3, 12),
        new Date(2017, 3, 2),
        {
          after: new Date(2017, 3, 20),
          before: new Date(2017, 3, 25)
        }
      ]}
    />
  ));
