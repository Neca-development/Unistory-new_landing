import "@shared/styles/global.scss";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    hotjar.initialize(3900084, 6);
  }, []);
  return (
    <ThemeProvider attribute="class">
      {/* <ThemeContextProvider> */}
      <Component {...pageProps} />
      <GoogleTagManager gtmId="G-Q3N3QQXJV3" />
      <div id="portal" />
      {/* </ThemeContextProvider> */}
    </ThemeProvider>
  );
};

export default MyApp;
