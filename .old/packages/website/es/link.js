import React from 'react';
var ThemeContext = React.createContext('linkcomponent');
/* export class ThemeProvider extends React.Component {
  state = { theme: 'light' };

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
} */

var Provider = ThemeContext.Provider;
export { Provider };
export default ThemeContext.Consumer;
/* class ThemedButton extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => <Button theme={theme} />}
      </ThemeContext.Consumer>
    );
  }
} */