import * as React from 'react';
import { FelaComponent, isOSX, isWindows, useDark } from '@filou/core';
import IsMaximized from './is-maximized';
import Windows from './windows';
import Divider from './divider';

export enum RibbonOSStyle {
  WIN = 'win',
  MAC = 'mac'
}

export interface RibbonTitleProps {
  os?: RibbonOSStyle;
  maximized?: boolean;
  logo?: string | React.ComponentType;
  brand?: string;
  children?: React.ReactNode;
}

const rule = ({
  theme,
  isMacNoFullscreen,
  os,
  dark = false
}: {
  theme: any;
  isMacNoFullscreen?: boolean;
  os?: RibbonOSStyle;
  dark?: boolean;
}) => ({
  backgroundColor: theme.color,
  // backgroundColor: '#24292e',
  // background: `linear-gradient(rgb(36, 36, 60), rgb(34, 34, 51))`,
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: 8,
  minHeight: 32,
  maxHeight: 32,
  paddingRight: (os ? os === RibbonOSStyle.WIN : isWindows) ? 0 : 8,
  alignContent: 'center',
  alignItems: 'stretch',
  '> .brand': {
    transition: '.3s cubic-bezier(.25,.8,.5,1),color 1ms',
    marginLeft: isMacNoFullscreen ? 70 : undefined,
    // Hide first spans padding left => Title
    paddingLeft: 0
  },
  '-webkit-user-select': 'none',
  '-webkit-app-region': 'drag',
  '& .logo': {
    paddingTop: 3,
    paddingBottom: 3
  },
  '> a': {
    WebkitAppRegion: 'no-drag',
    paddingLeft: 10,
    paddingRight: 10,
    color: theme.light,
    minWidth: 22,
    display: 'flex',
    height: 'initial',
    alignItems: 'center',
    fontSize: 14,
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
    '&.active': dark
      ? {
          backgroundColor: '#222',
          color: theme.light,
          onHover: {
            backgroundColor: '#222'
          }
        }
      : {
          backgroundColor: '#f7f7f7',
          color: theme.dark,
          onHover: {
            backgroundColor: '#f7f7f7'
          }
        },
    onHover: {
      backgroundColor: theme.light4
    }
  },
  '> span': {
    WebkitAppRegion: 'no-drag',
    paddingLeft: 6,
    paddingRight: 6,
    color: theme.light,
    minWidth: 22,
    display: 'flex',
    height: 'initial',
    alignItems: 'center',
    fontSize: 14,
    justifyContent: 'center',
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    outline: 0,
    textDecoration: 'none',
    position: 'relative',
    verticalAlign: 'middle',
    userSelect: 'none'
  }
});

export const RibbonTitle: React.StatelessComponent<RibbonTitleProps> = ({
  children,
  logo: Logo,
  maximized,
  os,
  brand
}) => {
  const dark = useDark();
  return (
    <IsMaximized>
      {({ isMaximized }) => (
        <FelaComponent
          rule={rule}
          xy={console.log(isOSX, isWindows, isMaximized)}
          dark={dark}
          isMacNoFullscreen={
            (maximized !== undefined
              ? maximized === false
              : isMaximized === false) &&
            (os !== undefined ? os === RibbonOSStyle.MAC : isOSX)
          }
          os={os}
          render={({ className }: { className: string }) => (
            <nav className={className}>
              {Logo ? (
                <span className="brand logo">
                  <Logo color="white" size={16} />
                </span>
              ) : null}
              {brand ? <span className="brand">{brand}</span> : null}
              {brand || Logo ? <Divider /> : null}
              {children}
              {(os !== undefined ? (
                os === RibbonOSStyle.WIN
              ) : (
                isWindows
              )) ? (
                <Windows
                  maximized={maximized !== undefined ? maximized : isMaximized}
                />
              ) : null}
            </nav>
          )}
        />
      )}
    </IsMaximized>
  );
};
RibbonTitle.displayName = 'RibbonTitle';

export default RibbonTitle;
