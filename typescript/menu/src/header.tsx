import * as React from 'react';
import { FelaComponent, color as getColor } from '@filou/core';

export interface MenuHeaderProps {
  color?: string;
  palette?: number;
  paddingBottom?: string | boolean | number;
  marginBottom?: string | boolean | number;
  inverted?: boolean;
}

interface InnerProps extends MenuHeaderProps {
  theme: any;
}

const rule = ({
  theme,
  color,
  palette,
  marginBottom,
  paddingBottom
}: InnerProps) => ({
  // height: 80,
  minHeight: 80,
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  alignItems: 'center',
  fontSize: '120%',
  marginX: -9,
  paddingX: 9,
  marginTop: `-${theme.space2}`,
  paddingTop: theme.space2,
  marginBottom: marginBottom !== undefined ? marginBottom : theme.space2,
  paddingBottom: paddingBottom !== undefined ? paddingBottom : theme.space2,
  backgroundColor: getColor(theme, `${color}`, palette),
  color: theme.inverted ? theme.light : theme.dark,
  '& svg': {
    size: 40
  },
  '& img': {
    size: 50,
    borderRadius: theme.borderRadius
  }
});

const MenuHeader: React.StatelessComponent<MenuHeaderProps> = ({
  color,
  palette,
  marginBottom,
  paddingBottom,
  children
}) => (
  <FelaComponent
    rule={rule}
    marginBottom={marginBottom}
    paddingBottom={paddingBottom}
    palette={palette}
    color={color}
  >
    {children}
  </FelaComponent>
);

export default MenuHeader;

/*import useTheme from './theme';

const Header = createComponent(
  ({ theme, color, palette, marginBottom, paddingBottom }) => ({}),
  'div'
);

export default useTheme(({ inverted, theme, ...props }) => (
  <ThemeProvider theme={theme}>
    <Header {...props} />
  </ThemeProvider>
));
*/
