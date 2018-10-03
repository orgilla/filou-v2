import * as React from 'react';
//@ts-ignore
import { ThemeProvider } from 'react-fela';

interface FelaThemeProps {
  theme: any;
  children: React.ReactNode;
}

const FilouFelaTheme: React.SFC<FelaThemeProps> = props => (
  <ThemeProvider {...props} />
);
FilouFelaTheme.displayName = 'ThemeProvider';

export default FilouFelaTheme;
