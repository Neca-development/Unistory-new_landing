import { ThemeContextProvider } from "@shared/lib";
import "@shared/styles/global.scss";
import { ThemeProvider } from "next-themes";

import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class">
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  </ThemeProvider>
);

export default MyApp;
