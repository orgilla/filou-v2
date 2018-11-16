import * as React from 'react';
import { Spinner } from '@blueprintjs/core';
import { css, useTheme } from '@filou/core';

interface ILoadingScreen {
  children?: React.ReactNode;
}
function LoadingScreen({ children }: ILoadingScreen) {
  const color = useTheme<string>('color');
  return (
    <div
      className={css({
        display: 'flex',
        flex: 1,
        backgroundColor: color,
        height: '100%',
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center'
      })}
    >
      {children || <Spinner />}
    </div>
  );
}

export default LoadingScreen;
