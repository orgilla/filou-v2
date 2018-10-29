import materialColors from './material-colors';
import defaultTheme from './default-theme';

export default (theme = {}) => ({
  colors: materialColors.map((color: any) => color.palette),
  ...defaultTheme(theme),
});
