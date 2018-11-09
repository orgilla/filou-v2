import * as React from 'react';
import { ThemeProvider } from 'react-fela';
import ThemeProvider2 from './theme';

interface FelaThemeProps {
  theme: any;
  children: React.ReactNode;
}

const FilouFelaTheme: React.SFC<FelaThemeProps> = ({ children, theme }) => (
  <ThemeProvider theme={theme}>
    <ThemeProvider2 theme={theme}>{children}</ThemeProvider2>
  </ThemeProvider>
);
FilouFelaTheme.displayName = 'ThemeProvider';

export default FilouFelaTheme;
