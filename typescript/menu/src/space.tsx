import * as React from 'react';
import { FelaComponent } from '@filou/core';

const rule = () => ({
  flex: 1
});

export interface MenuSpacerProps {}

export const MenuSpacer: React.StatelessComponent<MenuSpacerProps> = ({}) => (
  <FelaComponent rule={rule} />
);
MenuSpacer.displayName = 'MenuSpacer';

export default MenuSpacer;
