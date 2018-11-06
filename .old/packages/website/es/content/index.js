import _objectSpread from "@babel/runtime/helpers/objectSpread";
import { createComponent } from 'react-fela';
import get from 'lodash/get';
import { getStyle } from '../ul';
var Content = createComponent(function (_ref) {
  var theme = _ref.theme;
  return _objectSpread({
    flex: 1,
    minHeight: 'calc(85vh)',
    marginBottom: 100,
    '& p': {
      textAlign: 'justify',
      hyphens: 'auto'
    },
    '& ul': getStyle({
      theme: theme
    })
  }, get(theme, 'filou/static/Content', {}));
});
export default Content;