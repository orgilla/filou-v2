export { default as useAxios } from './use-axios';
export { default as useStorage } from './use-storage';
export { default as StateProvider } from './state-provider';
export { default as Decimal } from './decimal';
export { default as isElectron } from './is-electron';
export { default as isOSX } from './is-osx';
export { default as isWindows } from './is-windows';
export { default as Container } from './container';
export { default as createElement } from './create-element';
export * from './create-element';
export { default as electronErrorReporter } from './electron-error-reporter';
export { default as electronPopup } from './electron-popup';
export {
  defaultTheme,
  css,
  cx,
  lighten,
  darken,
  fade,
  gradient,
  textColor,
  getColor,
  ThemeProvider,
  useTheme,
  DarkProvider,
  useDark
} from './theme';

// Deprecated
export { default as Provider } from './deprecated/provider';
export { default as FelaComponent } from './deprecated/fela-component';
export * from './deprecated/fela-component';
export { default as createRenderer } from './deprecated/create-renderer';
export { default as FlexGrid } from './deprecated/flex-grid';
export * from './deprecated/flex-grid';
