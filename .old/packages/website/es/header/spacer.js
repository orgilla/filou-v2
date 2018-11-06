import React from 'react-fela';
import { createComponent } from 'react-fela';
var Spacer = createComponent(function (_ref) {
  var hideIfSmall = _ref.hideIfSmall;
  return {
    flex: 1,
    extend: [{
      condition: hideIfSmall,
      style: {
        ifSmallDown: {
          display: 'none'
        }
      }
    }]
  };
}, 'div');
var HideIfSmall = createComponent(function () {
  return {
    flex: 1
  };
}, function () {
  return React.createElement(Spacer, null);
});
Spacer.HideIfSmall = HideIfSmall;
export default Spacer;