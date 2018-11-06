import * as React from 'react';
import { FlexGrid } from 'filou';

export default ({ size = 3, ...rest }) => (
  <FlexGrid.Item size={size} {...rest} />
);
