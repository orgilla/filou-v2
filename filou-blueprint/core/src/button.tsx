import * as React from 'react';
import { Button as BlueprintButton, IButtonProps } from '@blueprintjs/core';
import { css } from 'emotion';
import { useTheme } from './theme';

interface IBlueprintButton extends IButtonProps {
  children?: React.ReactNode;
}

function Button({ children, intent, ...rest }: IBlueprintButton) {
  const color = useTheme<string>('color');
  return (
    <BlueprintButton
      intent={intent}
      className={css(`
        border-radius: 0;
        &.bp3-button.bp3-minimal.bp3-intent-primary {
          color: ${color};
          :hover {
            color: ${color};
            background-color: rgb(254, 212, 32, 0.2);
          }
        }
      `)}
      {...rest}
    >
      {children}
    </BlueprintButton>
  );
}

export default Button;
