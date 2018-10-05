import * as React from 'react';
import Svg, { StyledPropTypes } from 'ficon-core';

const icon: React.SFC<StyledPropTypes> = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}><path d="M0 128.032v255.93c0 28.425 34.488 42.767 54.627 22.627l128-127.962c12.496-12.496 12.497-32.758 0-45.255l-128-127.968C34.528 85.305 0 99.55 0 128.032zM160 256L32 384V128l128 128z"/></Svg>
);

icon.displayName = "FaCaretRight";

export default icon;