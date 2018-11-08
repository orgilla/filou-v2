import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Provider, FelaComponent } from '@filou/core';
import materialColors from '../src/material-colors';

/*import { Provider, ThemeProvider, StateProvider } from '../src';
import Sketch from '@filou/color'; */

const rule = ({
  theme,
  color,
  palette,
}: {
  theme: any;
  color: any;
  palette: number;
}) => ({
  backgroundColor: color.palette[palette],
  padding: theme.space1,
  margin: theme.space1,
  minWidth: '10%',
});

(storiesOf('Components/Core', module) as any)
  .addDecorator((story: any, context: any) =>
    withInfo({
      inline: false,
      header: false,
    })(story)(context)
  )
  .addDecorator((stories: any) => <Provider>{stories()}</Provider>)
  /* .addDecorator((stories: any) => (
    <Provider>
      <StateProvider>
        {(onChange, color) => (
          <React.Fragment>
            <Sketch onChange={onChange} value={color} />
            <ThemeProvider theme={{ color }}>{stories()}</ThemeProvider>
          </React.Fragment>
        )}
      </StateProvider>
    </Provider>
  )) */
  .add('Material UI Colors', () => (
    <FelaComponent style={{ display: 'flex', flexWrap: 'wrap' }}>
      {materialColors.map((color, j) => (
        <FelaComponent
          style={{
            color: color.palette[7],
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
          color={color}
          render={({ className }: { className: string }) => (
            <div>
              <h4 className={className}>
                {j}: {color.color}
              </h4>
              {color.palette.map((palette, i) => (
                <FelaComponent
                  rule={rule}
                  color={color}
                  palette={i}
                  render={({ className }: { className: string }) => (
                    <div className={className}>
                      {i}: {palette}
                    </div>
                  )}
                />
              ))}
            </div>
          )}
        />
      ))}
    </FelaComponent>
  ));
