"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Provider = void 0;

var _react = _interopRequireDefault(require("react"));

var ThemeContext = _react.default.createContext('linkcomponent');
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
exports.Provider = Provider;
var _default = ThemeContext.Consumer;
/* class ThemedButton extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => <Button theme={theme} />}
      </ThemeContext.Consumer>
    );
  }
} */

exports.default = _default;