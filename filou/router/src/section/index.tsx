import * as React from 'react';
import { Router, Match } from '@reach/router';
import { FelaComponent, IFelaRule, getColor } from '@filou/core';
import { TransitionGroup, Transition } from 'react-transition-group';
import ResizeHandler from 'react-resize-detector';
import ErrorBoundary from '../error-boundary';

const length = 250;
const opacity = 'opacity';
const transform = 'transfaorm';

export interface ISection extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  flexDirection?: 'row' | 'column';
  router?: boolean;
  app?: boolean;
  overflow?: string;
  height?: string | number;
  width?: string | number;
  inverted?: boolean;
  resize?: boolean;
  backgroundColor?: string | boolean;
}

interface ISectionWithState extends ISection {
  state?: string;
  backgroundColor?: string | boolean;
}

const rule = ({
  theme,
  flexDirection,
  overflow,
  height,
  width,
  app
}: IFelaRule<ISection>) => ({
  flexGrow: 1,
  position: 'relative',
  overflowY: overflow || 'auto',
  overflow,
  height,
  width,
  display: 'flex',
  backgroundColor: app ? theme.color : undefined,
  flexDirection: flexDirection || 'row'
});

const ruleInner = ({
  theme,
  flexDirection,
  state,
  app,
  inverted = false,
  height,
  width,
  backgroundColor = 'white'
}: IFelaRule<ISectionWithState>) => ({
  flexGrow: 1,
  position: 'absolute',
  display: 'flex',
  flexDirection: flexDirection || 'row',
  backgroundColor: getColor(theme, backgroundColor),
  width,
  height,
  top: 0,
  left: 0,
  overflowY: !app ? 'auto' : undefined,
  overflow: app ? 'hidden' : undefined,
  transition: `opacity ${length}ms cubic-bezier(0.165, 0.84, 0.44, 1), width 1000ms cubic-bezier(0.165, 0.84, 0.44, 1), height 1000ms cubic-bezier(0.165, 0.84, 0.44, 1)`,
  zIndex: 0,
  'backface-visibility': 'hidden',
  perspective: 1000,
  extend: [
    {
      condition: state === 'entering',
      style: {
        [opacity]: 0,
        [transform]: inverted ? 'translateX(-100px)' : 'translateX(10px)',
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
        [opacity]: 0,
        [transform]: inverted ? 'translateX(100px)' : 'translateX(-10px)',
        zIndex: -1
      }
    },
    {
      condition: state === 'exited',
      style: { [opacity]: 0, zIndex: -1 }
    }
  ]
});

const Wrapper: React.StatelessComponent<ISection> = ({
  flexDirection,
  children,
  router,
  inverted,
  app,
  height,
  overflow,
  width,
  resize = false,
  className,
  backgroundColor,
  ...rest
}) => {
  return (
    <ErrorBoundary>
      <FelaComponent
        rule={rule}
        app={app}
        flexDirection={flexDirection}
        overflow="hidden"
        height={height}
        width={width}
        className={className}
        render={({ className }) => (
          <div {...rest} className={className}>
            <ResizeHandler handleHeight={app} handleWidth={app}>
              {(width = '100%', height = '100%') =>
                router ? (
                  <Match path="*">
                    {({ match, location }) => (
                      <TransitionGroup component={null}>
                        <Transition
                          key={(match && match['*'].split('/')[0]) || 'x'}
                          timeout={{ enter: length / 2, exit: length }}
                        >
                          {state => (
                            <FelaComponent
                              rule={ruleInner}
                              width={width}
                              height={height}
                              flexDirection={flexDirection}
                              overflow={overflow}
                              state={state}
                              backgroundColor={backgroundColor}
                              inverted={inverted}
                              render={({ className }) => (
                                <Router
                                  className={className}
                                  location={location}
                                  {...rest}
                                >
                                  {children}
                                </Router>
                              )}
                            />
                          )}
                        </Transition>
                      </TransitionGroup>
                    )}
                  </Match>
                ) : (
                  <FelaComponent
                    rule={ruleInner}
                    width={width}
                    app={app}
                    height={height}
                    backgroundColor={backgroundColor}
                    overflow={overflow}
                    flexDirection={flexDirection}
                    render={({ className }) => (
                      <div {...rest} className={className}>
                        {children}
                      </div>
                    )}
                  />
                )
              }
            </ResizeHandler>
          </div>
        )}
      />
    </ErrorBoundary>
  );
};

export default Wrapper;
