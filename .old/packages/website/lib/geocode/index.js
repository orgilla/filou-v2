"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _react = _interopRequireWildcard(require("react"));

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _icons = require("@filou/icons");

var _recompose = require("recompose");

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _class, _class2, _temp;

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n      query geocodeList($address: String!) {\n        geocodeList(address: $address, region: \"DE\", language: \"DE\") {\n          id\n          streetNumber\n          route\n          locality\n          administrativeAreaLevel1\n          administrativeAreaLevel2\n          country\n          postalCode\n          formattedAddress\n          lat\n          lng\n          locationType\n          partialMatch\n          types\n        }\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var enhance = (0, _recompose.compose)(withApollo, (0, _recompose.withState)('lat', 'setLat'), (0, _recompose.withState)('lng', 'setLng'), graphql((0, _graphqlTag.default)(_templateObject()), {
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
    return (0, _objectSpread2.default)({}, ownProps, {
      value: (0, _get2.default)(data, 'geocodeList[0]', {})
    });
  }
}), (0, _recompose.withState)('items', 'setItems', []));

var GeocodeEditor = enhance(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(GeocodeEditor, _Component);

  function GeocodeEditor() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, GeocodeEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(GeocodeEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onAdd", function (code) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          items = _this$props.items;
      _this.text = null;
      var item = items.find(function (x) {
        return x.id === code;
      });
      onChange(item);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "throttle", throttleInput(500));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSearch", function (term) {
      _this.text = term;

      if (term) {
        _this.throttle(function () {
          _this.performSearch(term);
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "performSearch", function (address) {
      var _this$props2 = _this.props,
          client = _this$props2.client,
          setItems = _this$props2.setItems;
      return client.query({
        query: (0, _graphqlTag.default)("\n            query geocodeList($address: String!) {\n              geocodeList(address: $address, region: \"DE\", language: \"DE\") {\n                id\n                streetNumber\n                route\n                locality\n                administrativeAreaLevel1\n                administrativeAreaLevel2\n                country\n                postalCode\n                formattedAddress\n                lat\n                lng\n                locationType\n                partialMatch\n                types\n              }\n            }\n          "),
        variables: {
          address: address
        }
      }).then(function (_ref3) {
        var data = _ref3.data;
        setItems(data.geocodeList);
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "renderOption", function (_ref4, i) {
      var id = _ref4.id,
          formattedAddress = _ref4.formattedAddress;
      return _react.default.createElement(AutoComplete.Option, {
        key: id || i,
        text: formattedAddress
      }, _react.default.createElement("div", {
        style: {
          whiteSpace: 'initial',
          display: 'flex'
        }
      }, formattedAddress));
    });
    return _this;
  }

  (0, _createClass2.default)(GeocodeEditor, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          value = _this$props3.value,
          size = _this$props3.size,
          placeholder = _this$props3.placeholder,
          items = _this$props3.items,
          setLat = _this$props3.setLat,
          setLng = _this$props3.setLng;
      return _react.default.createElement(AutoComplete, {
        value: this.text || (value ? value.formattedAddress : ''),
        style: {
          width: '100%'
        },
        dataSource: (items || []).map(this.renderOption),
        onSelect: this.onAdd,
        onSearch: this.handleSearch,
        optionLabelProp: "text"
      }, _react.default.createElement(Input, {
        placeholder: placeholder || 'Suche ...',
        size: size,
        suffix: _react.default.createElement(_icons.FaNeuter, {
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
}(_react.Component), (0, _defineProperty2.default)(_class2, "defaultProps", {
  value: null
}), _temp)) || _class;

exports.default = GeocodeEditor;