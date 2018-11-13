import * as React from 'react';
import { FelaComponent } from '@filou/core';

const rule = ({ theme }: { theme: any }) => ({
  display: 'flex',
  padding: 0,
  flexDirection: 'row',
  minHeight: 18,
  maxHeight: 18,
  paddingRight: 8,
  alignContent: 'center',
  alignItems: 'stretch',
  // borderTop: `1px solid ${theme.dark4}`,
  // background: `linear-gradient(${theme.dark5}, ${theme.dark4})`,
  background: theme.color,
  // boxShadow:
  //  '0px 1px 0px 0px rgb(255, 255, 255), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.75)',
  '> a': {
    WebkitAppRegion: 'no-drag',
    paddingLeft: 8,
    paddingRight: 8,
    color: theme.light,
    minWidth: 22,
    display: 'flex',
    height: 'initial',
    alignItems: 'center',
    fontSize: 12,
    justifyContent: 'center',
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    outline: 0,
    textDecoration: 'none',
    position: 'relative',
    verticalAlign: 'middle',
    userSelect: 'none',
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0,
    lineHeight: '17px',
    onHover: {
      backgroundColor: theme.light4
    }
  }
});

export interface RibbonFooterProps {}
const RibbonFooter: React.ComponentType<RibbonFooterProps> = ({ children }) => (
  <FelaComponent rule={rule}>{children}</FelaComponent>
);

export default RibbonFooter;
