import { APP_META } from "@shared/meta";
import Document, { Head, Html, Main, NextScript } from "next/document";
// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this

  render() {
    return (
      <Html lang={APP_META.locale}>
        <Head>
          {process.env.NODE_ENV === "production" && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  if (window.location.hostname === '135.181.216.90') {
                    window.location.href = 'https://unistory.app' + window.location.pathname;
                  }
                `,
              }}
            />
          )}

          <meta
            name="robots"
            content={
              process.env.NEXT_PUBLIC_SITE_URL &&
              typeof window !== "undefined" &&
              window.location.hostname === "135.181.216.90"
                ? "noindex, nofollow"
                : "index, follow"
            }
          />
          <link rel="alternate" hrefLang="ru" href={`${process.env.NEXT_PUBLIC_SITE_URL}/ru/`} />
          <link rel="alternate" hrefLang="en" href={`${process.env.NEXT_PUBLIC_SITE_URL}/en/`} />
          <link rel="alternate" hrefLang="x-default" href={process.env.NEXT_PUBLIC_SITE_URL} />
          {/* <!-- Google tag (gtag.js) --> */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q3N3QQXJV3"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-Q3N3QQXJV3');
              `,
            }}
          />
          {/* <!-- /Google tag (gtag.js) --> */}
        </Head>
        <body>
          {/* <!-- Yandex.Metrika counter --> */}
          <script
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
                     accurateTrackBounce:true,
                     webvisor:true
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
