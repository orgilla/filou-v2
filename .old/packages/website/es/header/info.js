import React from 'react';
import { createComponent } from 'react-fela';
import Header from './header';
var Info = createComponent(function () {
  return {
    zIndex: 11,
    height: '100%'
  };
}, function (props) {
  return React.createElement(Header, props);
}, function (p) {
  return Object.keys(p);
});
export default Info;