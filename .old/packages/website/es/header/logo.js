import _typeof from "@babel/runtime/helpers/typeof";
import React from 'react';
import { createComponent } from 'react-fela';
import LinkConsumer from '../link';

var LogoInner = function LogoInner(_ref) {
  var onClick = _ref.onClick,
      to = _ref.to,
      className = _ref.className,
      RawLogo = _ref.logo,
      logoText = _ref.logoText;
  return React.createElement(LinkConsumer, null, function (Link) {
    return React.createElement(Link, {
      to: to,
      onClick: onClick,
      className: className
    }, _typeof(RawLogo) === 'object' ? RawLogo : React.createElement(RawLogo, {
      key: "logo"
    }));
  });
};

var Logo = createComponent(function () {
  return {
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
    height: '100%',
    '> svg': {
      // height: '100%',
      width: 'auto'
    },
    // marginLeft: -10,
    // height: 56,
    transition: 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
    textDecoration: 'none' // transform: sticky.isSticky ? 'scale(0.8) translateX(-26px)' : undefined

  };
}, LogoInner, function (p) {
  return Object.keys(p);
});
export default Logo;