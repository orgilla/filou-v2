import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { createComponent } from 'react-fela';
import ReactMap from 'google-map-react';
var defaultCenter = {
  lat: 59.938043,
  lng: 30.337157
};
var defaultZoom = 9;
var StyledMap = createComponent(function () {
  return {
    height: '100%',
    width: '100%',
    '& *': {
      overflow: 'visible'
    }
  };
}, function (_ref) {
  var className = _ref.className,
      options = _ref.options,
      rest = _objectWithoutProperties(_ref, ["className", "options"]);

  return React.createElement("div", {
    className: className
  }, React.createElement(ReactMap, _extends({
    options: _objectSpread({
      minZoomOverride: true,
      minZoom: 2
    }, options || {})
  }, rest)));
}, function (p) {
  return Object.keys(p);
});
var Marker = createComponent(function (_ref2) {
  var theme = _ref2.theme,
      active = _ref2.active,
      onHover = _ref2.onHover;
  return {
    display: 'block',
    fill: active ? theme.color : theme.dark2,
    // opacity: !onHover || active || $hover ? 1 : 0.8,
    cursor: !!onHover && 'pointer'
  };
}, function (_ref3) {
  var className = _ref3.className,
      onHover = _ref3.onHover;
  return React.createElement("svg", {
    onMouseOver: onHover,
    className: className,
    width: 40,
    height: 40,
    viewBox: "0 0 1792 1792"
  }, React.createElement("path", {
    d: "M1152 640q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm256 0q0 109-33 179l-364 774q-16 33-47.5 52t-67.5 19-67.5-19-46.5-52l-365-774q-33-70-33-179 0-212 150-362t362-150 362 150 150 362z"
  }));
}, function (p) {
  return Object.keys(p);
});

var GoogleMap = function GoogleMap(_ref4) {
  var children = _ref4.children,
      center = _ref4.center,
      zoom = _ref4.zoom,
      apiKey = _ref4.apiKey,
      rest = _objectWithoutProperties(_ref4, ["children", "center", "zoom", "apiKey"]);

  return React.createElement(StyledMap, _extends({
    defaultCenter: defaultCenter,
    center: center,
    defaultZoom: defaultZoom,
    zoom: zoom,
    bootstrapURLKeys: {
      key: apiKey
    }
  }, rest), children);
};

GoogleMap.defaultProps = {
  center: defaultCenter,
  zoom: defaultZoom,
  apiKey: process.env.GOOGLE_MAPS_KEY
};
GoogleMap.Marker = Marker;
export default GoogleMap;