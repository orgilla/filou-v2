import * as React from 'react';
import { Button as BButton, IButtonProps } from '@blueprintjs/core';
import { css } from 'emotion';
import { useTheme } from './theme';

interface IBlueprintButton extends IButtonProps {
  children?: React.ReactNode;
}

interface ITheme {
  color: string;
}

const rule = (theme: ITheme) =>
  css({
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
  const theme = useTheme<ITheme>();
  return (
    <BButton intent={intent} className={rule(theme)} {...rest}>
      {children}
    </BButton>
  );
}

export default Button;
