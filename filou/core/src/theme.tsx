import * as React from 'react';
import { css as c, Interpolation } from 'emotion';

const Context = React.createContext({});

export function css(content: ((theme: object) => Interpolation)): string {
  const theme = React['useContext'](Context) || {};

  if (typeof content === 'function') return c(content(theme));
  return c(content);
}

export function useTheme<T>(field?: string) {
  const theme = React['useContext'](Context);

  if (field) {
    return theme[field] as T;
  }
  return theme as T;
}

export interface IThemeProvider {
  children: React.ReactNode;
  theme: object;
}

function ThemeProvider({ children, theme }: IThemeProvider) {
  return <Context.Provider value={theme}>{children}</Context.Provider>;
}

export default ThemeProvider;
