import * as React from 'react';
import { isElectron } from '@filou/core';

let remote: any = null;
if (isElectron) {
  remote = window['require']('electron').remote;
  //  maximize = win.maximize;
}

interface IChildren {
  isMaximized?: boolean;
  disableMaximize?: boolean;
  disableMinimize?: boolean;
  currentWindow: any;
}
interface IsMaximizedProps {
  currentWindow?: any;
  disableMaximize?: boolean;
  disableMinimize?: boolean;
  children: (args: IChildren) => React.ReactNode;
}
class IsMaximized extends React.Component<IsMaximizedProps> {
  static decorate: (
    args: React.ComponentType
  ) => React.ComponentType = Comp => p => (
    <IsMaximized>{x => <Comp {...p} {...x} />}</IsMaximized>
  );
  static defaultProps = {
    currentWindow: remote && remote.getCurrentWindow()
  };

  state = {
    isMaximized: this.props.currentWindow
      ? this.props.currentWindow.isMaximized()
      : undefined
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

export default IsMaximized;
