import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";
import _get from "lodash/get";

var _class, _class2, _temp;

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      query geocodeList($address: String!) {\n        geocodeList(address: $address, region: \"DE\", language: \"DE\") {\n          id\n          streetNumber\n          route\n          locality\n          administrativeAreaLevel1\n          administrativeAreaLevel2\n          country\n          postalCode\n          formattedAddress\n          lat\n          lng\n          locationType\n          partialMatch\n          types\n        }\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import { FaNeuter } from '@filou/icons';
import { compose, withState } from 'recompose';
import gql from 'graphql-tag';
var enhance = compose(withApollo, withState('lat', 'setLat'), withState('lng', 'setLng'), graphql(gql(_templateObject()), {
  options: function options(_ref) {
    var lat = _ref.lat,
        lng = _ref.lng;
    return {
      skip: lat === undefined || lng === undefined,
      variables: {
        address: "".concat(lat, ", ").concat(lng)
      }
    };
  },
  props: function props(_ref2) {
    var ownProps = _ref2.ownProps,
        data = _ref2.data;
    return _objectSpread({}, ownProps, {
      value: _get(data, 'geocodeList[0]', {})
    });
  }
}), withState('items', 'setItems', []));

var GeocodeEditor = enhance(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(GeocodeEditor, _Component);

  function GeocodeEditor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GeocodeEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GeocodeEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAdd", function (code) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          items = _this$props.items;
      _this.text = null;
      var item = items.find(function (x) {
        return x.id === code;
      });
      onChange(item);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "throttle", throttleInput(500));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSearch", function (term) {
      _this.text = term;

      if (term) {
        _this.throttle(function () {
          _this.performSearch(term);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "performSearch", function (address) {
      var _this$props2 = _this.props,
          client = _this$props2.client,
          setItems = _this$props2.setItems;
      return client.query({
        query: gql("\n            query geocodeList($address: String!) {\n              geocodeList(address: $address, region: \"DE\", language: \"DE\") {\n                id\n                streetNumber\n                route\n                locality\n                administrativeAreaLevel1\n                administrativeAreaLevel2\n                country\n                postalCode\n                formattedAddress\n                lat\n                lng\n                locationType\n                partialMatch\n                types\n              }\n            }\n          "),
        variables: {
          address: address
        }
      }).then(function (_ref3) {
        var data = _ref3.data;
        setItems(data.geocodeList);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderOption", function (_ref4, i) {
      var id = _ref4.id,
          formattedAddress = _ref4.formattedAddress;
      return React.createElement(AutoComplete.Option, {
        key: id || i,
        text: formattedAddress
      }, React.createElement("div", {
        style: {
          whiteSpace: 'initial',
          display: 'flex'
        }
      }, formattedAddress));
    });

    return _this;
  }

  _createClass(GeocodeEditor, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          value = _this$props3.value,
          size = _this$props3.size,
          placeholder = _this$props3.placeholder,
          items = _this$props3.items,
          setLat = _this$props3.setLat,
          setLng = _this$props3.setLng;
      return React.createElement(AutoComplete, {
        value: this.text || (value ? value.formattedAddress : ''),
        style: {
          width: '100%'
        },
        dataSource: (items || []).map(this.renderOption),
        onSelect: this.onAdd,
        onSearch: this.handleSearch,
        optionLabelProp: "text"
      }, React.createElement(Input, {
        placeholder: placeholder || 'Suche ...',
        size: size,
        suffix: React.createElement(FaNeuter, {
          size: 14,
          onClick: function onClick() {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function (_ref5) {
                var coords = _ref5.coords;
                setLat(coords.latitude);
                setLng(coords.longitude);
              });
            }
          }
        })
      }));
    }
  }]);

  return GeocodeEditor;
}(Component), _defineProperty(_class2, "defaultProps", {
  value: null
}), _temp)) || _class;

export { GeocodeEditor as default };