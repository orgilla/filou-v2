import * as React from 'react';
import Item from './item';
import Content from './content';
import Icon from './icon';
import Header from './header';
import Divider from './divider';
import List from './list';
import Title from './title';
import Space from './space';
import Extra from './extra';
import Input from './input';
import { css, cx, getColor, useTheme } from '@filou/core';

export interface IMenuProps {
  children?: React.ReactNode;
  className?: string;
  inverted?: boolean;
  size?: 'large' | 'medium' | 'small';
  color?: string | number | boolean;
  palette?: number;
  collapsed?: boolean;
}

interface IMenu extends IMenuProps {}

const rule = ({ color, palette }: IMenu) => {
  const width = '100%';

  return css({
    fontFamily: useTheme('fontFamily'),
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    width,
    maxWidth: width,
    minWidth: width,
    height: '100%',
    color: useTheme('inverted') ? useTheme('light') : useTheme('dark'),
    backgroundColor: getColor(color, palette),
    padding: useTheme('space2'),
    overflowY: 'auto',
    overflowX: 'hidden',
    transition: 'all 200ms cubic-bezier(0.165, 0.84, 0.44, 1)'
  } as any);
};

const Menu = ({
  inverted,
  size = 'medium',
  color,
  palette,
  collapsed,
  className,
  children
}: IMenu) => (
  <div className={cx(rule({ color, palette }), className)}>
    {React.Children.map(children, child =>
      React.isValidElement(child)
        ? React.cloneElement(child as React.ReactElement<any>, {
            collapsed,
            inverted:
              child.props['inverted'] !== undefined
                ? child.props['inverted']
                : inverted,
            size: child.props['size'] !== undefined ? child.props['size'] : size
          })
        : child
    )}
  </div>
);

Menu.Item = Item;
Menu.Content = Content;
Menu.Icon = Icon;
Menu.List = List;
Menu.Title = Title;
Menu.Extra = Extra;
Menu.Space = Space;
Menu.Header = Header;
Menu.Divider = Divider;
Menu.Input = Input;

export default Menu;
