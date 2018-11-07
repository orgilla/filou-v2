import * as React from 'react';
import { FelaComponent } from '@filou/core';

export interface IMenuSpace {
  className?: string;
}

const MenuSpace = ({ className }: IMenuSpace) => (
  <FelaComponent style={{ flex: 1 }} className={className} />
);

export default MenuSpace;
