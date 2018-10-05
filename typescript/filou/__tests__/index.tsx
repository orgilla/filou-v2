import 'jest';
import * as React from 'react';
import * as test from 'react-test-renderer';
import { createRenderer, Provider } from '@filou/core';
import { renderToMarkup } from 'fela-dom';

describe('Grid', () => {
  it('should render correctly', () => {
    const renderer = createRenderer();
    const component = test.create(
      <Provider renderer={renderer}>
        <div />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
    expect(renderToMarkup(renderer)).toMatchSnapshot();
  });
});
