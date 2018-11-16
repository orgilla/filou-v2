import * as React from 'react';
import { FelaComponent } from '@filou/core';
import IsMaximized from './is-maximized';

export interface RibbonTitleButtonProps {
  red?: boolean;
  disabled?: boolean;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
}
const Button: React.SFC<RibbonTitleButtonProps> = ({
  red,
  disabled,
  onClick,
  ...p
}) => (
  <FelaComponent
    render={({ className }: { className: string }) => (
      <button
        {...p}
        className={className}
        onClick={onClick}
        disabled={disabled}
        tabIndex={-1}
      />
    )}
    style={{
      onHover: {
        backgroundColor: red ? '#e81123' : 'rgba(255, 255, 255, 0.3)'
      },
      '> svg': {
        fill: '#fff'
      },
      WebkitAppRegion: 'no-drag',
      display: 'inline-block',
      position: 'relative',
      width: '45px',
      boxShadow: 'none',
      color: 'rgb(160, 160, 160)',
      backgroundColor: 'transparent',
      padding: '0px',
      margin: '0px',
      overflow: 'hidden',
      borderWidth: 'initial',
      borderStyle: 'none',
      borderColor: 'initial',
      borderImage: 'initial',
      borderRadius: '0px',
      transition: 'background-color 0.25s ease'
    }}
  />
);

export interface RibbonTitleWindowsProps {
  maximized?: boolean;
}
const Windows: React.SFC<RibbonTitleWindowsProps> = ({ maximized }) => (
  <IsMaximized>
    {({ disableMaximize, disableMinimize, isMaximized, currentWindow }) => (
      <FelaComponent
        style={{
          flexGrow: 0,
          flexShrink: 0,
          display: 'flex'
        }}
      >
        <Button
          aria-label="minimize"
          disabled={disableMinimize}
          onClick={e => currentWindow && currentWindow.minimize()}
        >
          <svg aria-hidden="true" version="1.1" width="10" height="10">
            <path d="M 0,5 10,5 10,6 0,6 Z" />
          </svg>
        </Button>
        <Button
          aria-label="maximize"
          disabled={disableMaximize}
          onClick={e =>
            currentWindow && currentWindow.isMaximizable()
              ? currentWindow.isMaximized()
                ? currentWindow.unmaximize()
                : currentWindow.maximize()
              : null
          }
        >
          <svg aria-hidden="true" version="1.1" width="10" height="10">
            <path
              d={
                (maximized !== undefined
                ? maximized
                : isMaximized)
                  ? 'm 2,1e-5 0,2 -2,0 0,8 8,0 0,-2 2,0 0,-8 z m 1,1 6,0 0,6 -1,0 0,-5 -5,0 z m -2,2 6,0 0,6 -6,0 z'
                  : 'M 0,0 0,10 10,10 10,0 Z M 1,1 9,1 9,9 1,9 Z'
              }
            />
          </svg>
        </Button>
        <Button
          aria-label="close"
          red
          onClick={e => currentWindow && currentWindow.close()}
        >
          <svg aria-hidden="true" version="1.1" width="10" height="10">
            <path d="M 0,0 0,0.7 4.3,5 0,9.3 0,10 0.7,10 5,5.7 9.3,10 10,10 10,9.3 5.7,5 10,0.7 10,0 9.3,0 5,4.3 0.7,0 Z" />
          </svg>
        </Button>
      </FelaComponent>
    )}
  </IsMaximized>
);

export default Windows;
