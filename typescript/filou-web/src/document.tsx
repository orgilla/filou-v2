import * as React from 'react';

interface ISheet {
  type: string;
  css: string;
  media?: string;
  support?: string;
  rehydration?: string | boolean;
}
interface IRenderMeta {
  sheetList: Array<ISheet>;
}
interface IDocument {
  lang: string;
  description: string;
  title: string;
  color: string;
  Html: React.ComponentType<any>;
  Head: React.ComponentType<any>;
  Body: React.ComponentType<any>;
  renderMeta: IRenderMeta;
  analyticsKey?: string;
  ibuendaId?: string;
  ibuendaPolicyId?: string;
  prismic?: string;
}
const Document: React.SFC<IDocument> = ({
  lang,
  description,
  title,
  color,
  Html,
  Head,
  Body,
  children,
  renderMeta,
  analyticsKey,
  ibuendaId,
  ibuendaPolicyId
}) => {
  const elements = renderMeta.sheetList
    ? renderMeta.sheetList.map(({ type, css, media, support, rehydration }) => (
        <style
          type="text/css"
          key={`${type}-${media}`}
          data-fela-rehydration={rehydration}
          dangerouslySetInnerHTML={{ __html: css }}
          data-fela-type={type}
          data-fela-support={support}
          media={media}
        />
      ))
    : [];

  return (
    <Html lang={lang}>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="medizin,knorpel,arhtrose,mact,act,osteo"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta httpEquiv="Content-Language" content="de" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          content="black-translucent"
          name="apple-mobile-web-app-status-bar-style"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#215e8b" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />

        {analyticsKey && (
          <script
            type="text/plain"
            className="_iub_cs_activate"
            dangerouslySetInnerHTML={{
              __html: `
                var _gaq = _gaq || [];
                _gaq.push(['_setAccount', '${analyticsKey}']);
                _gaq.push(['_trackPageview']);
                (function() {
                    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
                    ga.src = ('https:' == iosdocument.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
                })();
              `
            }}
          />
        )}
        {ibuendaId && (
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                var _iub = _iub || []; _iub.csConfiguration = {"banner":{"textColor":"white","backgroundColor":"${color}"},"lang":"${lang}","siteId":${ibuendaId},"consentOnScroll":false,"cookiePolicyId":${ibuendaPolicyId}};
              `
            }}
          />
        )}
        {ibuendaId && (
          <script
            type="text/javascript"
            src="//cdn.iubenda.com/cookie_solution/safemode/iubenda_cs.js"
            charSet="UTF-8"
            async
          />
        )}
        {elements}
      </Head>
      <Body>{children}</Body>
    </Html>
  );
};
export default Document;
