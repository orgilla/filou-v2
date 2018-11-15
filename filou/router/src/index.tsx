import * as React from 'react';
import { isElectron } from '@filou/core';
// import createHashSource from './create-hash-source';
export * from '@reach/router';
import {
  History,
  WindowLocation,
  HistorySource,
  LocationProvider,
  RouteComponentProps,
  MatchRenderProps
  // createHistory
} from '@reach/router';
export { default as ErrorBoundary } from './error-boundary';
export * from './error-boundary';
export { default as Section } from './section';
export * from './section';

export type IRoute<T extends {} = {}> = T & RouteComponentProps;
export type IMatch<T extends {} = {}, T2 = any> = T & MatchRenderProps<T2>;
export interface IApplicationRouter {
  memory?: boolean;
  children?: React.ReactNode;
}

class ApplicationRouter extends React.Component<IApplicationRouter> {
  history: History = null as any;
  source: HistorySource = null as any;

  state: { location?: WindowLocation } = {
    location: undefined
  };

  constructor(props: IApplicationRouter) {
    super(props);
    if (isElectron || props.memory) {
      // this.source = createHashSource();
      // this.history = createHistory(this.source);
    }
  }

  render() {
    const { children } = this.props;
    if (this.history) {
      return (
        <LocationProvider history={this.history}>{children}</LocationProvider>
      );
    }
    return <>{children}</>;
  }
}

export default ApplicationRouter;
