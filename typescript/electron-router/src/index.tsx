import * as React from 'react';
import { createMemoryHistory, MemoryHistory, Location } from 'history';
import { Router } from 'react-router-dom';

class ElectronRouter extends React.Component {
  history: MemoryHistory;

  location: Location;

  constructor(props: any) {
    super(props);
    let url = '/';
    if (typeof location !== 'undefined' && location.hash) {
      url = location.hash.substr(1);
    } else {
      url = localStorage.getItem('pathname') || url;
    }
    this.history = createMemoryHistory({
      initialEntries: [url || '/']
    });
  }

  componentDidMount() {
    this.history.listen(this.listener);
  }

  listener = (location: Location) => {
    if (this.location.pathname !== location.pathname) {
      localStorage.setItem('pathname', location.pathname);
    }
    this.location = location;
  };

  render() {
    const { children } = this.props;
    return <Router history={this.history}>{children}</Router>;
  }
}

export default ElectronRouter;
