import * as React from 'react';
import { Button as BlueprintButton, IButtonProps } from '@blueprintjs/core';
import { css, useTheme, getColor, isDark } from '@filou/core';

interface IBlueprintButton extends IButtonProps {
  children?: React.ReactNode;
  color?: string | number | boolean;
  palette?: number;
}

const Button = ({
  children,
  intent,
  color,
  palette,
  ...rest
}: IBlueprintButton) => (
  <BlueprintButton
    intent={intent}
    className={css({
      '&.bp3-button': {
        borderRadius: useTheme('borderRadius'),
        boxShadow: 'none',
        backgroundImage: 'none',
        padding: `${useTheme('space2')} ${useTheme('space3')}`,
        minHeight: 'auto',
        ':hover': {
          boxShadow: 'none'
        },
        '&.bp3-minimal': {
          color: getColor(color, palette) || useTheme('dark'),
          ':hover': {
            backgroundColor: getColor(color, 1) || useTheme('dark5'),
            color:
              getColor(color, (palette || useTheme('palette') || 7) + 3) ||
              useTheme('dark')
          }
        },
        ':not(.bp3-minimal)': {
          backgroundColor: getColor(color, palette) || useTheme('dark5'),
          color: isDark(color, palette) ? useTheme('light') : useTheme('dark'),
          ':hover': {
            backgroundColor:
              getColor(color, (palette || useTheme('palette') || 7) + 2) ||
              useTheme('dark4'),
            color: isDark(color, palette)
              ? useTheme('light1')
              : useTheme('dark1')
          }
        }
      }
    })}
    {...rest}
  >
    {children}
  </BlueprintButton>
);

export default Button;
