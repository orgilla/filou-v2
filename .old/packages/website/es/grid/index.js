import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { createComponent } from 'react-fela';
import { Container } from '@filou/core';
import format from "date-fns/format";
import Grid from '@filou/grid';
import Button from '../button';
import getSrc from '../get-img';
import LinkConsumer from '../link';
var Panel = createComponent(function (_ref) {
  var image = _ref.image,
      theme = _ref.theme;
  return {
    padding: '0 16px 24px 16px',
    '> a': {
      '> div': image ? {
        height: 150,
        backgroundColor: 'lightgray',
        width: '100%',
        backgroundImage: "url(".concat(getSrc(image), ")"),
        backgroundSize: 'cover'
      } : null,
      display: 'block',
      backgroundColor: '#FFFFFF',
      borderRadius: theme.borderRadius,
      overflow: 'hidden',
      height: '100%',
      boxShadow: theme.boxShadow,
      textDecoration: 'none',
      '> h3': {
        paddingX: !theme.boxShadow ? undefined : theme.space2,
        minHeight: 60,
        marginBottom: 0,
        marginTop: 0,
        paddingBottom: 0
      },
      '> p': {
        paddingX: !theme.boxShadow ? undefined : theme.space2,
        marginBottom: theme.space2,
        textDecoration: 'none'
      },
      '> span': {
        paddingX: !theme.boxShadow ? undefined : theme.space2,
        paddingY: theme.space2,
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'row',
        '> b': {
          flex: 1
        }
      }
    }
  };
}, function (_ref2) {
  var title = _ref2.title,
      image = _ref2.image,
      text = _ref2.text,
      date = _ref2.date,
      className = _ref2.className,
      type = _ref2.type,
      rest = _objectWithoutProperties(_ref2, ["title", "image", "text", "date", "className", "type"]);

  return React.createElement("div", {
    className: className
  }, React.createElement(LinkConsumer, null, function (Link) {
    return React.createElement(Link, rest, React.createElement("div", null), React.createElement("span", null, date && React.createElement("span", null, format(date, 'DD.MM.YYYY HH:mm')), React.createElement("b", null), type && React.createElement(Button, null, type)), React.createElement("h3", null, title), React.createElement("p", null, text));
  }));
}, function (p) {
  return Object.keys(p);
});

var GridPanels = function GridPanels(_ref3) {
  var items = _ref3.items;
  return React.createElement(Container, null, React.createElement(Grid, {
    size: 4,
    marginX: -27
  }, items.map(function (item, i) {
    return React.createElement(Grid.Item, {
      small: 1,
      key: item.to || item.id || i
    }, React.createElement(Panel, item));
  })));
};

export default GridPanels;