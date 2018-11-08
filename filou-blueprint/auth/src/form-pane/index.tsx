import * as React from 'react';
import { Router, Match } from '@filou/router';
import { TransitionGroup, Transition } from 'react-transition-group';
import { Button } from '@filou/blueprint';
import { css, cx } from 'emotion';

const padding = (x: number, y = x) =>
  css(`
    padding-left: ${x}px;
    padding-right: ${x}px;
    padding-top: ${y}px;
    padding-bottom: ${y}px;
  `);

const rule = (theme: any, inverted?: boolean) =>
  css(
    `
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: ${inverted ? '#222' : 'rgb(247, 247, 247)'};
    color: ${inverted ? 'white' : undefined};
    min-width: 400px;
    max-width: 400px;
    & a: {
      color: ${theme.color}
    }
  `,
    padding(15)
  );

const length = 150;
const opacity = 'opacity';
const transformLeft = 'translateY(-100px)';
const transformRight = 'translateY(100px)';
const transform0 = 'translateY(0)';
const ruleInner = (state: string, invertedAnim = false) => {
  let stateStyles;
  if (state === 'entering') {
    stateStyles = {
      [opacity]: 0,
      transform: invertedAnim ? transformLeft : transformRight,
      zIndex: 1
    };
  }
  if (state === 'entered') {
    stateStyles = {
      [opacity]: 1,
      transform: transform0
    };
  }
  if (state === 'exiting') {
    stateStyles = {
      [opacity]: 0,
      transform: invertedAnim ? transformRight : transformLeft,
      zIndex: -1
    };
  }
  if (state === 'exited') {
    stateStyles = {
      [opacity]: 0,
      zIndex: -1
    };
  }
  return css(
    {
      flexGrow: 1,
      position: 'absolute',
      display: 'flex',
      flexDirection: 'row',
      top: 0,
      left: 0,
      overflow: 'hidden',
      transition: `all ${length}ms cubic-bezier(0.165, 0.84, 0.44, 1)`,
      zIndex: 0,
      'backface-visibility': 'hidden',
      perspective: 1000,
      ...stateStyles
    },
    padding(15)
  );
};

interface IFormPane {
  company?: string;
  children?: React.ReactNode;
  inverted?: boolean;
}
function FormPane({ children, company, inverted }: IFormPane) {
  return (
    <div className={cx(rule({}, inverted), { 'bp3-dark': inverted })}>
      <Match path="*">
        {({ match, location }) => (
          <TransitionGroup component={null}>
            <Transition
              key={(match && match['*'].split('/')[0]) || 'x'}
              timeout={{ enter: length / 2, exit: length }}
            >
              {state => (
                <Router className={ruleInner(state)} location={location}>
                  {children}
                </Router>
              )}
            </Transition>
          </TransitionGroup>
        )}
      </Match>
      <div className={css(`flex:1`)} />
      <div
        className={css(`
          display: flex;
          flex-direction: row;
          align-items: center;
        `)}
      >
        <Button minimal intent="primary">
          AGBs
        </Button>
        <Button minimal intent="primary">
          Datenschutz
        </Button>
        <div className={css(`flex:1`)} />
        <span
          className={css(`
            cursor:pointer;
            user-select:none;
          `)}
        >
          © {new Date().getFullYear()} {company}
        </span>
      </div>
    </div>
  );
}

export default FormPane;
