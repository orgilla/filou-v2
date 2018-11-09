import * as React from 'react';

const Context = React.createContext(false);

export function useDark(): boolean {
  return React['useContext'](Context) as boolean;
}

export interface IThemeProvider {
  children: React.ReactNode;
  dark: boolean;
}

function ThemeProvider({ children, dark }: IThemeProvider) {
  return <Context.Provider value={dark}>{children}</Context.Provider>;
}

export default ThemeProvider;
