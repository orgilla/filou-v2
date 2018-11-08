import * as React from 'react';
import FelaComponent from './fela-component';

const rule = ({ theme }: { theme: any }) => ({
  fontFamily: theme.fontFamily
});

export interface TextProps {
  component?: string;
}

export const Text: React.StatelessComponent<TextProps> = ({
  component = 'span'
}) => <FelaComponent rule={rule} render={component} />;
Text.displayName = 'Text';

export default Text;
