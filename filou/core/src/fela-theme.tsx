import * as React from 'react';
//@ts-ignore
import { FelaTheme as FelaTh } from 'react-fela';

interface IFelaTheme {
  render: (theme: any) => React.ReactNode;
}

const FelaTheme: React.SFC<IFelaTheme> = props => {
  return <FelaTh {...props} />;
};

export default FelaTheme;
