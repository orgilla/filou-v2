import * as React from 'react';
import { FelaComponent, IFelaRule, border } from '@filou/core';
import { IMenuProps } from './menu';

export interface IMenuDivider extends IMenuProps {}

const rule = ({ theme, inverted }: IFelaRule<IMenuDivider>) => ({
  width: '100%',
  border: 'none',
  borderTop: border(theme, inverted ? theme.light4 : theme.dark4)
});

const MenuDivider = ({ className, inverted }: IMenuDivider) => (
  <FelaComponent
    rule={rule}
    className={className}
    inverted={inverted}
    render="hr"
  />
);

export default MenuDivider;
