import React, { Fragment } from 'react';
import { Privacy, Cookie } from '../iubenda';

var About = function About(_ref) {
  var children = _ref.children,
      title = _ref.title,
      iubendaPolicyId = _ref.iubendaPolicyId;
  return React.createElement(Fragment, null, title && React.createElement("h3", null, title), React.createElement("p", null, children), React.createElement("h5", null, "Informationen zu Datenschutz und Cookies"), React.createElement(Privacy, {
    iubendaPolicyId: iubendaPolicyId
  }), React.createElement(Cookie, {
    iubendaPolicyId: iubendaPolicyId
  }));
};

export default About;