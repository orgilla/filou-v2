import * as React from 'react';
import { Button as BlueprintButton, IButtonProps } from '@blueprintjs/core';
import { css, useTheme, getColor, textColor } from '@filou/core';

interface IBlueprintButton extends IButtonProps {
  children?: React.ReactNode;
  color?: string | number | boolean;
}

// maybe remove color, since we already have intent??
function Button({ children, intent, color: c, ...rest }: IBlueprintButton) {
  const theme = useTheme<any>();
  const color = getColor(c);
  // const isDarkBack = useDark();

  return (
    <BlueprintButton
      intent={intent}
      className={css({
        '&.bp3-button': {
          borderRadius: theme.borderRadius,
          boxShadow: 'none',
          backgroundImage: 'none',
          paddingTop: theme.space2,
          paddingBottom: theme.space2,
          paddingLeft: theme.space3,
          paddingRight: theme.space3,
          minHeight: 'auto',
          ':hover': {
            boxShadow: 'none'
          },
          '&.bp3-minimal': {
            '&.bp3-intent-primary': {
              color,
              ':hover': {
                // backgroundColor: fade(color, isDarkBack ? 20 : 10),
                color
              }
            },
            ':not(.bp3-intent-primary)': {}
          },
          ':not(.bp3-minimal)': {
            backgroundColor: color || theme.dark5,
            color: textColor(color || theme.dark5),
            ':hover': {
              backgroundColor: color || theme.dark4,
              color: textColor(color || theme.dark4, 1)
            }
          }
        }
      })}
      {...rest}
    >
      {children}
    </BlueprintButton>
  );
}

export default Button;
