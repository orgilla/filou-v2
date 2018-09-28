import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isElectron from 'is-electron';

let remote = null;
if (isElectron()) {
  remote = window.require('electron').remote;
  //  maximize = win.maximize;
}

class IsMaximized extends Component {
  static propTypes = {
    disableMinimize: PropTypes.bool,
    disableMaximize: PropTypes.bool,
    currentWindow: PropTypes.object
  };

  static defaultProps = {
    currentWindow: remote && remote.getCurrentWindow()
  };

  state = {
    isMaximized:
      this.props.currentWindow && this.props.currentWindow.isMaximized()
  };

  componentDidMount = () => {
    const { currentWindow } = this.props;
    if (currentWindow) {
      currentWindow.addListener('maximize', () =>
        this.setState({ isMaximized: true })
      );
      currentWindow.addListener('unmaximize', () =>
        this.setState({ isMaximized: false })
      );
    }
  };

  render() {
    const {
      disableMaximize,
      disableMinimize,
      currentWindow,
      children
    } = this.props;
    const { isMaximized } = this.state;
    return children({
      isMaximized,
      disableMaximize,
      disableMinimize,
      currentWindow
    });
  }
}

IsMaximized.decorate = Comp => p => (
  <IsMaximized>{x => <Comp {...p} {...x} />}</IsMaximized>
);

export default IsMaximized;
