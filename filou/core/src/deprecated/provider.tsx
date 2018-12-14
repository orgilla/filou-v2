import * as React from 'react';
// @ts-ignore
import { Provider } from 'react-fela';
import ThemeProvider from '../theme/theme';
import createRenderer from './create-renderer';
import defaultTheme from '../theme/default-theme';

const FixedProvider = Provider as any;

interface FilouProviderProps {
  theme?: any;
  renderer?: any;
  rehydrate?: boolean;
}

const FilouProvider: React.ComponentType<FilouProviderProps> = ({
  theme,
  children,
  renderer = createRenderer({}),
  rehydrate = true
}) => {
  const props = {};
  if (typeof document !== 'undefined') {
    let element = document.getElementById('stylesheet');
    if (element) {
      document.body.removeChild(element);
    }
    element = document.createElement('style');
    element.id = 'stylesheet';
    document.body.appendChild(element);
    const stylesheet = document.getElementById('stylesheet');
    props['mountNode'] = stylesheet;
  }
  return (
    <FixedProvider renderer={renderer} rehydrate={rehydrate} {...props}>
      <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
        {children}
      </ThemeProvider>
    </FixedProvider>
  );
};
export default FilouProvider;
