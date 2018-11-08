import * as React from 'react';
import { FelaComponent, IFelaRule } from '@filou/core';
import { Button as BButton, IButtonProps } from '@blueprintjs/core';

interface IBlueprintButton extends IButtonProps {
  children?: React.ReactNode;
}

const rule = ({ theme }: IFelaRule<IButtonProps>) => ({
  borderRadius: 0,

  '&.bp3-button.bp3-minimal.bp3-intent-primary': {
    color: theme.color,
    ':hover': {
      color: theme.color,
      backgroundColor: 'rgb(254, 212, 32, 0.2)'
    }
  }
});

function Button({ children, intent, ...rest }: IBlueprintButton) {
  return (
    <FelaComponent
      rule={rule}
      render={({ className }) => (
        <BButton intent={intent} className={className} {...rest}>
          {children}
        </BButton>
      )}
    />
  );
}

export default Button;
