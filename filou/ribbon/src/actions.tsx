import * as React from 'react';
import { FelaComponent } from '@filou/core';
import Item from './item';
import Divider from './divider';
import { useDark } from './context';

const rule = ({ theme, dark = false }: { theme: any; dark: boolean }) => ({
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: 8,
  paddingRight: 8,
  minHeight: 48,
  maxHeight: 48,
  alignContent: 'center',
  alignItems: 'stretch',
  backgroundColor: dark ? '#222' : '#f7f7f7',
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
  '> a.active': dark
    ? {
        backgroundColor: theme.light5,
        color: theme.light,
        onHover: {
          backgroundColor: theme.light4
        }
      }
    : {
        backgroundColor: theme.dark5,
        color: theme.dark,
        onHover: {
          backgroundColor: theme.dark4
        }
      },
  '> a': {
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 12,
    paddingRight: 12,
    color: dark ? theme.light : theme.dark,
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
      backgroundColor: dark ? theme.light4 : theme.dark4
    }
  },
  '> span': {
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 6,
    paddingRight: 6,
    color: dark ? theme.light : theme.dark,
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
  '> .title': {
    paddingLeft: 0
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
}) => {
  const dark = useDark();
  return (
    <FelaComponent dark={dark} rule={rule}>
      {title ? (
        <Item component="span" className="title">
          {title}
        </Item>
      ) : null}
      {title ? <Divider dark /> : null}
      {children}
    </FelaComponent>
  );
};
RibbonActions.displayName = 'RibbonActions';

export default RibbonActions;
