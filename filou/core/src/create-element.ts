import * as React from 'react';

export type ElementType = React.ReactNode | React.ComponentType;
const createElement = (extra: React.ReactNode | React.ComponentType) => {
  if (
    React.isValidElement(extra) ||
    typeof extra === 'number' ||
    typeof extra === 'boolean' ||
    typeof extra === 'string'
  ) {
    return extra;
  }
  if (extra) {
    return React.createElement(extra as React.ComponentType);
  }
  return null;
};

export default createElement;
