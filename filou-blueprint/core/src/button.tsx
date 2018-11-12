import * as React from 'react';
import { Button as BlueprintButton, IButtonProps } from '@blueprintjs/core';
import { css, getColor, getInverted } from '@filou/core';

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
    className={css(theme => ({
      '&.bp3-button': {
        borderRadius: theme.borderRadius,
        backgroundColor:
          color !== undefined ? getColor(color, palette) : theme.dark5,
        color: getInverted(color, palette) ? theme.light : theme.dark,
        boxShadow: 'none',
        backgroundImage: 'none',
        ':hover': {
          backgroundColor:
            color !== undefined
              ? getColor(color, (palette || theme.palette) + 2)
              : theme.dark4,
          color: getInverted(color, palette) ? theme.light1 : theme.dark1,
          boxShadow: 'none'
        }
      }
    }))}
    /*className={css(
        (theme, c) => `
        &.bp3-button {
          border-radius: ${
            typeof theme.borderRadius === 'number'
              ? theme.borderRadius + 'px'
              : theme.borderRadius
          };
          background-color: ${
            color !== undefined ? c(color, palette) : theme.dark4
          };

          &:hover {
            
          }
        } 

        /* &.bp3-intent-primary:not(.bp3-minimal) {
          color: ${theme.light};
          background-color: ${theme.color};
          :hover {
            background-color: ${theme.dark4};
          }
        }
        &.bp3-minimal.bp3-intent-primary {
          color: ${theme.color};
          background-color: 'transparent';
          :hover {
            background-color: ${theme.dark4};
          }
        }
      `
      )} */
    {...rest}
  >
    {children}
  </BlueprintButton>
);

export default Button;
