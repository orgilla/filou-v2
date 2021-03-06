import * as React from 'react';

const Context = React.createContext({});

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
