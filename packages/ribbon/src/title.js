import React from 'react';
import { createComponent } from 'react-fela';
import is from 'electron-is';
import IsMaximized from './is-maximized';
import Windows from './windows';

const isMac = is.macOS();
const isWindows = is.windows();

const Nav = createComponent(
  ({ theme, isMacFullscreen }) => ({
    backgroundColor: theme.color,
    // backgroundColor: '#24292e',
    // background: `linear-gradient(rgb(36, 36, 60), rgb(34, 34, 51))`,
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 8,
    minHeight: 32,
    maxHeight: 32,
    paddingRight: isWindows ? 0 : 8,
    alignContent: 'center',
    alignItems: 'stretch',
    '> .brand': {
      '&:first-child': {
        position: 'relative',
        onBefore: {
          content: '""',
          position: 'absolute',
          borderBottom: `1px solid ${theme.color}`,
          left: -5,
          top: 0,
          height: '100%',
          opacity: isMacFullscreen ? 1 : 0,
          zIndex: 0,
          borderLeft: '1px solid #848484'
        }
      },
      transition: '.3s cubic-bezier(.25,.8,.5,1),color 1ms',
      transform: isMacFullscreen ? 'translateX(70px)' : undefined
    },
    '-webkit-user-select': 'none',
    '-webkit-app-region': 'drag',
    '& .logo': {
      paddingY: 3
    },
    '> a': {
      WebkitAppRegion: 'no-drag',
      paddingX: 6,
      color: theme.light,
      minWidth: 22,
      display: 'flex',
      height: 'initial',
      alignItems: 'center',
      fontSize: 14,
      justifyContent: 'center',
      marginX: 0,
      marginY: 0,
      outline: 0,
      textDecoration: 'none',
      position: 'relative',
      verticalAlign: 'middle',
      userSelect: 'none',
      '&.active': {
        backgroundColor: theme.light,
        color: theme.dark,
        onHover: {
          backgroundColor: theme.light
        }
      },
      onHover: {
        backgroundColor: theme.light4
      }
    },
    '> span': {
      WebkitAppRegion: 'no-drag',
      paddingX: 6,
      color: theme.light,
      minWidth: 22,
      display: 'flex',
      height: 'initial',
      alignItems: 'center',
      fontSize: 14,
      justifyContent: 'center',
      marginX: 0,
      marginY: 0,
      outline: 0,
      textDecoration: 'none',
      position: 'relative',
      verticalAlign: 'middle',
      userSelect: 'none'
    }
  }),
  ({ children, className, logo: Logo, brand, to }) => (
    <nav className={className}>
      {Logo ? (
        <span className="brand logo">
          <Logo color="white" size={16} />
        </span>
      ) : null}
      {brand ? <span className="brand">{brand}</span> : null}
      {children}
      <Windows />
    </nav>
  ),
  ['brand', 'logo', 'to']
);

export default props => (
  <IsMaximized>
    {({ isMaximized }) => (
      <Nav {...props} isMacFullscreen={isMaximized && isMac} />
    )}
  </IsMaximized>
);
