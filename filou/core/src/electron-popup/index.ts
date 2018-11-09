import isElectron from '../is-electron';

let Menu: any = null;
if (isElectron) {
  Menu = window['require']('electron').remote.Menu;
}

const popup = (template: any) => {
  if (Menu) {
    const menu = Menu.buildFromTemplate(template);
    menu.popup({});
  }
};

export default popup;
