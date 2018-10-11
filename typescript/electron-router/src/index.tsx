import * as React from 'react';
import { isElectron } from '@filou/core';
export * from '@reach/router';
import {
  createMemorySource,
  createHistory,
  History,
  WindowLocation,
  HistorySource
} from '@reach/router';

class ElectronRouter extends React.Component {
  history: History;
  source: HistorySource;

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
    return React.Children.only(children);
  }
}

export default ElectronRouter;
