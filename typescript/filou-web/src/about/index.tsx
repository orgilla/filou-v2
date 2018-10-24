import * as React from 'react';

interface IFooter {}
const Footer: React.SFC<IFooter> = ({ children }) => {
  return (
    <>
      {children}
      <h5>Informationen zu Datenschutz und Cookies</h5>
      {/*<iframe
            className="iubenda-ibadge"
            scrolling="no"
            allowTransparency="true"
            style={{ width: 105, height: 22 }}
            frameBorder={0}
          />
          <iframe
            className="iubenda-ibadge"
            scrolling="no"
            allowTransparency="true"
            style={{ width: 105, height: 22 }}
            frameBorder={0}
          />*/}
    </>
  );
};
export default Footer;
