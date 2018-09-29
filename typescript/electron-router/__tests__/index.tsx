import 'jest';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Router from '../src';

describe('Grid', () => {
  it('should render correctly', () => {
    const component = renderer.create(<Router />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
