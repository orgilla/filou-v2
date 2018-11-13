import * as React from 'react';
import {
  FelaComponent,
  IFelaRule,
  ElementType,
  createElement
} from '@filou/core';
import Icon from './icon';
import Extra from './extra';
import { IMenuProps } from './menu';

export interface IMenuTitle extends IMenuProps {
  onClick?: any;
  extra?: ElementType;
}

const rule = ({ theme, inverted }: IFelaRule<IMenuTitle>) => ({
  color: inverted ? theme.light2 : theme.dark2,
  whiteSpace: 'nowrap',
  overflowX: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '100%',
  textTransform: 'uppercase',
  fontSize: theme.fontSizeSmall,
  margin: theme.space1,
  marginTop: theme.space2,
  flexShrink: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  userSelect: 'none'
});

const MenuTitle = ({ extra, children, inverted, ...p }: IMenuTitle) => (
  <FelaComponent rule={rule} inverted={inverted} {...p}>
    {children}
    {!!extra && (
      <Extra inverted={inverted}>
        {typeof extra === 'string' ? (
          extra
        ) : (
          <Icon extra inverted={inverted}>
            {createElement(extra)}
          </Icon>
        )}
      </Extra>
    )}
  </FelaComponent>
);

export default MenuTitle;
