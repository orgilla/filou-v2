import * as React from 'react';
import { FelaComponent, StateProvider } from '@filou/core';
import { TransitionGroup, Transition } from 'react-transition-group';
import Grid from '../grid';
import renderText from '../render-text';

const length = 1000;
const opacity = 'opacity';
const transform = 'transform';
const rule = ({ inverted = false, state = null }) => ({
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  transition: `all ${length}ms cubic-bezier(0.165, 0.84, 0.44, 1)`,
  zIndex: 0,
  'backface-visibility': 'hidden',
  perspective: 1000,
  textAlign: 'right',
  ifSmallDown: {
    textAlign: 'center'
  },
  extend: [
    {
      condition: state === 'entering',

      style: {
        position: 'absolute',
        [opacity]: 0,
        [transform]: inverted ? 'translateX(-100px)' : 'translateX(100px)',
        zIndex: 1
      }
    },
    {
      condition: state === 'entered',
      style: { [opacity]: 1, [transform]: 'translateX(0px)' }
    },
    {
      condition: state === 'exiting',
      style: {
        position: 'absolute',
        [opacity]: 0,
        [transform]: inverted ? 'translateX(100px)' : 'translateX(-100px)',
        zIndex: -1
      }
    },
    {
      condition: state === 'exited',
      style: { [opacity]: 0, zIndex: -1 }
    }
  ]
});

interface ITabs {
  id?: string;
  title?: string;
  subtitle?: string;
  background?: 'banner' | 'color' | 'light' | 'dark' | 'dark5';
  items: Array<any>;
  keyField?: string;
  valueField?: string;
}
const Tabs: React.SFC<ITabs> = ({
  id,
  title,
  subtitle,
  background,
  keyField = 'title',
  valueField = '',
  items = []
}) => {
  return (
    <StateProvider>
      {(setValue, value = 0) => (
        <FelaComponent
          style={{
            textAlign: 'right',
            ifSmallDown: {
              textAlign: 'center'
            }
          }}
          render={({ className }) => (
            <Grid
              className={className}
              id={id}
              size={3}
              background={background}
              title={title}
              subtitle={subtitle}
            >
              <Grid.Item>
                <FelaComponent
                  style={{
                    listStyleType: 'none',
                    padding: 0,
                    textAlign: 'right',
                    ifSmallDown: {
                      textAlign: 'center'
                    },
                    '> li': {
                      cursor: 'pointer'
                    },
                    '> [data-active=true]': {
                      fontWeight: 'bold'
                    }
                  }}
                  render={({ className }) => (
                    <ul className={className}>
                      {items.map((item, i) => (
                        <li
                          key={i}
                          data-active={value === i}
                          onClick={() => setValue(i)}
                        >
                          {item[keyField]}
                        </li>
                      ))}
                    </ul>
                  )}
                />
              </Grid.Item>
              <Grid.Item size={2}>
                <TransitionGroup component={null}>
                  <Transition
                    key={value}
                    timeout={{ enter: length / 2, exit: length }}
                  >
                    {(state: string) => (
                      <FelaComponent
                        rule={rule}
                        state={state}
                        render={({ className }) => (
                          <div className={className}>
                            {renderText(
                              valueField
                                ? items[value][valueField]
                                : items[value]
                            )}
                          </div>
                        )}
                      />
                    )}
                  </Transition>
                </TransitionGroup>
              </Grid.Item>
            </Grid>
          )}
        />
      )}
    </StateProvider>
  );
};

export default Tabs;
