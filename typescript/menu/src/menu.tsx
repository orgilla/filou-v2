import * as React from 'react';
import { FelaComponent } from '@filou/core';
// import useTheme from './theme';
import Header from './header';
import Divider from './divider';
import Image from './image';
import List from './list';
import Item from './item';
import Title from './title';
import Inner from './menu-inner';
import Space from './space';
import Extra from './extra';
import Input from './input';

export interface MenuProps {
  className?: string;
  color?: string;
  paddingX?: string | number;
  paddingY?: string | number;
  width?: string | number;
  overflowY?: string | number;
  collapsed?: boolean;
  header?: React.ReactNode;
  headerMarginBottom?: string | boolean | number;
  headerPaddingBottom?: string | boolean | number;
  headerColor?: string;
  headerPalette?: number;
  headerInverted?: boolean;
  inverted?: boolean;
  palette?: number;
}

interface InnerProps extends MenuProps {
  theme: any;
}

const rule = ({
  theme,
  color,
  paddingX = 9,
  paddingY = theme.space2,
  width,
  overflowY = 'auto',
  collapsed
}: InnerProps) => ({
  fontFamily: theme.fontFamily,
  display: 'flex',
  flexGrow: collapsed ? 0 : 1,
  flexDirection: 'column',
  width: width || '100%',
  maxWidth: width,
  minWidth: width,
  // height: '100%',
  color: theme.inverted ? theme.light1 : theme.dark1,
  backgroundColor: color,
  paddingY,
  paddingX,
  overflowY,
  overflowX: 'hidden',
  transition: 'all 200ms cubic-bezier(0.165, 0.84, 0.44, 1)'
});

export class Menu extends React.Component<MenuProps> {
  static Header = Header;
  static Divider = Divider;
  static Item = Item;
  static List = List;
  static Title = Title;
  static Image = Image;
  static Space = Space;
  static Extra = Extra;
  static Input = Input;

  static displayName = 'Menu';

  render() {
    const {
      children,
      color,
      paddingX,
      paddingY,
      width,
      overflowY,
      collapsed,
      header,
      headerMarginBottom,
      headerPaddingBottom,
      headerColor,
      headerPalette,
      headerInverted,
      inverted,
      palette,
      className
    } = this.props;
    return (
      <FelaComponent
        rule={rule}
        paddingX={paddingX}
        paddingY={paddingY}
        width={width}
        overflowY={overflowY}
        collapsed={collapsed}
        className={className}
      >
        {header && (
          <Header
            marginBottom={headerMarginBottom}
            paddingBottom={headerPaddingBottom}
            color={headerColor !== undefined ? headerColor : color}
            palette={headerPalette !== undefined ? headerPalette : palette}
            inverted={headerInverted || inverted}
          >
            {header}
          </Header>
        )}
        <Inner overflowY={overflowY}>
          {React.Children.map(
            children,
            child =>
              child && typeof child !== 'string' && typeof child !== 'number'
                ? React.cloneElement(child, { collapsed })
                : child
          )}
        </Inner>
      </FelaComponent>
    );
  }
}

export default Menu;

/*

const Component = useTheme(
  ({ inverted, color, collapsed, theme, ...props }) => (
    <ThemeProvider theme={theme}>
      <Menu
        color={color}
        inverted={inverted}
        collapsed={collapsed}
        {...props}
      />
    </ThemeProvider>
  )
);

*/
