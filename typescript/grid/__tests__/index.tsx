import 'jest';
import * as React from 'react';
import * as test from 'react-test-renderer';
import { createRenderer, Provider } from '@filou/core';
import { renderToMarkup } from 'fela-dom';
import Grid from '../src';

describe('Grid', () => {
  it('should render correctly', () => {
    const renderer = createRenderer();
    const component = test.create(
      <Provider renderer={renderer}>
        <Grid size={12}>
          <Grid.Item mini={6}>hi</Grid.Item>
          <Grid.Item mini={6}>hi</Grid.Item>
        </Grid>
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
    expect(renderToMarkup(renderer)).toMatchSnapshot();
  });
});
