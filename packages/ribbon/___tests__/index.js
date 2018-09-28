import 'jest';
import React from 'react';
import renderer from 'react-test-renderer';
import { createRenderer } from 'fela';
import { Provider as FelaProvider, ThemeProvider } from 'react-fela';
import { renderToMarkup } from 'fela-dom';
import Ribbon from '../src';

const getProvider = (fela, theme = {}) => {
  const Provider = ({ children }) => (
    <FelaProvider rehydrate renderer={fela}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </FelaProvider>
  );
  return Provider;
};

describe('Ribbon', () => {
  it('should render correctly', () => {
    const fela = createRenderer();
    const Provider = getProvider(fela);
    const component = renderer.create(
      <Provider>
        <Ribbon>
          <Ribbon.Title brand="Heya" />
          Text
        </Ribbon>
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(renderToMarkup(fela)).toMatchSnapshot();
  });
});
