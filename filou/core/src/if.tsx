import * as React from 'react';

export interface IfProps {
  condition: boolean;
}

export const If: React.StatelessComponent<IfProps> = ({
  condition,
  children
}) => (condition ? <React.Fragment>{children}</React.Fragment> : null);

export default If;
