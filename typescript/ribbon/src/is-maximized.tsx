import * as React from 'react';
//@ts-ignore
import * as isElectron from 'is-electron';

let remote: any = null;
if (typeof window !== 'undefined' && isElectron()) {
  remote = window['require']('electron').remote;
  //  maximize = win.maximize;
}

interface IsMaximizedProps {
  currentWindow?: any;
  disableMaximize?: boolean;
  disableMinimize?: boolean;
  children: (args: any) => React.ReactNode;
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

export default IsMaximized;
