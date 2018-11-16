import * as React from 'react';
import { FelaComponent, useDark } from '@filou/core';
import Item from './item';
import Divider from './divider';

const rule = ({
  theme,
  title,
  dark = false,
  color = false,
  height = 48
}: {
  theme: any;
  title: string;
  dark: boolean;
  color?: boolean;
  height?: number;
}) => ({
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: 8,
  paddingRight: title ? 0 : 8,
  minHeight: height,
  maxHeight: height,
  alignContent: 'center',
  alignItems: 'stretch',
  backgroundColor: color ? theme.color : dark ? '#222' : '#f7f7f7',
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
  className?: string;
  dark?: boolean;
  color?: string | boolean;
  height?: number;
}

export const RibbonActions: React.StatelessComponent<RibbonActionProps> = ({
  title,
  children,
  dark,
  color,
  className,
  height
}) => {
  dark = dark !== undefined ? dark : useDark();
  return (
    <FelaComponent
      title={!!title}
      dark={dark || color}
      color={color}
      rule={rule}
      height={height}
      className={className}
    >
      {title ? (
        <Item component="span" className="title">
          {title}
        </Item>
      ) : null}
      {title ? <Divider dark={dark} /> : null}
      {children}
    </FelaComponent>
  );
};
RibbonActions.displayName = 'RibbonActions';

export default RibbonActions;
