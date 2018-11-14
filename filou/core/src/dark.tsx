import * as React from 'react';

const Context = React.createContext(false);

export function useDark() {
  return React.useContext(Context);
}

export interface IDarkProvider {
  children: React.ReactNode;
  dark: boolean;
}

function DarkProvider({ children, dark }: IDarkProvider) {
  return <Context.Provider value={dark}>{children}</Context.Provider>;
}

export default DarkProvider;
