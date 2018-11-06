import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { Link, Route } from 'react-static';
import { Provider } from './link';
import { Provider as HistoryProvider } from './history';

var ReactStaticLink = function ReactStaticLink(_ref) {
  var className = _ref.className,
      to = _ref.to,
      children = _ref.children,
      onClick = _ref.onClick,
      rest = _objectWithoutProperties(_ref, ["className", "to", "children", "onClick"]);

  return React.createElement(Link, {
    to: to,
    className: className
  }, children);
};

var ReactStaticHistory = function ReactStaticHistory(props) {
  return React.createElement(Route, null, function (_ref2) {
    var location = _ref2.location;
    return props.children(location);
  });
};

export default (function (_ref3) {
  var children = _ref3.children;
  return React.createElement(HistoryProvider, {
    value: ReactStaticHistory
  }, React.createElement(Provider, {
    value: ReactStaticLink
  }, children));
});