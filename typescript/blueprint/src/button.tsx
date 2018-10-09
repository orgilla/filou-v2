import * as React from 'react';
import { FelaComponent, fade } from '@filou/core';
import { Button as BPButton, IButtonProps } from '@blueprintjs/core';

const rule = ({ theme }: { theme: any }) => ({
  '&.bp3-button:not([class*="bp3-intent-"])': {
    backgroundColor: fade(theme.color, 5)
  }
});

export class Button extends React.Component<IButtonProps> {
  render() {
    return (
      <FelaComponent
        rule={rule}
        render={({ className }: { className: string }) => (
          <BPButton {...this.props} className={className} />
        )}
      />
    );
  }
}

export default Button;
