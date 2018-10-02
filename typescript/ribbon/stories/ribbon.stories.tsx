import * as React from 'react';
import { createRenderer } from 'fela';
import { Provider as FelaProvider, ThemeProvider } from 'react-fela';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Ribbon from '../src';

const getProvider = (theme = {}) => {
  const renderer = createRenderer();
  const Provider: React.SFC = ({ children }) => (
    <FelaProvider rehydrate renderer={renderer}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </FelaProvider>
  );
  return (storyFn: Function) => <Provider>{storyFn()}</Provider>;
};

(storiesOf('Components/Ribbon', module) as any)
  .addDecorator((story: any, context: any) =>
    withInfo({ propTables: [Ribbon, Ribbon.Title], inline: true })(story)(
      context
    )
  )
  .addDecorator((story: any, context: any) =>
    getProvider({ color: 'green' })(story)
  )
  .add('Basic', () => (
    <Ribbon>
      <Ribbon.Title brand="Ribbon">
        <Ribbon.Item>Hallo</Ribbon.Item>
        <Ribbon.Space />
      </Ribbon.Title>
    </Ribbon>
  ));
