import React from 'react';
import { createComponent } from 'react-fela';
import ScrollTop from '../scroll-top-restoration';
var Layout = createComponent(function () {
  return {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100vw',
    // overflowX: 'hidden',
    minHeight: '100vh'
  };
}, function (_ref) {
  var children = _ref.children,
      className = _ref.className;
  return React.createElement("div", {
    className: className
  }, children, React.createElement(ScrollTop, null));
});
export default Layout;