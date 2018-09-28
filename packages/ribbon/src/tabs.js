import React from 'react';
import { createComponent } from 'react-fela';

export default createComponent(
  ({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    minHeight: 22,
    maxHeight: 22,
    // paddingX: 12,
    backgroundColor: theme.color,
    '> .active': {
      backgroundColor: 'white',
      color: theme.color,
    },
    '> a': {
      onHover: {
        opacity: 0.9,
      },
      paddingRight: 8,
      lineHeight: '22px',
      color: theme.light,
      minWidth: 22,
      height: 22,
      // fontWeight: 500,
      alignItems: 'center',
      // borderTopLeftRadius: 2,
      // borderTopRightRadius: 2,
      fontSize: 14,
      // fontWeight: 500,
      justifyContent: 'center',
      // marginRight: '6px 8px',
      margin: 0,
      marginTop: 0,
      outline: 0,
      textDecoration: 'none',
      // transition: .3s cubic-bezier(.25,.8,.5,1),color 1ms;
      position: 'relative',
      verticalAlign: 'middle',
      userSelect: 'none',
    },
  }),
  ({ children, className }) => <div className={className}>{children}</div>,
);
