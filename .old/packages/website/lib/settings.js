"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.History = exports.Link = exports.setHistory = exports.setLink = void 0;

var _react = _interopRequireDefault(require("react"));

var LinkComponent = function LinkComponent() {
  return console.warn('Overwrite LinkComponent') || null;
};

var HistoryComponent = function HistoryComponent() {
  return console.warn('Overwrite HistoryComponent') || null;
};

var setLink = function setLink(renderer) {
  LinkComponent = renderer;
};

exports.setLink = setLink;

var setHistory = function setHistory(renderer) {
  HistoryComponent = renderer;
};

exports.setHistory = setHistory;

var Link = function Link(props) {
  return _react.default.createElement(LinkComponent, props);
};

exports.Link = Link;

var History = function History(props) {
  return _react.default.createElement(HistoryComponent, props);
};

exports.History = History;