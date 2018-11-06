import React from 'react';
export default (function (_ref) {
  var analyticsKey = _ref.analyticsKey;
  return React.createElement("script", {
    type: "text/plain",
    className: "_iub_cs_activate",
    dangerouslySetInnerHTML: {
      __html: "\n      var _gaq = _gaq || [];\n      _gaq.push(['_setAccount', '".concat(analyticsKey, "']);\n      _gaq.push(['_trackPageview']);\n      (function() {\n          var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;\n          ga.src = ('https:' == iosdocument.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';\n          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);\n      })();\n    ")
    }
  });
});