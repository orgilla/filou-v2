import * as React from 'react';
import { FelaComponent } from '@filou/core';

const rule = () => ({
  flex: 1
});

export interface RibbonSpacerProps {}

export const RibbonSpacer: React.StatelessComponent<
  RibbonSpacerProps
> = ({}) => <FelaComponent rule={rule} />;
RibbonSpacer.displayName = 'RibbonSpacer';

export default RibbonSpacer;
