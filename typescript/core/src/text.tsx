import * as React from 'react';
//@ts-ignore
import { FelaComponent } from 'react-fela';

const rule = ({ theme }: { theme: any }) => ({
  fontFamily: theme.fontFamily
});

export interface TextProps {
  component?: String;
}

export const Text: React.StatelessComponent<TextProps> = ({
  component = 'span'
}) => <FelaComponent rule={rule} render={component} />;
Text.displayName = 'Text';

export default Text;
