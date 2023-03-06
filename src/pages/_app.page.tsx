import { ThemeContextProvider } from "@shared/lib";
import "@shared/styles/global.scss";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => (
	<>
		<Script
			strategy="lazyOnload"
			src="https://www.googletagmanager.com/gtag/js?id=G-Q3N3QQXJV3"
		/>
		<Script strategy="lazyOnload" id="google-analytics">
			{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag(‘js’, new Date());
        gtag(‘config’, ‘G-Q3N3QQXJV3’);
    `}
		</Script>
		<ThemeProvider attribute="class">
			<ThemeContextProvider>
				<Component {...pageProps} />
			</ThemeContextProvider>
		</ThemeProvider>
	</>
);

export default MyApp;
