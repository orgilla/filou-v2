import * as React from 'react';
import { css } from 'emotion';
import { useTheme } from './theme';

interface IText {
  children?: React.ReactNode;
  className?: string;
  type?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span'
    | 'strong'
    | 'small';
}

function Text({ type = 'span', children, className }: IText) {
  return React.createElement(
    type,
    {
      className: css(
        `
          font-weight: ${useTheme('fontWeight')};
        `,
        className
      )
    },
    children
  );
}

export default Text;
