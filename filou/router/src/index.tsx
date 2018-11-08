import * as React from 'react';
import { isElectron } from '@filou/core';
export * from '@reach/router';
import {
  createMemorySource,
  createHistory,
  History,
  WindowLocation,
  HistorySource,
  RouteComponentProps,
  MatchRenderProps
} from '@reach/router';
export { default as ErrorBoundary } from './error-boundary';
export * from './error-boundary';
export { default as Section } from './section';
export * from './section';

export type IRoute<T extends {} = {}> = T & RouteComponentProps;
export type IMatch<T extends {} = {}, T2 = any> = T & MatchRenderProps<T2>;

class ElectronRouter extends React.Component {
  history: History = null as any;
  source: HistorySource = null as any;

  state: { location?: WindowLocation } = {
    location: undefined
  };

  constructor(props: any) {
    super(props);
    if (isElectron) {
      let url = '/';
      if (typeof location !== 'undefined' && location.hash) {
        url = location.hash.substr(1);
      } else {
        url = localStorage.getItem('pathname') || url;
      }
      this.source = createMemorySource(url || '/');
      this.history = createHistory(this.source);
      this.state.location = this.source.location;
    }
  }

  componentDidMount() {
    if (this.history) {
      this.history.listen(this.listener);
    }
  }

  listener = () => {
    const location = this.source.location;
    if (
      !this.state.location ||
      this.state.location.pathname !== location.pathname
    ) {
      localStorage.setItem('pathname', location.pathname);
    }
    this.setState({ location });
  };

  render() {
    const { children } = this.props;
    return <>{children}</>;
  }
}

export default ElectronRouter;
