import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Provider, ThemeProvider, StateProvider } from '@filou/core';
import Sketch from '@filou/color';

const moment = require('moment');

import Scheduler, { SCHEDULER_DE, StaticStyle } from '../src';

const createEvents = (amount = 1000) => {
  const events = {};
  let i = 0;
  while (i < amount) {
    const start = moment().add('days', Math.random() * 100 + 1);
    const key = start.year() + '' + start.month();
    if (!events[key]) events[key] = [];
    events[key].push({
      title: `Event ${i}`,
      start: +start,
      end: +moment(start).add('hours', Math.random() * 5 + 1)
    });
    i++;
  }
  return events;
};
const events = createEvents();

(storiesOf('Components/Scheduler', module) as any)
  .addDecorator((story: any, context: any) =>
    withInfo({
      inline: true,
      header: false
    })(story)(context)
  )
  .addDecorator((stories: any) => (
    <Provider>
      <StaticStyle>
        <StateProvider>
          {(onChange, color) => (
            <React.Fragment>
              <Sketch onChange={onChange} value={color} />
              <ThemeProvider theme={{ color }}>{stories()}</ThemeProvider>
            </React.Fragment>
          )}
        </StateProvider>
      </StaticStyle>
    </Provider>
  ))
  .add('Basic', () => (
    <div style={{ height: 500, width: '100%', display: 'flex' }}>
      <Scheduler
        localizer={SCHEDULER_DE}
        events={events[new Date().getFullYear() + '' + new Date().getMonth()]}
        view="month"
      />
    </div>
  ));
