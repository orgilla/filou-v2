import * as React from 'react';
import { css as c, Interpolation } from 'emotion';
import { getColor } from './utils';

const Context = React.createContext({});

export function css(content: ((utils: object) => Interpolation)): string {
  const theme = React['useContext'](Context) || {};

  if (typeof content === 'function') return c(content({ theme, getColor }));
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
