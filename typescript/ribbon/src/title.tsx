import * as React from 'react';
import { FelaComponent } from '@filou/core';
import { macOS, windows } from 'electron-is';
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
  logo?: string | React.ComponentClass;
  brand?: string;
  children?: React.ReactNode;
}

const isMac = macOS();
const isWindows = windows();

const rule = ({
  theme,
  isMacFullscreen,
  os
}: {
  theme: any;
  isMacFullscreen?: boolean;
  os?: RibbonOSStyle;
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
    marginLeft: isMacFullscreen ? 70 : undefined,
    // Hide first spans padding left => Title
    paddingLeft: 0
  },
  '-webkit-user-select': 'none',
  '-webkit-app-region': 'drag',
  '& .logo': {
    paddingY: 3
  },
  '> a': {
    WebkitAppRegion: 'no-drag',
    paddingX: 10,
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
});

export const RibbonTitle: React.StatelessComponent<RibbonTitleProps> = ({
  children,
  logo: Logo,
  maximized,
  os,
  brand
}) => (
  <IsMaximized>
    {({ isMaximized }) => (
      <FelaComponent
        rule={rule}
        isMacFullscreen={
          (maximized !== undefined ? maximized : isMaximized) &&
          (os !== undefined ? os === RibbonOSStyle.MAC : isMac)
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
RibbonTitle.displayName = 'RibbonTitle';

export default RibbonTitle;
