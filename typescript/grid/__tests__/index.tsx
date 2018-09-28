import 'jest';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { createRenderer } from 'fela';
import { Provider as FelaProvider, ThemeProvider } from 'react-fela';
import { renderToMarkup } from 'fela-dom';
import Grid from '../src';

const getProvider = (fela: any, theme = {}) => {
  const Provider: React.SFC = ({ children }) => (
    <FelaProvider rehydrate renderer={fela}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </FelaProvider>
  );
  return Provider;
};

describe('Grid', () => {
  it('should render correctly', () => {
    const fela = createRenderer();
    const Provider = getProvider(fela);
    const component = renderer.create(
      <Provider>
        <Grid size={12}>
          <Grid.Item mini={6}>hi</Grid.Item>
          <Grid.Item mini={6}>hi</Grid.Item>
        </Grid>
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
    expect(renderToMarkup(fela)).toMatchSnapshot();
  });
});
