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
import { FelaComponent, IFelaRule, getColor } from 'filou';

export interface IMenuProps {
  inverted?: boolean;
  size?: 'large' | 'medium' | 'small';
}

interface IMenu extends IMenuProps {
  children?: React.ReactNode;
  className?: string;
  color?: string | number | boolean;
  palette?: number;
  collapsed?: boolean;
}

const rule = ({ theme, color: backgroundColor, palette }: IFelaRule<IMenu>) => {
  const { inverted } = theme;
  const width = '100%';

  return {
    fontFamily: theme.fontFamily,
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    width,
    maxWidth: width,
    minWidth: width,
    color: inverted ? theme.light : theme.dark,
    backgroundColor: getColor(theme, backgroundColor, palette),
    padding: theme.space2,
    overflowY: 'auto',
    overflowX: 'hidden',
    transition: 'all 200ms cubic-bezier(0.165, 0.84, 0.44, 1)'
  };
};

class Menu extends React.Component<IMenu> {
  static Item = Item;
  static Content = Content;
  static Icon = Icon;
  static List = List;
  static Title = Title;
  static Extra = Extra;
  static Space = Space;
  static Header = Header;
  static Divider = Divider;
  static Input = Input;

  render() {
    const {
      inverted,
      size = 'medium',
      color,
      collapsed,
      className,
      children
    } = this.props;
    return (
      <FelaComponent rule={rule} className={className} color={color}>
        {React.Children.map(
          children,
          child =>
            React.isValidElement(child)
              ? React.cloneElement(child as React.ReactElement<any>, {
                  collapsed,
                  inverted:
                    child.props['inverted'] !== undefined
                      ? child.props['inverted']
                      : inverted,
                  size:
                    child.props['size'] !== undefined
                      ? child.props['size']
                      : size
                })
              : child
        )}
      </FelaComponent>
    );
  }
}

export default Menu;
