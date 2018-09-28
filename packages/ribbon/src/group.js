import React from 'react';
import { createComponent } from 'react-fela';

const Group = createComponent(
  ({ theme, small, border = false }) => ({
    display: 'flex',
    flexDirection: 'column',
    marginY: 4,
    paddingX: 4,
    borderRight: border && '1px solid #d6d7d9',
    boxShadow: border && '1px 0px 0px 0px rgb(255, 255, 255)',
    '> span': {
      flex: 1,
      display: 'flex',
      flexDirection: small ? 'column' : 'row',
      alignItems: small ? undefined : 'center',
      '& a': small
        ? {
            color: theme.dark1,
            lineHeight: '18px',
            maxHeight: 18,
            textAlign: 'left',
            minHeight: 18,
            minWidth: 30,
            border: '1px solid transparent'
          }
        : {
            color: theme.dark1,
            fontSize: 28,
            height: 36,
            lineHeight: '23px',
            width: 44,
            flex: 1,
            // height: '100%',
            display: 'flex',
            border: '1px solid transparent'
          },
      '& a:hover': {
        background: theme.dark5
      },
      '& a:active': {
        background: theme.dark4
      },
      '& a.active': {
        background: theme.dark4
      }
    },
    '> a': {
      minHeight: 13,
      maxHeight: 13,
      lineHeight: '13px',
      fontSize: 12,
      textAlign: 'center',
      // padding: 1,
      color: theme.dark,
      userSelect: 'none'
    }
  }),
  ({ children, className, title, badge }) => (
    <div className={className}>
      {badge ? children : <span>{children}</span>}
      <a>{title}</a>
    </div>
  ),
  ['title', 'badge']
);

export default Group;
