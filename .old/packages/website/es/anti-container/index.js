import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import { createComponent } from 'react-fela';
var AntiContainer = createComponent(function () {
  return {
    ifMediumUp: {
      marginX: -200
    },
    ifLargeUp: {
      marginX: -300
    }
  };
}, 'div', function (_ref) {
  var minHeight = _ref.minHeight,
      p = _objectWithoutProperties(_ref, ["minHeight"]);

  return Object.keys(p);
});
export default AntiContainer;