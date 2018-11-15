import * as React from 'react';

export interface IfProps {
  condition: boolean;
}

export const If: React.StatelessComponent<IfProps> = ({
  condition,
  children
}) => (condition ? <>{children}</> : null);

export default If;
