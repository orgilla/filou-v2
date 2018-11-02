import * as React from "react";
import { FelaTheme as FelaTh } from "react-fela";

interface IFelaTheme {
  render: (theme: any) => React.ReactNode;
}

const FelaTheme: React.SFC<IFelaTheme> = () => {
  return <FelaTh />;
};

export default FelaTheme;
