import isElectron from '../is-electron';

class ElectronErrorReporter {
  ipc: any = null;
  constructor() {
    if (isElectron) {
      this.ipc = window['require']('electron').ipcRenderer;
    }

    window.onerror = (msg, url, lineNo, columnNo, error) => {
      if (this.ipc) {
        this.ipc.send('errorInWindow', error);
      }
    };
  }
  report(error: any) {
    this.ipc.send('errorInWindow', error);
  }
}

export default () => new ElectronErrorReporter();
