import * as React from 'react';

const Context = React.createContext({});

export function useTheme<T>() {
  return React['useContext'](Context) as T;
}

export interface IThemeProvider {
  children: React.ReactNode;
  theme: object;
}

function ThemeProvider({ children, theme }: IThemeProvider) {
  return <Context.Provider value={theme}>{children}</Context.Provider>;
}

export default ThemeProvider;
