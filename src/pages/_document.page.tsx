import { APP_META } from "@shared/meta";
import Document, { Head, Html, Main, NextScript } from "next/document";
// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this

  render() {
    return (
      <Html lang={APP_META.locale}>
        <Head>
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

          <script
            dangerouslySetInnerHTML={{
              __html:
                '(()=>{const i=document.createElement("iframe");i.src="https://chatify.unistory.app/chat-bot/9dd8a123900617ff60d83219f9404fa5",i.id="chat-widget-iframe",i.style.position="fixed",i.style.bottom="84px",i.style.right="12px",i.style.zIndex="999",i.style.borderRadius="24px",i.style.display="none",document.body.appendChild(i),i.addEventListener("load",()=>{var e=document.createElement("button"),t=(e.id="chat-widget-button",e.style.position="fixed",e.style.bottom="12px",e.style.right="12px",e.style.width="64px",e.style.height="64px",e.style.borderRadius="999px",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.style.backgroundColor="oklch(61.68% 0.2074 312.03)",e.style.cursor="pointer",document.createElement("img"));t.src=https://chatify.unistory.app/assets/icons/common/ai-avatar.svg",t.style.width="58px",t.style.height="58px",e.appendChild(t),document.body.appendChild(e);e.addEventListener("click",()=>{var e;"none"===i.style.display?(i.style.height=(e=window.innerHeight-96)<=450||window.innerWidth<768?e+"px":"450px",i.style.width=(e=window.innerWidth-24)<=480?e+"px":"480px",i.style.display="block",window.innerWidth<768&&(document.body.style.overflow="hidden")):(i.style.display="none",window.innerWidth<768&&(document.body.style.overflow="auto"))})})})();',
            }}
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
