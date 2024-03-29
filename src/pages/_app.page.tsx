import "@shared/styles/global.scss";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import TagManager from "react-gtm-module";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: "G-Q3N3QQXJV3" });
    hotjar.initialize(3900084, 6);
  }, []);
  return (
    <ThemeProvider attribute="class">
      {/* <ThemeContextProvider> */}
      <Component {...pageProps} />
      <div id="portal" />
      {/* </ThemeContextProvider> */}
    </ThemeProvider>
  );
};

export default MyApp;
