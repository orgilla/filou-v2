import React from 'react';

var LinkComponent = function LinkComponent() {
  return console.warn('Overwrite LinkComponent') || null;
};

var HistoryComponent = function HistoryComponent() {
  return console.warn('Overwrite HistoryComponent') || null;
};

export var setLink = function setLink(renderer) {
  LinkComponent = renderer;
};
export var setHistory = function setHistory(renderer) {
  HistoryComponent = renderer;
};
export var Link = function Link(props) {
  return React.createElement(LinkComponent, props);
};
export var History = function History(props) {
  return React.createElement(HistoryComponent, props);
};