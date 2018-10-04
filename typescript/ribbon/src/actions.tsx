import * as React from 'react';
import { FelaComponent } from '@filou/core';
import Item from './item';
import Divider from './divider';

const rule = ({ theme }: { theme: any }) => ({
  display: 'flex',
  flexDirection: 'row',
  paddingX: 8,
  minHeight: 48,
  maxHeight: 48,
  alignContent: 'center',
  alignItems: 'stretch',
  backgroundColor: 'white',
  borderBottom: `1px solid ${theme.dark4}`,
  // boxShadow:
  // '0px 1px 0px 0px rgb(255, 255, 255), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.75)',
  // background: 'linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.05))',
  zIndex: 1,
  '& a': {
    textDecoration: 'none'
  },
  '> b': {
    color: theme.dark
  },
  '> a.active': {
    backgroundColor: theme.dark5,
    color: theme.dark,
    onHover: {
      backgroundColor: theme.dark4
    }
  },
  '> a': {
    marginY: 8,
    marginX: 0,
    paddingX: 12,
    color: theme.dark,
    minWidth: 22,
    display: 'flex',
    height: 'initial',
    alignItems: 'center',
    fontSize: 16,
    justifyContent: 'center',
    outline: 0,
    textDecoration: 'none',
    position: 'relative',
    verticalAlign: 'middle',
    userSelect: 'none',
    onHover: {
      backgroundColor: theme.dark4
    }
  },
  '> span': {
    marginY: 6,
    marginX: 0,
    paddingX: 6,
    color: theme.dark,
    minWidth: 22,
    display: 'flex',
    height: 'initial',
    alignItems: 'center',
    fontSize: 16,
    justifyContent: 'center',
    outline: 0,
    textDecoration: 'none',
    position: 'relative',
    verticalAlign: 'middle',
    userSelect: 'none'
  },
  '& input.ant-input': {
    boxShadow:
      '0px 1px 0px 0px rgb(255, 255, 255), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.75)'
  }
});

export interface RibbonActionProps {
  title?: string | React.ReactNode;
}

export const RibbonActions: React.StatelessComponent<RibbonActionProps> = ({
  title,
  children
}) => (
  <FelaComponent rule={rule}>
    {title ? <Item component="span">{title}</Item> : null}
    {title ? <Divider dark /> : null}
    {children}
  </FelaComponent>
);
RibbonActions.displayName = 'RibbonActions';

export default RibbonActions;
