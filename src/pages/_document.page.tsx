import { APP_META } from "@shared/meta";
import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this

  render() {
    return (
      <Html lang={APP_META.locale}>
        <Head />
        <body>
          {/* <!-- Yandex.Metrika counter --> */}
          <Script
            dangerouslySetInnerHTML={{
              __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                ym(97866811, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true
                });`,
            }}
          />
          <noscript>
            <div>
              <img
                src="https://mc.yandex.ru/watch/97866811"
                style={{ position: "absolute", left: "-9999px" }}
                alt=""
              />
            </div>
          </noscript>
          {/* <!-- /Yandex.Metrika counter --> */}

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
