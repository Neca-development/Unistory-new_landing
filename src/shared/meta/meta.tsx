import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { useTheme } from "next-themes";

import { APP_META } from "./meta.config";
import { ILang } from "@shared/lib/types";

type IMetaProperties = {
  title: ILang<string>;
  description: ILang<string>;
  canonical?: string;
};

const Meta = (props: IMetaProperties) => {
  const router = useRouter();

  const { theme } = useTheme();
  const faviconPrefix = theme === "dark" ? "-dark" : "";

  const { locale } = useRouter();

  return (
    <>
      <Head>
        <meta charSet="utf8" key="charset" />
        <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon${faviconPrefix}.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32${faviconPrefix}.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16${faviconPrefix}.png`}
          key="icon16"
        />
        <link rel="icon" href={`${router.basePath}/favicon${faviconPrefix}.ico`} key="favicon" />
      </Head>
      <NextSeo
        title={props.title[locale || "en"]}
        description={props.description[locale || "en"]}
        canonical={props.canonical}
        openGraph={{
          title: props.title[locale || "en"],
          description: props.description[locale || "en"],
          url: props.canonical,
          locale: APP_META.locale,
          site_name: APP_META.site_name,
        }}
      />
    </>
  );
};

export { Meta };
