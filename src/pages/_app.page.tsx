import { ThemeContextProvider } from "@shared/lib";
import "@shared/styles/global.scss";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Suspense } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return <ThemeProvider attribute="class">
		<ThemeContextProvider>
			<Suspense>
				<Component {...pageProps} />
				<div id="portal" />
			</Suspense>
		</ThemeContextProvider>
	</ThemeProvider>
};

export default MyApp;
