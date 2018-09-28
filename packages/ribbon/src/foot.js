import React from 'react';
import { createComponent } from 'react-fela';

export default createComponent(
  ({ theme }) => ({
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
      paddingX: 8,
      color: theme.light,
      minWidth: 22,
      display: 'flex',
      height: 'initial',
      alignItems: 'center',
      fontSize: 12,
      justifyContent: 'center',
      marginX: 0,
      marginY: 0,
      outline: 0,
      textDecoration: 'none',
      position: 'relative',
      verticalAlign: 'middle',
      userSelect: 'none',
      margin: 0,
      paddingY: 0,
      lineHeight: '17px',
      onHover: {
        backgroundColor: theme.light4
      }
    }
  }),
  ({ children, className }) => <div className={className}>{children}</div>
);
